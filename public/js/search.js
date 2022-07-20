const { formSearch } = document.forms;

formSearch.addEventListener('submit', async (e) => {
  const data = Object.fromEntries(new FormData(formSearch));
  const { action, method } = e.target;

  if (!data.search) {
    e.preventDefault();
  }

  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
});
