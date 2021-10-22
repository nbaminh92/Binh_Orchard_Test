// Get element on click
window.onclick = e => {
    console.log(e.target);  // to get the element

    /* function to display modal when clicking to each image on top section */
    
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // use the target from Window onclick to get the ID of the image
    var img = document.getElementById(e.target.id);

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Check if the tag name is img or else it might confuse with other element that has ID
    if (e.target.tagName === 'IMG') {
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    }


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
}
