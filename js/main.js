$(document).ready(function () {
  $(".banner-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    pauseOnHover: false,
  });

  $(".menu").click(function () {
    $(".overlay").toggleClass("anim");
    $(this).addClass("open");
  });

  $(".open").click(function () {
    $(".overlay").toggleClass("reverse-animation");
  });

  const aboutHeading = $(".about article h1");
  const aboutPara = $(".about article p");
  const address = $(".address");
  const contacts = $(".contacts");

  const aboutHeadingTween = TweenMax.from(aboutHeading, 1, {
    y: -120,
    ease: Cubic.easeOut,
  });
  const aboutParaTween = TweenMax.from(aboutPara, 2, {
    y: 100,
    ease: "expo.out",
  });
  const addressTween = TweenMax.from(address, 1, {
    y: 160,
    ease: Cubic.easeOut,
  });
  const contactsTween = TweenMax.from(contacts, 1, {
    y: 190,
    ease: Cubic.easeOut,
  });

  const ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 1,
    },
  });

  new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: "100%",
  })
    .setTween(aboutHeadingTween)
    .addTo(ctrl);

  new ScrollMagic.Scene({
    triggerElement: ".about",
    duration: "100%",
  })
    .setTween(aboutParaTween)
    .addTo(ctrl);

  new ScrollMagic.Scene({
    triggerElement: ".location",
    duration: "100%",
  })
    .setTween(addressTween)
    .addTo(ctrl);

  new ScrollMagic.Scene({
    triggerElement: ".location",
    duration: "140%",
  })
    .setTween(contactsTween)
    .addTo(ctrl);
});

const fileInput = document.querySelector(".file-btn input[type=file]");
fileInput.addEventListener("change", (e) => {
  const fileName = e.target.files[0].name;
  document.querySelector(".readonly").value = fileName;
});
