// DOM Elements
const passwordList = document.getElementById('password-list');
const form = document.getElementById('add-password-form');
const generatePasswordButton = document.getElementById('generate-password');

const STORAGE_KEY = "passwords";

function loadPasswords() {
    const passwords = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    passwordList.innerHTML = passwords.map(password => `
        <div>
            <strong>${password.url}</strong> - ${password.login} - ${password.password}
        </div>
    `).join('');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = document.getElementById('site-url').value;
    const login = document.getElementById('login-name').value;
    const password = document.getElementById('password').value;

    const passwords = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    passwords.push({ url, login, password });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(passwords));

    loadPasswords();
    form.reset();
});

generatePasswordButton.addEventListener('click', () => {
    const password = Math.random().toString(36).slice(-10); 
    document.getElementById('password').value = password;
});

loadPasswords();
