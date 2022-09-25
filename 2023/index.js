import { onDomReady } from "cantil";

const app = () => {
  // Init Carousel
  queryAll(".carousel .row img").forEach(
    (image) =>
      (image.onclick = () => {
        query(".carousel .container img").src = image.src;

        image.closest(".row").query(".active").classList.remove("active");
        image.closest(".column").classList.add("active");
      })
  );
};

onDomReady().then(app);
