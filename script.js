window.onload = function () {
    cargarPaises();
};

async function cargarPaises() {
    let respuesta = await fetch("https://countriesnow.space/api/v0.1/countries/capital");
    let datos = await respuesta.json();
    let cuerpoTabla = document.getElementById("tabla");

    datos.data.forEach(pais => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${pais.name}</td><td>${pais.capital || '¿?'}</td>`;
        cuerpoTabla.appendChild(fila);
    });
}