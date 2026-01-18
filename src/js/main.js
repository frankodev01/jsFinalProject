import { splide } from "./splide.js";
import { scrollAnim } from "./scrollAnim.js";
import axios from "axios";

splide();
scrollAnim();

axios.get("http://127.0.0.1:3000/courses")
  .then(response => {
    const coursesGrid = document.querySelector('.courses-grid');
    coursesGrid.innerHTML = '';
    
    const allCategories = response.data[0];

    Object.values(allCategories).forEach(categoryArray => {
      categoryArray.forEach(courseItem => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

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
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });