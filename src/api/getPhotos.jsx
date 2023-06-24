const URL = 'https://pixabay.com/api/?';

const searchParams = new URLSearchParams({
  key: '35598116-086839572ecc040a3411fcb61',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const getPhotos = (searchText, page) =>
  fetch(`${URL}q=${searchText}&page=${page}&${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
