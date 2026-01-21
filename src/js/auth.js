document.addEventListener("DOMContentLoaded", () => {
    const eyeBtn = document.getElementById('eye-icon');
    const passInput = document.getElementById('login-pass');

    eyeBtn.addEventListener('click', () => {
        const type = passInput.type === 'password' ? 'text' : 'password';
        passInput.type = type;
        eyeBtn.classList.toggle('fa-eye');
        eyeBtn.classList.toggle('fa-eye-slash');
    });
});