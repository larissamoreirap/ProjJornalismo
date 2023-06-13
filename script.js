var slider = document.querySelector('.image-slider');
var images = slider.getElementsByTagName('img');
var index = 0;
var intervalId;
function showImage(indexToShow) {
    for (var i = 0; i < images.length; i++) {
      if (i === indexToShow) {
        images[i].classList.add('active');
      } else {
        images[i].classList.remove('active');
      }
    }
  }
  
  function previousImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  }
  
  function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
  }
  
  function startSlider() {
    intervalId = setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos
  }
  
  function stopSlider() {
    clearInterval(intervalId);
  }
  
  // Iniciar o slider automaticamente
  startSlider();
  