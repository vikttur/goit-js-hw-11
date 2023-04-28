import Notiflix from 'notiflix';
import axios from 'axios';

console.log(axios.isCancel('something')); // перевірка axios

// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// Notiflix.Notify.info('We're sorry, but you've reached the end of search results.');
// Notiflix.Notify.failure('Oops, there is no country with that name');
// Notiflix.Notify.info('Hooray! We found totalHits images.');
