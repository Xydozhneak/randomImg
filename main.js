function getRandomImage() {
    const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'];
  
    let randomIndex = Math.floor(Math.random() * images.length);
  
    let randomImage = images[randomIndex];
  
    let img = document.createElement('img');
  
    img.src = 'img/' + randomImage;
  
    document.body.prepend(img);
  }
  
  getRandomImage();