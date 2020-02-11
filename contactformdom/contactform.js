
document.querySelector('form').addEventListener('submit', handleSubmit);


function handleSubmit(e) {
  const requiredField = document.querySelectorAll('.js-required');
  const radio = document.querySelectorAll(name = 'gender');

  for (let i = 0; i < requiredField.length; i++) {
    const field = requiredField[i];
    if (field.value === '') {
      field.style.border = '1px solid #c00';
      field.addEventListener(
        'change',
        () => {
          removeErrorState(field);
        },
        { once: true }
      );
      e.preventDefault();
    }
  }
  document.getElementById("submit").addEventListener("click", checkIfShouldShowSuccess());
  e.preventDefault();


}

function checkIfShouldShowSuccess(){
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let textArea = document.getElementById("textArea").value;

  if(fname != '' && lname != '' && textArea != ''){
    showSuccessMessage()
  }

}

function removeErrorState(elem) {
  elem.style.border = '1px solid #afafaf'
}

function showSuccessMessage() {


  const p = document.querySelector('.hidden');
  p.classList.add('success-message');
  let fname = document.getElementById("fname").value;
  p.style.color = '#088e1a';
  p.style.padding = '5px';
  p.style.backgroundColor = '#9aedbf';
  p.style.borderRadius = '2px';
  p.style.fontSize = '1rem';
  p.style.margin = '200px 300px 0px';
  p.style.textAlign = 'center';
  const form = document.querySelector('form');
  p.classList.remove('hidden');
  p.append(fname);

}