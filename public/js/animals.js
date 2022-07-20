const animalsList = document.getElementById('animalsList');

animalsList.addEventListener('click', async (evt) => {
  if (evt.target.id === 'deleteAnimal') {
    evt.preventDefault();
    const response = await fetch(evt.target.href, {
      method: 'DELETE',
    });
    if (response.ok) {
      const card = evt.target.closest('.animalCard');
      card.remove();
    } else {
      alert('Ошибка удаления!');
    }
  }
});
