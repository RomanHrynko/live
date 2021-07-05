const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';
const buttonEl = document.querySelector('.submit-button');
const formEl = document.querySelector('.login-form');
const errorEl = document.querySelector('.error-text');

// input: event
// output: undefined
const getFormData = () => Object.fromEntries(new FormData(formEl));

const validateHandler = () => {
  // if (formEl.reportValidity()) {
  //   buttonEl.disabled = false;
  // } else {
  //   buttonEl.disabled = true;
  // }
  buttonEl.disabled = !formEl.reportValidity();
};

// input:event
// output: undeffined
const submitHandler = event => {
  event.preventDefault();

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getFormData()),
  })
    // input: callback
    // output: promise
    // callback inp/out
    // response obj
    // any

    .then(res => res.json())
    .then(resBody => {
      alert(JSON.stringify(resBody));
      formEl.reset();
    })
    .catch(() => {
      errorEl.textContent = 'Failed to create user';
    });
};

formEl.addEventListener('input', validateHandler);
formEl.addEventListener('submit', submitHandler);
// input: event
// output: undefine
