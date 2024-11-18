document.addEventListener("DOMContentLoaded", function () {
  // References
  const logos = document.querySelector(".clients");
  const header = document.querySelector(".header");
  const hero = document.querySelectorAll(".hero");
  const showMoreButton = document.getElementById("show-more");
  const showLessButton = document.getElementById("show-less");
  const teamMembers = document.querySelectorAll(".team-member");
  const showMoreButtonTech = document.getElementById("show-more-tech");
  const showLessButtonTech = document.getElementById("show-less-tech");
  const teamMembersTech = document.querySelectorAll(".team-member-tech");
  let visibleCount = 8;
  const increment = 4;
  let visibleCountTech = 8;
  const incrementTech = 4;

  // menuHumBurger icon toggle Init
  function menuHumBurgerIcon() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener("click", function () {
        const icons = document.querySelectorAll("i");
        icons.forEach(icon => {
            if (icon.classList.contains("d-inline")) {
                icon.classList.remove("d-inline");
                icon.classList.add("d-none");
            } else {
                icon.classList.remove("d-none");
                icon.classList.add("d-inline");
            }
        });
    });
  }
  menuHumBurgerIcon();


  // Header Background Change On Scroll
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
      header.classList.add("bg-main");
      header.classList.remove("bg-main-neo");
    } else {
      header.classList.remove("bg-main");
      header.classList.add("bg-main-neo");
    }
  });
  
  

  // Swiper Init
  const heroSwiper = new Swiper(".heroSwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  const newsSwiper = new Swiper(".newsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
  });

  const eventsSwiper = new Swiper(".eventsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
  });

  // PageFind Init
  window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({ element: "#search", showSubResults: true });
  });

  if (logos) {
    // Sponsors Slider
    let startX;
    let scrollLeft;

    logos.addEventListener("mousedown", (e) => {
      startX = e.pageX - logos.offsetLeft;
      scrollLeft = logos.scrollLeft;
      logos.classList.add("active");
    });

    logos.addEventListener("mouseleave", () => {
      logos.classList.remove("active");
    });

    logos.addEventListener("mouseup", () => {
      logos.classList.remove("active");
    });

    logos.addEventListener("mousemove", (e) => {
      if (!logos.classList.contains("active")) return;
      e.preventDefault();
      const x = e.pageX - logos.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast
      logos.scrollLeft = scrollLeft - walk;
    });
  } else {
  }

  document.querySelectorAll(".col-sm-10.col-md-10").forEach(section => {
    section.querySelectorAll("#show-more-box").forEach(showMoreBtn => {
      showMoreBtn.addEventListener("click", function () {
        let yearSection = this.closest("div[id]");
        let hiddenBoxes = yearSection.querySelectorAll(".box.d-none");

        for (let i = 0; i < 4 && i < hiddenBoxes.length; i++) {
          hiddenBoxes[i].classList.remove("d-none");
        }

        if (hiddenBoxes.length <= 4) {
          this.classList.add("d-none");
        }

        yearSection.querySelector("#show-less-box").closest("div").classList.remove("d-none");
      });
    });

    section.querySelectorAll("#show-less-box").forEach(showLessBtn => {
      showLessBtn.addEventListener("click", function () {
        let yearSection = this.closest("div[id]");
        let visibleBoxes = yearSection.querySelectorAll(".box:not(.d-none)");

        // Make sure we don't hide the initial 7 entries
        let start = Math.max(7, visibleBoxes.length - 4);
        for (let i = start; i < visibleBoxes.length; i++) {
          visibleBoxes[i].classList.add("d-none");
        }

        if (visibleBoxes.length <= 11) {
          this.closest("div").classList.add("d-none");
        }

        yearSection.querySelector("#show-more-box").classList.remove("d-none");
      });
    });
  });

  // Show More Team Members

  // Current Team
  showMoreButton.addEventListener("click", function () {
    const nextCount = visibleCount + increment;
    for (let i = visibleCount; i < nextCount && i < teamMembers.length; i++) {
      if (teamMembers[i]) {
        teamMembers[i].classList.remove("d-none");
      }
    }
    visibleCount = nextCount;

    if (visibleCount > 8) {
      showLessButton.classList.remove("d-none");
    }

    if (visibleCount >= teamMembers.length) {
      showMoreButton.classList.add("d-none");
    }
  });

  showLessButton.addEventListener("click", function () {
    // Calculate the next set of members to hide
    const nextCount = visibleCount - increment;
    for (let i = visibleCount - 1; i >= nextCount && i >= 8; i--) {
      if (teamMembers[i]) {
        teamMembers[i].classList.add("d-none");
      }
    }
    visibleCount = nextCount;

    // Hide the "Show Less" button if only 8 members are visible
    if (visibleCount <= 8) {
      showLessButton.classList.add("d-none");
    }

    // Show the "Show More" button if not all members are visible
    if (visibleCount < teamMembers.length) {
      showMoreButton.classList.remove("d-none");
    }
  });

  // Tech Team
  showMoreButtonTech.addEventListener("click", function () {
    // Calculate the next set of members to show
    const nextCountTech = visibleCountTech + incrementTech;
    for (let i = visibleCountTech; i < nextCountTech && i < teamMembersTech.length; i++) {
      if (teamMembersTech[i]) {
        teamMembersTech[i].classList.remove("d-none");
      }
    }
    visibleCountTech = nextCountTech;

    // Show the "Show Less" button if more than 8 members are visible
    if (visibleCountTech > 8) {
      showLessButtonTech.classList.remove("d-none");
    }

    // Hide the "Show More" button if all members are visible
    if (visibleCountTech >= teamMembersTech.length) {
      showMoreButtonTech.classList.add("d-none");
    }
  });

  showLessButtonTech.addEventListener("click", function () {
    // Calculate the next set of members to hide
    const nextCountTech = visibleCountTech - incrementTech;
    for (let i = visibleCountTech - 1; i >= nextCountTech && i >= 8; i--) {
      if (teamMembersTech[i]) {
        teamMembersTech[i].classList.add("d-none");
      }
    }
    visibleCountTech = nextCountTech;

    // Hide the "Show Less" button if only 8 members are visible
    if (visibleCountTech <= 8) {
      showLessButtonTech.classList.add("d-none");
    }

    // Show the "Show More" button if not all members are visible
    if (visibleCountTech < teamMembersTech.length) {
      showMoreButtonTech.classList.remove("d-none");
    }
  });
});
