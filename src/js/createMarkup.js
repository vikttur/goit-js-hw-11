export function createMarkup(imagesData) {
	// console.log('creating markup start');
	
  const markup = imagesData.reduce(
    (markup, images) => markup + createListELement(images), ''
	);
	
  // console.log('creating markup finish');
  return markup;
};

function createListELement({
	webformatURL,
	tags,
	likes,
	views,
	comments,
	downloads,
})
{
  return `<div class="photo-card">
  <div class="photo-box">
		<img src="${webformatURL}" alt="${tags}" class="photo-image" loading="lazy" />
	</div>
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>`;
};
