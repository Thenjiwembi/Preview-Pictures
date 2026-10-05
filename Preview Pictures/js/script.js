function upDate(previewPic) {
  /* 1. Log to console to verify the event is triggering */
  console.log("Mouse over event triggered!");

  /* 2. Log alt and src of the previewPic variable */
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  /* 3. Change the text of the element with id 'image' to the alt text of previewPic */
  document.getElementById('image').innerHTML = previewPic.alt;

  /* 4. Change the background image of the element with id 'image' to the src of previewPic */
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  /* 1. Reset the background image back to original empty state */
  document.getElementById('image').style.backgroundImage = "url('')";

  /* 2. Reset the text back to the original placeholder text */
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}