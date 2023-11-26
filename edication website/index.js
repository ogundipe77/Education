document.addEventListener("scroll", ()=>{
    let header = document.querySelector("nav");
    if(window.scrollY>0){
        header.classList.add("nav_scroll")
    }
    else{
        header.classList.remove("nav_scroll")
    }
})


const faq = document.querySelectorAll(".faq__menu");
faq.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("open")
    })
    
    // const icons = faq__list.querySelectorAll(".bar");
    // if(icons.className === "plus-icon"){
    //     icons.className = "bar-1"
    // }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });