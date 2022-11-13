const form = document.querySelector('.login-form');
const formLogin = {};

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    formLogin.email = email.value;
    formLogin.password = password.value;
    

    if (email.value === "" || password.value === "") {
        alert('Всі поля повинні бути заповнені')
    }
    console.log(formLogin);
    event.currentTarget.reset();
}
