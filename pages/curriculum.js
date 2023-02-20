var ctx = document.querySelector('#cUnitsChart').getContext('2d');

const chartLabel = [
  'General Education / Elective',
  'Mandated Courses (PE and Rizal)',
  'Core Courses',
  'Professional/ Specialization Courses',
  'Professional Elective Courses',
  'OJT',
  'Total',
];
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: chartLabel,
    datasets: [
      {
        label: 'Required Units in CMO',
        data: [36, 14, 18, 63, 12, 6, 149],
        backgroundColor: 'rgba(26, 166, 5, 0.5)',
        borderColor: 'rgba(26, 166, 5, 1)',
        borderWidth: 1,
      },
      {
        label: 'BS/IT & BSIS Curriculum',
        data: [36, 14, 18, 63, 12, 6, 149],
        backgroundColor: 'rgba(251, 170, 48,0.5)',
        borderColor: 'rgba(251, 170, 48, 1)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: [
        {
          stacked: true,
          beginAtZero: true,
        },
      ],
      y: [
        {
          stacked: true,
          beginAtZero: true,
        },
      ],
    },
  },
});
