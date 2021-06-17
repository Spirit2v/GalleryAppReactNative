

const axios = require('axios');
const yourApiKey = '532776feb370385e867d9400fac9d2ed';

const data = {
  method: 'flickr.photos.search',
  api_key: yourApiKey,
  text: 'cat', // Search Text
  sort: 'interestingness-desc',
  per_page: 12,
  license: '4',
  extras: 'owner_name,license',
  format: 'json',
  nojsoncallback: 1,
};

const parameters = new URLSearchParams(data);

const getFlickrImageURL = (photo, size) => {
    let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${
      photo.secret
    }`;
    if (size) {
      // Configure image size
      url += `_${size}`;
    }
    url += '.jpg';
    return url;
  };
  
  const url = `https://api.flickr.com/services/rest/?${parameters}`;
  
  axios.get(url)
    .then(response => response.json())
    .then(data => (
      // get an array of image-url
      data.photos.photo.map((photo) => {
        return getFlickrImageURL(photo, 'q');
      })
    ));