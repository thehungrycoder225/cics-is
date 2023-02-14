const trendChart = () => {
  var xLabel = [
    ' 2015-2016',
    ' 2016-2017',
    ' 2017-2018',
    ' 2018-2019',
    ' 2019-2020',
    ' 2020-2021',
    ' 2021-2022',
    ' 2022-2023',
  ];

  new Chart('trendChart', {
    type: 'line',
    data: {
      labels: xLabel,
      datasets: [
        {
          data: [1279, 1211, 1067, 1073, 1093, 1168, 1346, 1535],
          label: 'BS Information Technology',
          borderColor: '#1BA605',
          backgroundColor: '#1BA605',
        },
        {
          data: [490, 351, 232, 226, 246, 270, 275, 350],
          label: 'BS Information Systems',
          borderColor: '#FBAA30',
          backgroundColor: '#FBAA30',
        },
        {
          data: [1769, 1562, 1299, 1299, 1339, 1438, 1621, 1885],
          label: 'Total',
          borderColor: '#141414',
          backgroundColor: '#141414',
        },
      ],
    },
    options: {
      legend: { position: 'bottom' },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

trendChart();

const renderBarChart = () => {
  const ctx = document.getElementById('semChart').getContext('2d');
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        '1st Semester ( A.Y. 2015 - 2016)',
        '2nd Semester ( A.Y. 2015 - 2016)',
        '1st Semester ( A.Y. 2016 - 2017)',
        '2nd Semester ( A.Y. 2016 - 2017)',
        '1st Semester ( A.Y. 2017 - 2018)',
        '2nd Semester ( A.Y. 2017 - 2018)',
        '1st Semester ( A.Y. 2018 - 2019)',
        '2nd Semester ( A.Y. 2018 - 2019)',
        '1st Semester ( A.Y. 2019 - 2020)',
        '2nd Semester ( A.Y. 2019 - 2020)',
        '1st Semester ( A.Y. 2020 - 2021)',
        '2nd Semester ( A.Y. 2020 - 2021)',
        '1st Semester ( A.Y. 2021 - 2022)',
        '2nd Semester ( A.Y. 2021 - 2022)',
        '1st Semester ( A.Y. 2022 - 2023)',
      ],
      datasets: [
        {
          label: 'Information Technology',
          backgroundColor: '#1BA605',
          data: [
            649, 630, 627, 584, 538, 529, 556, 517, 563, 530, 613, 555, 686,
            660, 782, 753,
          ],
        },
        {
          label: 'Information Systems',
          backgroundColor: '#FBAA30',
          data: [
            250, 240, 182, 169, 120, 112, 119, 107, 124, 122, 128, 142, 142,
            133, 155, 195,
          ],
        },
      ],
    },
    options: {
      tooltips: {
        displayColors: true,
        callbacks: {
          mode: 'x',
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      legend: { position: 'bottom' },
      indexAxis: 'y',
    },
  });
};

renderBarChart();
