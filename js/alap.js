document.addEventListener("DOMContentLoaded", () => {
  const latvanyossagokLista = document.getElementById("latvanyossagok-lista");
  latvanyossagok.forEach(latvanyossag => {
    latvanyossagokLista.innerHTML += `
      <div class="col-md-6">
        <div class="card mb-3">
          <img src="images/${latvanyossag.kep}" class="card-img-top" alt="${latvanyossag.nev}">
          <div class="card-body">
            <h5 class="card-title">${latvanyossag.nev}</h5>
            <p class="card-text">${latvanyossag.leiras}</p>
          </div>
        </div>
      </div>
    `;
  });


















