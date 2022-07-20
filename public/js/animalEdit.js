const { updateForm } = document.forms;
const picDiv = document.getElementById('prevPicDiv');
const deletePic = [];

let isSaved = false;

updateForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(updateForm);
  const { action } = event.target;
  const animalId = event.target.dataset.id;
  data.append('deletePic', deletePic);
  const response = await fetch(action, {
    method: 'PATCH',
    body: data,
  });
  if (response.ok) {
    isSaved = true;
    window.location = `/animals/${animalId}`;
  } else {
    alert('Ошибка при сохранении данных!');
  }
});

picDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const card = event.target.closest('.col');
    deletePic.push(card.dataset.picid);
    card.remove();
  }
});

window.addEventListener('beforeunload', (event) => {
  // Отмените событие, как указано в стандарте.
  event.preventDefault();
  // Chrome требует установки возвратного значения.
  if (!isSaved) {
    event.returnValue = '';
  }
});
