document.querySelector('form').addEventListener('submit', handleSubmit);



function handleSubmit() {
    const requiredField = document.querySelectorAll('.js-required');
    const radio = document.querySelectorAll(name='gender');


    for(let i = 0; i < requiredField.length; i++) {
        const field = requiredField[i];
    }
}