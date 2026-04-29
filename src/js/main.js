import { splide } from "./splide.js";
import { scrollAnim } from "./scrollAnim.js";

splide();
scrollAnim();

const courses = {
  "Web": [
    {
      "courseImg": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      "course": "ვებ დეველოპმენტი",
      "courseP": "ისწავლეთ HTML, CSS, JavaScript, React და შექმენით ინტერაქტიული ვებსაიტები.",
      "module": "10 მოდული",
      "duration": "80 საათი"
    }
  ],
  "DataScience": [
    {
      "courseImg": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "course": "მონაცემთა მეცნიერება",
      "courseP": "ისწავლეთ Python, R, მონაცემთა ანალიზი და მანქანური სწავლება.",
      "module": "12 მოდული",
      "duration": "100 საათი"
    }
  ],
  "CyberSecurity": [
    {
      "courseImg": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      "course": "კიბერუსაფრთხოება",
      "courseP": "ისწავლეთ ქსელური უსაფრთხოება, კრიპტოგრაფია და ეთიკური ჰაკინგი.",
      "module": "8 მოდული",
      "duration": "70 საათი"
    }
  ],
  "uiux": [
    {
      "courseImg": "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=600&q=80",
      "course": "UI/UX დიზაინი",
      "courseP": "ისწავლეთ მომხმარებლის გამოცდილების დიზაინი, პროტოტიპირება და ვიზუალური დიზაინი.",
      "module": "9 მოდული",
      "duration": "75 საათი"
    }
  ]
}

document.addEventListener("DOMContentLoaded", () => {
  const coursesGrid = document.querySelector(".courses-grid");

  Object.values(courses).flat().forEach((courseItem) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    courseCard.innerHTML = `
      <img src="${courseItem.courseImg}" alt="${courseItem.course}" class="course-image">
      <div class="course-info">
        <h3 class="course-title">${courseItem.course}</h3>
        <p class="course-description">${courseItem.courseP}</p>
        <div class="course-meta">
          <span>${courseItem.module}</span>
          <span>${courseItem.duration}</span>
        </div>
      </div>
    `;

    coursesGrid.appendChild(courseCard);
  });
});

const comments = {
    "studentComments": [
    {
      "name": "ნიკა ჯაფარიძე",
      "comment": "ვებ დეველოპმენტის კურსმა ჩემი ცხოვრება შეცვალა! ახლა ვმუშაობ წამყვან IT კომპანიაში.",
      "img": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      "name": "მარიამ კობახიძე",
      "comment": "მონაცემთა მეცნიერების კურსმა მომცა უნარები, რომლებიც მეხმარება ყოველდღიურ მუშაობაში.",
      "img": "https://randomuser.me/api/portraits/women/44.jpg"
    },  
    {
      "name": "გიორგი ლომიძე",
      "comment": "კიბერუსაფრთხოების კურსმა მომცა ცოდნა, რომელიც მეხმარება ჩემი კომპანიის დაცვაში.",
      "img": "https://randomuser.me/api/portraits/men/56.jpg"
    },
    {
      "name": "თამარ შავგულიძე",
      "comment": "UI/UX დიზაინის კურსმა მომცა უნარები, რომლებსაც ყოველდღიურად ვიყენებ ჩემს პროექტებში.",
      "img": "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ]
}

document.addEventListener("DOMContentLoaded", () => {
  const commentsGrid = document.querySelector(".testimonials-grid");
  comments.studentComments.forEach((commentItem) => {
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
});

// axios
//   .get("http://127.0.0.1:3000/courses")
//   .then((response) => {
//     const coursesGrid = document.querySelector(".courses-grid");
//     if (!coursesGrid) return;
//     coursesGrid.innerHTML = "";

//     const allData = Array.isArray(response.data)
//       ? response.data[0]
//       : response.data;

//     Object.values(allData).forEach((categoryValue) => {
//       if (Array.isArray(categoryValue)) {
//         categoryValue.forEach((courseItem) => {
//           const courseCard = document.createElement("div");
//           courseCard.classList.add("course-card");
//           courseCard.innerHTML = `
//             <img src="${courseItem.courseImg}" alt="${courseItem.course}" class="course-image">
//             <div class="course-info">
//               <h3 class="course-title">${courseItem.course}</h3>
//               <p class="course-description">${courseItem.courseP}</p>
//               <div class="course-meta">
//                 <span><i class="fa-solid fa-book"></i> ${courseItem.module}</span>
//                 <span><i class="fa-solid fa-clock"></i> ${courseItem.duration}</span>
//               </div>
//               <button class="btn-outline-full">დეტალების ნახვა</button>
//             </div>
//           `;
//           coursesGrid.appendChild(courseCard);
//         });
//       }
//     });
//   })
//   .catch((error) => console.error("Error:", error));

// axios
//   .get("http://127.0.0.1:3000/studentComments")
//   .then((response) => {
//     const commentsGrid = document.querySelector(".testimonials-grid");
//     if (!commentsGrid) return;
//     commentsGrid.innerHTML = "";

//     response.data.forEach((commentItem) => {
//       const testimonialCard = document.createElement("div");
//       testimonialCard.classList.add("testimonial-card");
//       testimonialCard.innerHTML = `
//         <p class="quote">${commentItem.comment}</p>
//         <div class="user-profile">
//           <img src="${commentItem.img}" alt="${commentItem.name}" class="user-avatar">
//           <div class="user-info">
//             <h4 class="user-name">${commentItem.name}</h4>
//           </div>
//         </div>
//       `;
//       commentsGrid.appendChild(testimonialCard);
//     });
//   })
//   .catch((error) => console.error("Error:", error));



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
