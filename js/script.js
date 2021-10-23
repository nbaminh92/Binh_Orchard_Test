// Get element on click
window.onclick = e => {
    console.log(e.target);  // to get the element

    /* function to display modal when clicking to each image on top section */

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // use the target from Window onclick to get the ID of the image
    var img = document.getElementById(e.target.id);

    var modalImg = document.getElementById("enlarge_image");
    var captionText = document.getElementById("caption");

    // Check if the tag name is img or else it might confuse with other element that has ID
    // prevent errors when user click to bottom section image.
    if (e.target.tagName === 'IMG' && e.target.className !== 'bottom_section_image') {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    }


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Click on black space can close the popup modal
    if (e.target == modal) {
      modal.style.display = "none";
    }
}
