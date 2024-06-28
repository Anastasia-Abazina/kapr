/*анимация иконок в тексте (кто мы?)*/

/*анимация фото (кто мы?)*/

document.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".floating-image");
  const scrollPosition = window.scrollY;

  images.forEach((image, index) => {
    const speed = (index % 2 === 0 ? 1 : -1) * 100;
    const offset = (scrollPosition * speed) / 100;
    image.style.transform = `translateY(${offset}px) rotate(${offset / 2}deg)`;
    image.style.opacity = 1 - Math.min(scrollPosition / window.innerHeight, 1);
  });
});

/*анимация карточек (Пространство)*/

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      card.classList.add("card-scale");
      const img = card.querySelector(".card-image");
      img.classList.add("card-image-scale");
    });
    card.addEventListener("mouseout", function () {
      card.classList.remove("card-scale");
      const img = card.querySelector(".card-image");
      img.classList.remove("card-image-scale");
    });
  });
});

/*книга*/

$(document).ready(function () {
  const images = $(".image-stack img").toArray();

  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  images.forEach((img, i) => {
    $(img).css("z-index", i);
  });

  images.forEach((img) => {
    $(img).click(function () {
      $(this).css(
        "z-index",
        Math.min(...images.map((img) => parseInt($(img).css("z-index")))) - 1
      );
    });
  });

  images.forEach((img) => {
    const xOffset = Math.floor(Math.random() * 50) - 25;
    const yOffset = Math.floor(Math.random() * 50) - 25;

    $(img).css({
      top: `calc(50% + ${yOffset}px)`,
      left: `calc(50% + ${xOffset}px)`,
      transform: "translate(-50%, -50%)",
    });
    if (Math.random() > 0.5) {
      const rotation = Math.floor(Math.random() * 20) - 10;
      $(img).css("transform", `translate(-40%, -40%) rotate(${rotation}deg)`);
    }

    $(img).click(function () {
      $(this).css("z-index", -3);
    });
  });
});

/*эвент*/

$(document).ready(function () {
  const carousel = $("#carousel");
  const images = Array.from(carousel.children());
  const captionText = $("#captionText");

  let counter = 0;

  images.forEach((image, i) => {
    gsap.set(image, {
      x: (i - counter) * 520,
      filter: `hue-rotate(${Math.abs(i - counter) * 2}px)`,
    });
  });

  function rotateImages() {
    counter = counter + 1 >= images.length ? 0 : counter + 1;

    images.forEach((image, i) => {
      let newX = (i - counter) * 520;
      gsap.to(image, {
        duration: 1,
        x: newX,
        filter: `hue-rotate(${Math.abs(i - counter) * 2}px)`,
        ease: "power1.out",
      });
    });
    captionText.text(imageCaptions[counter]);
  }

  const imageCaptions = [];

  carousel.click(rotateImages);
});
$(window).on("load", function () {
  $(".hue-rotate").removeClass("hue-rotate");
});

document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  const bodyForm = document.querySelector(".body-form");

  btn.addEventListener("click", () => {
    // Переключаем display между none и flex
    if (bodyForm.style.display === "none" || bodyForm.style.display === "") {
      bodyForm.style.display = "flex";
    } else {
      bodyForm.style.display = "none";
    }
  });
});
