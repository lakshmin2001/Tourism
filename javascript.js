
  const links = document.querySelectorAll(".page-header a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}











//
//dns1.p01.nsone.net
//dns2.p01.nsone.net
//dns3.p01.nsone.net
//dns4.p01.nsone.net