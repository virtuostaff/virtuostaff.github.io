window.addEventListener("scroll", ()=> {
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible)
      reveals[i].classList.add("active");
    else reveals[i].classList.remove("active");
  }
});

let navs = ["solution", "about-us", "qualifications", "contact-us"];
for(let nav of navs) {
  $("#" + nav).hover(()=> {
    $(".nav-link.active").removeClass("active");  
    $("#" + nav + "-nav").addClass("active");
  });
}