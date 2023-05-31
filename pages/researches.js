const researchFacultyParent = document.querySelector(
  '.research-faculty-parent'
);

const researchStudentParent = document.querySelector(
  '.research-student-parent'
);

const renderFacultyResearch = (ds, parentElement) => {
  const renderData = document.createElement('tr');
  renderData.classList.add('fs-7');
  renderData.innerHTML = `
      <td class="fw-bold fw-italic col-md-3">${ds.title}</td>
      <td class="col-md-2"> <ul class="list-unstyled" >
      ${ds.authors.map((item) => `<li>${item}</li>`).join('')}
     </ul></td>
     <td class="col-md-2">${ds.conference}</td>
     <td class="col-md-1 text-capitalize">${ds.category}</td>
     <td class="col-md-2">${ds.year}</td>
      `;
  parentElement.appendChild(renderData);
};

const renderStudentResearch = (ds, parentElement) => {
  const renderData = document.createElement('tr');
  renderData.classList.add('fs-7');
  renderData.innerHTML = `
        <td >${ds.title}</td>
        <td>${ds.year}</td>
        <td>${ds.adviser}</td>
       <td> <ul >
       ${ds.authors.map((item) => `<li>${item}</li>`).join('')}
      </ul></td>
        `;
  parentElement.appendChild(renderData);
};

const fetchResearchData = () => {
  fetch('../data/research-ds.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((category) => {
        if (category.faculty) {
          category.faculty.forEach((ds) => {
            renderFacultyResearch(ds, researchFacultyParent);
          });
        }
        if (category.student) {
          category.student.forEach((ds) => {
            renderStudentResearch(ds, researchStudentParent);
          });
        }
      });
    });
};

const renderPieChart = () => {
  let data = [
    {
      data: [7, 1, 15],
      labels: ['International', 'National', 'Regional'],
      backgroundColor: [
        'rgba(251, 170, 48,1)',
        'rgba(26, 166, 5, 1)',
        'rgba(91, 0, 0,1)',
      ],
    },
  ];

  let options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: { position: 'bottom' },
    // indexAxis: 'y',
    plugins: {
      legend: {
        position: 'bottom',
        display: false,
      },
      tooltip: {
        display: false,
      },
      title: {
        display: true,
        text: 'Researches by Presentation',
      },
    },
  };

  const ctx = document.getElementById('pieChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: data,
      labels: data[0].labels,
    },
    options: options,
  });
};

renderPieChart();

fetchResearchData();
renderFacultyResearch();
renderStudentResearch();
