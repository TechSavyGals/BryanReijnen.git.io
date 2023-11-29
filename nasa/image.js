const apodImage = document.getElementById('apodImage');

function getApodImage() {
 fetch('https://api.nasa.gov/planetary/apod?api_key=rdui40g5fSkmfcKOH0c6xncx2VlvDGgXDu3BPp2m')
    .then(response => response.json())
    .then(data => {
      apodImage.src = data.url;
      apodImage.alt = data.title;
    })
    .catch(error => {
      console.error('Error fetching APOD image:', error);
    });
}
function getApodData() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=rdui40g5fSkmfcKOH0c6xncx2VlvDGgXDu3BPp2m')
       .then(response => response.json())
       .then(data => {
         apodImage.src = data.url;
         apodImage.alt = data.title;
         const explanationText = document.createElement('p');
         explanationText.textContent = data.explanation;
         document.body.appendChild(explanationText);
       })
       .catch(error => {
         console.error('Error fetching APOD data:', error);
       });
   }
   
getApodData();
getApodImage();
