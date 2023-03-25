 var alturasCanvas = document.getElementById("alturas-chart");
    var alturas = new Chart(alturasCanvas, {
      type: 'bubble',
      data: {
        labels: ['Frontera con Acuamanala en las faldas de Volcán Malinche', 'Río Atoyac en la frontera con Puebla', 'Cumbre del Cerro de la Luna', 'Base del Cerro de la Luna', 'Plaza de la Constitución de Papalotla', 'Crucero de Panzacola'],
        datasets: [{
          label: 'Altura sobre el nivel de mar (m.s.n.m)',
          data: [
            {x: 0, y: 2627, r: 10},
            {x: 1, y: 2169, r: 20},
            {x: 2, y: 2262, r: 15},
            {x: 3, y: 2221, r: 12},
            {x: 4, y: 2252, r: 18},
            {x: 5, y: 2195, r: 14}
          ],
          backgroundColor: 'rgba(235, 195, 219, 0.8)',
          borderColor: 'rgba(159, 132, 189, 1)',
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  