$(function() {

  $("#menu").slicknav({
    label: "",
    duration: 500
  })

  $(".banner .slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out"
  });

  $(".top-10 .slider").slick({
    autoplay: true,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      }
    ]
  });

});