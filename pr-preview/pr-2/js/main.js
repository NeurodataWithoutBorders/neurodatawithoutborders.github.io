(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
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
    function menuHumBurgerIcon() {
      const navbarToggler = document.querySelector(".navbar-toggler");
      navbarToggler.addEventListener("click", function() {
        const icons = document.querySelectorAll("i");
        icons.forEach((icon) => {
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
    window.addEventListener("scroll", function() {
      if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        header.classList.add("bg-main");
        header.classList.remove("bg-main-neo");
      } else {
        header.classList.remove("bg-main");
        header.classList.add("bg-main-neo");
      }
    });
    const heroSwiper = new Swiper(".heroSwiper", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
      }
    });
    const newsSwiper = new Swiper(".newsSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
    const eventsSwiper = new Swiper(".eventsSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
    window.addEventListener("DOMContentLoaded", (event) => {
      new PagefindUI({ element: "#search", showSubResults: true });
    });
    if (logos) {
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
        const walk = (x - startX) * 2;
        logos.scrollLeft = scrollLeft - walk;
      });
    } else {
    }
    document.querySelectorAll(".col-sm-10.col-md-10").forEach((section) => {
      section.querySelectorAll("#show-more-box").forEach((showMoreBtn) => {
        showMoreBtn.addEventListener("click", function() {
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
      section.querySelectorAll("#show-less-box").forEach((showLessBtn) => {
        showLessBtn.addEventListener("click", function() {
          let yearSection = this.closest("div[id]");
          let visibleBoxes = yearSection.querySelectorAll(".box:not(.d-none)");
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
    showMoreButton.addEventListener("click", function() {
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
    showLessButton.addEventListener("click", function() {
      const nextCount = visibleCount - increment;
      for (let i = visibleCount - 1; i >= nextCount && i >= 8; i--) {
        if (teamMembers[i]) {
          teamMembers[i].classList.add("d-none");
        }
      }
      visibleCount = nextCount;
      if (visibleCount <= 8) {
        showLessButton.classList.add("d-none");
      }
      if (visibleCount < teamMembers.length) {
        showMoreButton.classList.remove("d-none");
      }
    });
    showMoreButtonTech.addEventListener("click", function() {
      const nextCountTech = visibleCountTech + incrementTech;
      for (let i = visibleCountTech; i < nextCountTech && i < teamMembersTech.length; i++) {
        if (teamMembersTech[i]) {
          teamMembersTech[i].classList.remove("d-none");
        }
      }
      visibleCountTech = nextCountTech;
      if (visibleCountTech > 8) {
        showLessButtonTech.classList.remove("d-none");
      }
      if (visibleCountTech >= teamMembersTech.length) {
        showMoreButtonTech.classList.add("d-none");
      }
    });
    showLessButtonTech.addEventListener("click", function() {
      const nextCountTech = visibleCountTech - incrementTech;
      for (let i = visibleCountTech - 1; i >= nextCountTech && i >= 8; i--) {
        if (teamMembersTech[i]) {
          teamMembersTech[i].classList.add("d-none");
        }
      }
      visibleCountTech = nextCountTech;
      if (visibleCountTech <= 8) {
        showLessButtonTech.classList.add("d-none");
      }
      if (visibleCountTech < teamMembersTech.length) {
        showMoreButtonTech.classList.remove("d-none");
      }
    });
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAvLyBSZWZlcmVuY2VzXG4gIGNvbnN0IGxvZ29zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGllbnRzXCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVyb1wiKTtcbiAgY29uc3Qgc2hvd01vcmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctbW9yZVwiKTtcbiAgY29uc3Qgc2hvd0xlc3NCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctbGVzc1wiKTtcbiAgY29uc3QgdGVhbU1lbWJlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlYW0tbWVtYmVyXCIpO1xuICBjb25zdCBzaG93TW9yZUJ1dHRvblRlY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctbW9yZS10ZWNoXCIpO1xuICBjb25zdCBzaG93TGVzc0J1dHRvblRlY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctbGVzcy10ZWNoXCIpO1xuICBjb25zdCB0ZWFtTWVtYmVyc1RlY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlYW0tbWVtYmVyLXRlY2hcIik7XG4gIGxldCB2aXNpYmxlQ291bnQgPSA4O1xuICBjb25zdCBpbmNyZW1lbnQgPSA0O1xuICBsZXQgdmlzaWJsZUNvdW50VGVjaCA9IDg7XG4gIGNvbnN0IGluY3JlbWVudFRlY2ggPSA0O1xuXG4gIC8vIG1lbnVIdW1CdXJnZXIgaWNvbiB0b2dnbGUgSW5pdFxuICBmdW5jdGlvbiBtZW51SHVtQnVyZ2VySWNvbigpIHtcbiAgICBjb25zdCBuYXZiYXJUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItdG9nZ2xlclwiKTtcbiAgICBuYXZiYXJUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlcIik7XG4gICAgICAgIGljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgICAgICBpZiAoaWNvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkLWlubGluZVwiKSkge1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZShcImQtaW5saW5lXCIpO1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcImQtaW5saW5lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBtZW51SHVtQnVyZ2VySWNvbigpO1xuXG5cbiAgLy8gSGVhZGVyIEJhY2tncm91bmQgQ2hhbmdlIE9uIFNjcm9sbFxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyMCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwKSB7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImJnLW1haW5cIik7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImJnLW1haW4tbmVvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImJnLW1haW5cIik7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImJnLW1haW4tbmVvXCIpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBcblxuICAvLyBTd2lwZXIgSW5pdFxuICBjb25zdCBoZXJvU3dpcGVyID0gbmV3IFN3aXBlcihcIi5oZXJvU3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIGxvb3A6IHRydWUsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBuZXdzU3dpcGVyID0gbmV3IFN3aXBlcihcIi5uZXdzU3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDU3Njoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICAgIDc2ODoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGV2ZW50c1N3aXBlciA9IG5ldyBTd2lwZXIoXCIuZXZlbnRzU3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDU3Njoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgfSxcbiAgICAgIDc2ODoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgfSxcbiAgICAgIDEyMDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MFxuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIFBhZ2VGaW5kIEluaXRcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgICBuZXcgUGFnZWZpbmRVSSh7IGVsZW1lbnQ6IFwiI3NlYXJjaFwiLCBzaG93U3ViUmVzdWx0czogdHJ1ZSB9KTtcbiAgfSk7XG5cbiAgaWYgKGxvZ29zKSB7XG4gICAgLy8gU3BvbnNvcnMgU2xpZGVyXG4gICAgbGV0IHN0YXJ0WDtcbiAgICBsZXQgc2Nyb2xsTGVmdDtcblxuICAgIGxvZ29zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgIHN0YXJ0WCA9IGUucGFnZVggLSBsb2dvcy5vZmZzZXRMZWZ0O1xuICAgICAgc2Nyb2xsTGVmdCA9IGxvZ29zLnNjcm9sbExlZnQ7XG4gICAgICBsb2dvcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgbG9nb3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgbG9nb3MuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGxvZ29zLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgIGxvZ29zLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICBsb2dvcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgICBpZiAoIWxvZ29zLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeCA9IGUucGFnZVggLSBsb2dvcy5vZmZzZXRMZWZ0O1xuICAgICAgY29uc3Qgd2FsayA9ICh4IC0gc3RhcnRYKSAqIDI7IC8vIFNjcm9sbC1mYXN0XG4gICAgICBsb2dvcy5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIHdhbGs7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbC1zbS0xMC5jb2wtbWQtMTBcIikuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjc2hvdy1tb3JlLWJveFwiKS5mb3JFYWNoKHNob3dNb3JlQnRuID0+IHtcbiAgICAgIHNob3dNb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB5ZWFyU2VjdGlvbiA9IHRoaXMuY2xvc2VzdChcImRpdltpZF1cIik7XG4gICAgICAgIGxldCBoaWRkZW5Cb3hlcyA9IHllYXJTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm94LmQtbm9uZVwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQgJiYgaSA8IGhpZGRlbkJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaGlkZGVuQm94ZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaWRkZW5Cb3hlcy5sZW5ndGggPD0gNCkge1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHllYXJTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCIjc2hvdy1sZXNzLWJveFwiKS5jbG9zZXN0KFwiZGl2XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbChcIiNzaG93LWxlc3MtYm94XCIpLmZvckVhY2goc2hvd0xlc3NCdG4gPT4ge1xuICAgICAgc2hvd0xlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHllYXJTZWN0aW9uID0gdGhpcy5jbG9zZXN0KFwiZGl2W2lkXVwiKTtcbiAgICAgICAgbGV0IHZpc2libGVCb3hlcyA9IHllYXJTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm94Om5vdCguZC1ub25lKVwiKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgaGlkZSB0aGUgaW5pdGlhbCA3IGVudHJpZXNcbiAgICAgICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgoNywgdmlzaWJsZUJveGVzLmxlbmd0aCAtIDQpO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCB2aXNpYmxlQm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2aXNpYmxlQm94ZXNbaV0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aXNpYmxlQm94ZXMubGVuZ3RoIDw9IDExKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZXN0KFwiZGl2XCIpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICAgIH1cblxuICAgICAgICB5ZWFyU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiI3Nob3ctbW9yZS1ib3hcIikuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBTaG93IE1vcmUgVGVhbSBNZW1iZXJzXG5cbiAgLy8gQ3VycmVudCBUZWFtXG4gIHNob3dNb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmV4dENvdW50ID0gdmlzaWJsZUNvdW50ICsgaW5jcmVtZW50O1xuICAgIGZvciAobGV0IGkgPSB2aXNpYmxlQ291bnQ7IGkgPCBuZXh0Q291bnQgJiYgaSA8IHRlYW1NZW1iZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGVhbU1lbWJlcnNbaV0pIHtcbiAgICAgICAgdGVhbU1lbWJlcnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmlzaWJsZUNvdW50ID0gbmV4dENvdW50O1xuXG4gICAgaWYgKHZpc2libGVDb3VudCA+IDgpIHtcbiAgICAgIHNob3dMZXNzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgfVxuXG4gICAgaWYgKHZpc2libGVDb3VudCA+PSB0ZWFtTWVtYmVycy5sZW5ndGgpIHtcbiAgICAgIHNob3dNb3JlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KTtcblxuICBzaG93TGVzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV4dCBzZXQgb2YgbWVtYmVycyB0byBoaWRlXG4gICAgY29uc3QgbmV4dENvdW50ID0gdmlzaWJsZUNvdW50IC0gaW5jcmVtZW50O1xuICAgIGZvciAobGV0IGkgPSB2aXNpYmxlQ291bnQgLSAxOyBpID49IG5leHRDb3VudCAmJiBpID49IDg7IGktLSkge1xuICAgICAgaWYgKHRlYW1NZW1iZXJzW2ldKSB7XG4gICAgICAgIHRlYW1NZW1iZXJzW2ldLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHZpc2libGVDb3VudCA9IG5leHRDb3VudDtcblxuICAgIC8vIEhpZGUgdGhlIFwiU2hvdyBMZXNzXCIgYnV0dG9uIGlmIG9ubHkgOCBtZW1iZXJzIGFyZSB2aXNpYmxlXG4gICAgaWYgKHZpc2libGVDb3VudCA8PSA4KSB7XG4gICAgICBzaG93TGVzc0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgIH1cblxuICAgIC8vIFNob3cgdGhlIFwiU2hvdyBNb3JlXCIgYnV0dG9uIGlmIG5vdCBhbGwgbWVtYmVycyBhcmUgdmlzaWJsZVxuICAgIGlmICh2aXNpYmxlQ291bnQgPCB0ZWFtTWVtYmVycy5sZW5ndGgpIHtcbiAgICAgIHNob3dNb3JlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgfVxuICB9KTtcblxuICAvLyBUZWNoIFRlYW1cbiAgc2hvd01vcmVCdXR0b25UZWNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXh0IHNldCBvZiBtZW1iZXJzIHRvIHNob3dcbiAgICBjb25zdCBuZXh0Q291bnRUZWNoID0gdmlzaWJsZUNvdW50VGVjaCArIGluY3JlbWVudFRlY2g7XG4gICAgZm9yIChsZXQgaSA9IHZpc2libGVDb3VudFRlY2g7IGkgPCBuZXh0Q291bnRUZWNoICYmIGkgPCB0ZWFtTWVtYmVyc1RlY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0ZWFtTWVtYmVyc1RlY2hbaV0pIHtcbiAgICAgICAgdGVhbU1lbWJlcnNUZWNoW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHZpc2libGVDb3VudFRlY2ggPSBuZXh0Q291bnRUZWNoO1xuXG4gICAgLy8gU2hvdyB0aGUgXCJTaG93IExlc3NcIiBidXR0b24gaWYgbW9yZSB0aGFuIDggbWVtYmVycyBhcmUgdmlzaWJsZVxuICAgIGlmICh2aXNpYmxlQ291bnRUZWNoID4gOCkge1xuICAgICAgc2hvd0xlc3NCdXR0b25UZWNoLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG4gICAgfVxuXG4gICAgLy8gSGlkZSB0aGUgXCJTaG93IE1vcmVcIiBidXR0b24gaWYgYWxsIG1lbWJlcnMgYXJlIHZpc2libGVcbiAgICBpZiAodmlzaWJsZUNvdW50VGVjaCA+PSB0ZWFtTWVtYmVyc1RlY2gubGVuZ3RoKSB7XG4gICAgICBzaG93TW9yZUJ1dHRvblRlY2guY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNob3dMZXNzQnV0dG9uVGVjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgbmV4dCBzZXQgb2YgbWVtYmVycyB0byBoaWRlXG4gICAgY29uc3QgbmV4dENvdW50VGVjaCA9IHZpc2libGVDb3VudFRlY2ggLSBpbmNyZW1lbnRUZWNoO1xuICAgIGZvciAobGV0IGkgPSB2aXNpYmxlQ291bnRUZWNoIC0gMTsgaSA+PSBuZXh0Q291bnRUZWNoICYmIGkgPj0gODsgaS0tKSB7XG4gICAgICBpZiAodGVhbU1lbWJlcnNUZWNoW2ldKSB7XG4gICAgICAgIHRlYW1NZW1iZXJzVGVjaFtpXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICB2aXNpYmxlQ291bnRUZWNoID0gbmV4dENvdW50VGVjaDtcblxuICAgIC8vIEhpZGUgdGhlIFwiU2hvdyBMZXNzXCIgYnV0dG9uIGlmIG9ubHkgOCBtZW1iZXJzIGFyZSB2aXNpYmxlXG4gICAgaWYgKHZpc2libGVDb3VudFRlY2ggPD0gOCkge1xuICAgICAgc2hvd0xlc3NCdXR0b25UZWNoLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XG4gICAgfVxuXG4gICAgLy8gU2hvdyB0aGUgXCJTaG93IE1vcmVcIiBidXR0b24gaWYgbm90IGFsbCBtZW1iZXJzIGFyZSB2aXNpYmxlXG4gICAgaWYgKHZpc2libGVDb3VudFRlY2ggPCB0ZWFtTWVtYmVyc1RlY2gubGVuZ3RoKSB7XG4gICAgICBzaG93TW9yZUJ1dHRvblRlY2guY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOztBQUFBLFdBQVMsaUJBQWlCLG9CQUFvQixXQUFZO0FBRXhELFVBQU0sUUFBUSxTQUFTLGNBQWMsVUFBVTtBQUMvQyxVQUFNLFNBQVMsU0FBUyxjQUFjLFNBQVM7QUFDL0MsVUFBTSxPQUFPLFNBQVMsaUJBQWlCLE9BQU87QUFDOUMsVUFBTSxpQkFBaUIsU0FBUyxlQUFlLFdBQVc7QUFDMUQsVUFBTSxpQkFBaUIsU0FBUyxlQUFlLFdBQVc7QUFDMUQsVUFBTSxjQUFjLFNBQVMsaUJBQWlCLGNBQWM7QUFDNUQsVUFBTSxxQkFBcUIsU0FBUyxlQUFlLGdCQUFnQjtBQUNuRSxVQUFNLHFCQUFxQixTQUFTLGVBQWUsZ0JBQWdCO0FBQ25FLFVBQU0sa0JBQWtCLFNBQVMsaUJBQWlCLG1CQUFtQjtBQUNyRSxRQUFJLGVBQWU7QUFDbkIsVUFBTSxZQUFZO0FBQ2xCLFFBQUksbUJBQW1CO0FBQ3ZCLFVBQU0sZ0JBQWdCO0FBR3RCLGFBQVMsb0JBQW9CO0FBQzNCLFlBQU0sZ0JBQWdCLFNBQVMsY0FBYyxpQkFBaUI7QUFDOUQsb0JBQWMsaUJBQWlCLFNBQVMsV0FBWTtBQUNoRCxjQUFNLFFBQVEsU0FBUyxpQkFBaUIsR0FBRztBQUMzQyxjQUFNLFFBQVEsVUFBUTtBQUNsQixjQUFJLEtBQUssVUFBVSxTQUFTLFVBQVUsR0FBRztBQUNyQyxpQkFBSyxVQUFVLE9BQU8sVUFBVTtBQUNoQyxpQkFBSyxVQUFVLElB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
