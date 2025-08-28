const votos = {
    JavaScript: 1,
    Python: 3,
    "C++": 2,
    Otro: 6
};

const formulario = document.getElementById("formulario");
const resultadosDiv = document.getElementById("resultados");
const resultadosLista = document.getElementById("resultadosLista");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const opcionSeleccionada = formulario.lenguaje.value;
    votos[opcionSeleccionada]++;

    formulario.querySelectorAll("input, button").forEach((elemento) => {
        elemento.disabled = true;
    });

    actualizarResultados();
});

function actualizarResultados() {
    const totalVotos = Object.values(votos).reduce((suma, cantidad) => suma + cantidad, 0);

    resultadosLista.innerHTML = "";

    for (const [lenguaje, cantidad] of Object.entries(votos)) {
        const porcentaje = ((cantidad / totalVotos) * 100).toFixed(2);
        const elementoLista = document.createElement("li");
        elementoLista.textContent = `${lenguaje}: ${cantidad} votos (${porcentaje}%)`;
        resultadosLista.appendChild(elementoLista);
    }

    resultadosDiv.style.display = "block";
}