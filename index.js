function showImage(url, alt) {
  const img = document.createElement('img');
  
  img.src = url;
  img.alt = alt || 'Image';
  
  document.body.appendChild(img);
}

const url = `./assets/${Math.floor(Math.random()*10)}.jpg`;
const alt = 'nature';
showImage(url, alt);