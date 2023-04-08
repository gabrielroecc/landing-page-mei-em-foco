const slider = new Glide(".glide", {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  gap: 10,
  breakpoints: {
    1025: {
      perView: 2,
    },
    576: {
      perView: 1,
    },
  },
});

slider.mount();
