
    var ctx = document.getElementById('lenguas-chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Náhuatl', 'Totonaco', 'Mazateco', 'Zapoteco', 'Otomí', 'Mixteco', 'Chinanteco', 'Mazahua', 'Tzetzal', 'Chol', 'Tlapaneco', 'Maya', 'Chatino', 'Otras lenguas'],
        datasets: [{
          label: 'Número de hablantes',
          data: [370, 150, 32, 13, 4, 4, 3, 2, 2, 2, 1, 1, 1, 12],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        categoryPercentage: 0.7
      }
    });
