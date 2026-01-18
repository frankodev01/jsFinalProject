import { splide } from "./splide.js";
import { scrollAnim } from "./scrollAnim.js";

splide();
scrollAnim();

axios.get("http://127.0.0.1:3000/courses")
  .then(response => {
    const coursesGrid = document.querySelector('.courses-grid');
    if (!coursesGrid) return;
    coursesGrid.innerHTML = '';
    
    const allData = Array.isArray(response.data) ? response.data[0] : response.data;

    Object.values(allData).forEach(categoryValue => {
      if (Array.isArray(categoryValue)) {
        categoryValue.forEach(courseItem => {
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
      }
    });
  })
  .catch(error => console.error('Error:', error));

axios.get("http://127.0.0.1:3000/studentComments")
  .then(response => {
    const commentsGrid = document.querySelector('.testimonials-grid');
    if (!commentsGrid) return;
    commentsGrid.innerHTML = '';
    
    response.data.forEach(commentItem => {
      const testimonialCard = document.createElement('div');
      testimonialCard.classList.add('testimonial-card');
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
  .catch(error => console.error('Error:', error));