const loginForm = document.querySelector('#form');

// console.log(loginForm);
loginForm.addEventListener('keyup', (event) => {
  if (event.target.tagName === 'INPUT') {
    const { login, password, btn } = loginForm;
    if (login.value !== '' && password.value !== '') {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled', 'disabled');
    }
  }
});

loginForm.addEventListener('submit', async (event) => {
  // console.log('=======>', event.target);
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  const { action, method } = event.target;
  // console.log(action, method);
  const resp = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (resp.ok) {
    window.location = '/animals';
  } else {
    alert('Неверный логин/пароль!');
  }
});
