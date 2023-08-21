//// Masonry
var elem = document.querySelector(".grid");
var msnry = new Masonry(elem, {
  // options
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  gutter: ".gutter-sizer",
  percentPosition: true,
});
//// Search
function searchFunction() {
  document.getElementById("searchDropdown").classList.toggle("show");
}

////Expand Gallery
const expBtn = document.getElementById("expandButton");

const expandButtonPressed = () => {
  document.getElementById("gallery").classList.remove("gallery-hidden");
  document.getElementById("expandButton").classList.add("hide");
  document.getElementById("closeButton").classList.remove("hide");
  document.getElementById("gradient").classList.add("hide");
};

expBtn.addEventListener("click", expandButtonPressed);

////Close gallery

const clsBtn = document.getElementById("closeButton");

const closeButtonPressed = () => {
  document.getElementById("gallery").classList.add("gallery-hidden");
  document.getElementById("expandButton").classList.remove("hide");
  document.getElementById("closeButton").classList.add("hide");
  document.getElementById("gradient").classList.remove("hide");
};

clsBtn.addEventListener("click", closeButtonPressed);

////Enlarge photo
const galleryGroup = document.getElementById("gallery");

const galleryGroupPressed = (e) => {
  const isPhoto = e.target.className.includes("grid-item");
  if (!isPhoto) {
    return;
  }
  let url = e.target.style.backgroundImage;
  let imgSrc = url.slice(5, url.length - 2);

  // console.log(imgSrc);
  let selectedPhoto = document.getElementById("selectedPhoto");
  selectedPhoto.setAttribute("src", imgSrc);
  document.getElementById("previewPhoto").classList.remove("hide");
};

galleryGroup.addEventListener("click", galleryGroupPressed);

function closePreview() {
  document.getElementById("previewPhoto").classList.add("hide");
}

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closePreview();
  }
});
