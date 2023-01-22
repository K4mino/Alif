var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".gallery-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
      });
    });
  });