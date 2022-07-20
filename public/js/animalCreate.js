const { createForm } = document.forms;
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

createForm.addEventListener('submit', (e) => {
  const data = Object.fromEntries(new FormData(createForm));
  const alert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<div id="alert" class="alert alert-${type} d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
    ${message}
    </div>
  </div>`;

    alertPlaceholder.append(wrapper);
  };

  if (data.sampleFile.name.length === 0 || data.name.length === 0
    || data.description.length === 0) {
    e.preventDefault();
    alert('Заполните все поля.', 'danger');
    const removeAlert = () => document.getElementById('alert').remove();
    return setTimeout(removeAlert, 1300);
  }
});
