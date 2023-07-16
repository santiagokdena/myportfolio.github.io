var scrollLinks = document.getElementsByClassName("scroll-link");
for (var i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener("click", function() {
    var target = this.getAttribute("data-target");
    var section = document.getElementById(target);
    section.scrollIntoView({ behavior: "smooth" });
  });
}
