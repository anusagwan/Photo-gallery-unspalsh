function listPhotos() {
  let url =
    'https://api.unsplash.com/photos?page=1&per_page=14&client_id=WxI9jtyutenFkfFaHsPf7PgYu3J0ZTGwlaPJl2m9E7I';
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      data.forEach((photo, i) => {
        $('#imageConatiner').append(`
         <div class="images">
          <img src="${photo.urls.regular}" /></div>`);
      });
    });
}
// implementing the event bubbling of js to achieve the feature of image in a modal on image clicked
document.getElementById('imageConatiner').addEventListener('click', imageClickModal);
function imageClickModal(e) {
  //e.target.currentSrc ---gives the respective image url clicked
  var currentImage = e.target.currentSrc;
  console.log(currentImage, 'event');
  var modal = document.getElementById('modal-container');

  var imageModal = document.getElementById('specific-images');
  modal.style.display = 'block';
  imageModal.src = currentImage;

  var span = document.getElementsByClassName('close')[0];

  span.onclick = function () {
    modal.style.display = 'none';
  };
}
