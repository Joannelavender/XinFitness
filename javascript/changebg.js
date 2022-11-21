const topheader = document.querySelector(".top");



addEventListener("resize", (e) => {
  if (window.innerWidth <= 414){
  }
 else {document.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY >= 200)
    topheader.style.backgroundColor = `rgba(250,250,250,1)`;
  if (window.scrollY < 200) topheader.style.background = `rgba(250,250,250,.5)`;
});}
 });

 