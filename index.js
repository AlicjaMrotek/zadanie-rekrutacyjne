var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true
});


function searchFunction() {
    document.getElementById("searchDropdown").classList.toggle("show");
  };

function expand() {
  document.getElementById("gallery").classList.remove("gallery-hidden");
  document.getElementById("floating-btn").classList.add("hide");
  document.getElementById("gradient").classList.add("hide");

};
