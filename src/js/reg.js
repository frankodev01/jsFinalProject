const passInput = document.getElementById('reg-pass');
const strengthBar = document.getElementById('strength-bar');

passInput.addEventListener('input', () => {
    const val = passInput.value;
    strengthBar.className = 'strength-bar';
    
    if (val.length > 0) {
        if (val.length < 6) {
            strengthBar.classList.add('strength-weak');
        } else if (val.match(/[A-Z]/) && val.match(/[0-9]/)) {
            strengthBar.classList.add('strength-strong');
        } else {
            strengthBar.classList.add('strength-medium');
        }
    }
});


function togglePass(id, el) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
    el.classList.toggle('fa-eye');
    el.classList.toggle('fa-eye-slash');
}


document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;
    const confirm = document.getElementById('reg-confirm').value;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("გთხოვთ შეიყვანოთ სწორი ელ-ფოსტა");
        return;
    }

    if (pass !== confirm) {
        alert("პაროლები არ ემთხვევა!");
        return;
    }

    if (pass.length < 8) {
        alert("პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო");
        return;
    }

    alert("რეგისტრაცია წარმატებულია!");
});