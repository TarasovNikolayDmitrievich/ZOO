const divTar = document.querySelector("#divTarif");
const divBtn = document.querySelector("#divBtn");
const formTar = document.querySelector("#formTar");

divBtn.addEventListener("click", () => {
  divTar.style.display = "none";
  formTar.style.display = "block";
  divBtn.style.display = "none";
});

formTar.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  const data = Object.fromEntries(new FormData(formTar));

  const response = await fetch("/tariffs", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const result = await response.json();
    divTar.innerHTML = `<ul class="list-group col-12">
      <li class="list-group-item list-group-item-info">Взрослый билет рабочий день
        -
        ${result.tarif.adult_work}
        руб.</li>
      <li class="list-group-item list-group-item-info">Взрослый билет выходной
        день -
        ${result.tarif.adult_week}
        руб.</li>
      <br />
      <li class="list-group-item list-group-item-warning">Детский билет рабочий
        день -
        ${result.tarif.child_work}
        руб.</li>
      <li class="list-group-item list-group-item-warning">Детский билет выходной
        день -
        ${result.tarif.child_week}
        руб.</li>
    </ul>`;
    formTar.style.display = "none";
    divTar.style.display = "block";
    divBtn.style.display = "block";
  } else {
    alert("Ошибка добавления!");
  }
});
