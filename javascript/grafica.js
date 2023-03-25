// Datos de la tabla
const datos = [
  {municipio: "Papalotla de Xicohténcatl", localidad: "Papalotla", poblacion: 28657},
  {municipio: "Papalotla de Xicohténcatl", localidad: "San Marcos Contla", poblacion: 4622},
  {municipio: "Papalotla de Xicohténcatl", localidad: "Otras localidades", poblacion: 220}
];

// Crear un array para las etiquetas y otro para los datos
const etiquetas = datos.map(dato => dato.localidad);
const poblacion = datos.map(dato => dato.poblacion);

// Crear la gráfica de pastel
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: etiquetas,
    datasets: [
      {
        label: "Población por localidad",
        data: poblacion,
        backgroundColor: [
          "#822E81",
          "#AA6373",
          "#F0F2A6"
        ]
      }
    ]
  },
  options: {
    responsive: false,
    title: {
      display: false,
      text: "Población por localidad en Papalotla de Xicohténcatl"
    }
  }
});

const canvas = document.getElementById("myChart");
canvas.width = 700;
canvas.height = 500;
const markdownContent = document.getElementById("markdown-content");
