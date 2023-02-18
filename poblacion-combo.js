const data = {
    labels: [
      '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
      '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
      '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
    ],
    datasets: [
      {
        label: 'Papalotla de Xicohténcatl',
        data: [63, 68, 82, 69, 98, 76, 78, 91, 83, 90, 90, 103, 69, 91, 99, 95, 104, 115, 98, 107, 113, 127, 126, 114, 108, 109, 113, 120, 92, 119, 180],
        borderColor: 'red',
        fill: false
      },
      {
        label: 'Xicohtzinco',
        data: [45, 37, 39, 39, 44, 56, 68, 39, 54, 46, 41, 56, 49, 54, 54, 57, 73, 47, 51, 50, 57, 47, 71, 72, 70, 58, 77, 63, 56, 74, 84],
        borderColor: 'blue',
        fill: false
      },
      {
        label: 'Mazatecochco de José María Morelos',
        data: [24, 42, 33, 38, 31, 35, 32, 29, 41, 28, 33, 38, 38, 45, 44, 23, 50, 50, 40, 38, 52, 39, 51, 58, 44, 56, 66, 64, 64, 61, 117],
        borderColor: 'green',
        fill: false
      }
    ]
  };
  
  const options = {
    title: {
      display: true,
      text: 'Defunciones por año en municipios de Tlaxcala'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Año'
        }
      }]
    }
  };
  
  const canvas = document.getElementById("defuncion");
  canvas.width = 700;
  canvas.height = 200;
  const markdownContent = document.getElementById("markdown-content");
  
  new Chart(canvas, {
    type: 'line',
    data: data,
    options: options
  });
  