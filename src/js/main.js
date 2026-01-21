import { splide } from "./splide.js";
import { scrollAnim } from "./scrollAnim.js";

splide();
scrollAnim();

axios
  .get("http://127.0.0.1:3000/courses")
  .then((response) => {
    const coursesGrid = document.querySelector(".courses-grid");
    if (!coursesGrid) return;
    coursesGrid.innerHTML = "";

    const allData = Array.isArray(response.data)
      ? response.data[0]
      : response.data;

    Object.values(allData).forEach((categoryValue) => {
      if (Array.isArray(categoryValue)) {
        categoryValue.forEach((courseItem) => {
          const courseCard = document.createElement("div");
          courseCard.classList.add("course-card");
          courseCard.innerHTML = `
            <img src="${courseItem.courseImg}" alt="${courseItem.course}" class="course-image">
            <div class="course-info">
              <h3 class="course-title">${courseItem.course}</h3>
              <p class="course-description">${courseItem.courseP}</p>
              <div class="course-meta">
                <span><i class="fa-solid fa-book"></i> ${courseItem.module}</span>
                <span><i class="fa-solid fa-clock"></i> ${courseItem.duration}</span>
              </div>
              <button class="btn-outline-full">დეტალების ნახვა</button>
            </div>
          `;
          coursesGrid.appendChild(courseCard);
        });
      }
    });
  })
  .catch((error) => console.error("Error:", error));

axios
  .get("http://127.0.0.1:3000/studentComments")
  .then((response) => {
    const commentsGrid = document.querySelector(".testimonials-grid");
    if (!commentsGrid) return;
    commentsGrid.innerHTML = "";

    response.data.forEach((commentItem) => {
      const testimonialCard = document.createElement("div");
      testimonialCard.classList.add("testimonial-card");
      testimonialCard.innerHTML = `
        <p class="quote">${commentItem.comment}</p>
        <div class="user-profile">
          <img src="${commentItem.img}" alt="${commentItem.name}" class="user-avatar">
          <div class="user-info">
            <h4 class="user-name">${commentItem.name}</h4>
          </div>
        </div>
      `;
      commentsGrid.appendChild(testimonialCard);
    });
  })
  .catch((error) => console.error("Error:", error));

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;

    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });

    accordionItem.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-notice");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!localStorage.getItem("cookieAccepted")) {
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 2000);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    cookieBanner.classList.remove("show");
  });
});

const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const menuCheckbox = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-item');
    const menuOverlay = document.getElementById('menuOverlay');

    function toggleMenuState() {
        if (menuCheckbox.checked) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }

    menuCheckbox.addEventListener('change', toggleMenuState);

    navLinks.forEach((link, index) => {
        link.parentElement.style.transitionDelay = `${(index + 1) * 0.1}s`;
        
        link.addEventListener('click', () => {
            menuCheckbox.checked = false;
            toggleMenuState();
        });
    });

    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            menuCheckbox.checked = false;
            toggleMenuState();
        });
    }
});
