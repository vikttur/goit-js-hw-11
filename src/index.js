
import Notiflix from 'notiflix';
import { ServiceApi } from './js/serviceApi.js';
import { createMarkup } from './js/createMarkup.js';
import LoadMoreBtn from './js/LoadMoreBtn.js';

const serviceAPI = new ServiceApi();

const refs = {
  form: document.getElementById('search-form'),
	gallery: document.querySelector('.gallery'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more',
});

refs.form.addEventListener('submit', onSubmitForm);
loadMoreBtn.btn.addEventListener('click', onClickLoadMoreBtn);

async function onSubmitForm(event) {
	event.preventDefault();
	
  const query = refs.form.elements.searchQuery.value;
  serviceAPI.query = query;
  serviceAPI.resetPage();

	const responce = await serviceAPI.getimage();
	refs.gallery.innerHTML = createMarkup(responce.hits);
  
	loadMoreBtn.empty();

	if (responce.totalHits > serviceAPI.page * serviceAPI.PER_PAGE) {
		loadMoreBtn.enable();
		loadMoreBtn.show();
	};

	Notiflix.Notify.info(`Hooray! We found ${responce.totalHits} images.`);
};

async function onClickLoadMoreBtn() {
  // console.log('load more');
	loadMoreBtn.disable();

  serviceAPI.incrementPage();
	const responce = await serviceAPI.getimage();
	const enableBtn = loadMoreBtn.enable();
  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(responce.hits));

	// console.log('totalHits:', responce.totalHits);
  // console.log('serviceAPI.page:', serviceAPI.page * serviceAPI.PER_PAGE);
  
	if ((serviceAPI.page + 1) * serviceAPI.PER_PAGE >= responce.totalHits) {
		loadMoreBtn.empty();
		Notiflix.Notify.info("We're sorry, but you've reached the end of search results.")
		return;
	};
};
