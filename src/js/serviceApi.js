import Notiflix from 'notiflix';
import axios from 'axios';

export class ServiceApi {
  static ENDPOINT = 'https://pixabay.com/api/';
	static API_KEY = '35859686-36ef21cd2f26c66500ecce7f0';
	PER_PAGE = 40;

  constructor() {
    this.query = '';
    this.page = 1;
  }

  async getimage() {
    const url = `${ServiceApi.ENDPOINT}?key=${ServiceApi.API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.PER_PAGE}`;

    const { data } = await axios.get(url);
    if (data.totalHits === 0) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      throw new Error('data is empty');
    }
    // console.log(data);

    return data;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
