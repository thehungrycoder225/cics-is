const renderStatusChartIT = () => {
  const ctx = document.getElementById('statusChartIT').getContext('2d');
  const statusLabel = ['Permanent', 'Contractual', 'Temporary', 'Part-Timer'];
  const dataIT = [11, 7, 0, 0];
  const dataGenEd = [2, 7, 0, 1];
  const statusChartIT = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIT,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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
      //   legend: { position: 'bottom' },
      indexAxis: 'y',
    },
  });
};

renderStatusChartIT();

const renderRankChartIT = () => {
  const ctx = document.getElementById('rankChartIT').getContext('2d');
  const statusLabel = [
    'Associate Professor 3',
    'Associate Professor 2',
    'Assistant Professor 3',
    'Assistant Professor 2',
    'Instructor 1',
    'College Lecturer',
  ];
  const dataIT = [1, 1, 1, 2, 6, 7];
  const dataGenEd = [0, 0, 0, 1, 1, 8];
  const rankChartIT = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIT,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: 'Poppins',
          },
        },
      },
      indexAxis: 'y',
    },
  });
};

renderRankChartIT();

const renderAttainmentIt = () => {
  const ctx = document.getElementById('eduChartIT').getContext('2d');
  const statusLabel = [
    'Doctor’s degree',
    ' Units in Doctor’s degree',
    'Master’s degree',
    'Units in Master’s degree',
    ' Bachelor’s degree',
  ];
  const dataIT = [3, 0, 9, 3, 3];
  const dataGenEd = [0, 0, 2, 3, 5];
  const eduChartIT = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIT,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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

renderAttainmentIt();

// Charts Information Systems

const renderStatusChartIS = () => {
  const ctx = document.getElementById('statusChartIS').getContext('2d');
  const statusLabel = ['Permanent', 'Contractual', 'Temporary', 'Part-Timer'];
  const dataIS = [5, 0, 2, 0];
  const dataGenEd = [2, 0, 7, 1];
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIS,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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
      //   legend: { position: 'bottom' },
      indexAxis: 'y',
    },
  });
};

renderStatusChartIS();

const renderRankChartIS = () => {
  const ctx = document.getElementById('rankChartIS').getContext('2d');
  const statusLabel = [
    'Assistant Professor 4',
    'Assistant Professor 2',
    'Instructor 1',
    'College Lecturer',
  ];
  const dataIS = [0, 3, 2, 2];
  const dataGenEd = [1, 1, 0, 8];
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIS,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: 'Poppins',
          },
        },
      },
      indexAxis: 'y',
    },
  });
};

renderRankChartIS();

const renderAttainmentIS = () => {
  const ctx = document.getElementById('eduChartIS').getContext('2d');
  const statusLabel = [
    'Doctor’s degree',
    ' Units in Doctor’s degree',
    'Master’s degree',
    'Units in Master’s degree',
    ' Bachelor’s degree',
  ];
  const dataIT = [1, 1, 3, 1, 1];
  const dataGenEd = [0, 0, 1, 3, 6];
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIT,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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

renderAttainmentIS();

const c = console.log.bind(this);

const facultyCollection = [];

const Faculty = (name, designation, rank, imgUrl) => {
  return {
    name,
    designation,
    rank,
    imgUrl,
    education: [],
    addEducation: function (item) {
      this.education.push(item);
    },
  };
};

const fOne = Faculty(
  'Ronjie Mar Malinao',
  'College Dean',
  'Associate Professor 3',
  `../images/faculty/Malinao.JPG`
);

fOne.addEducation(
  'Doctor in Information Technology Technological University of the Philippines – Manila'
);

fOne.addEducation(
  `Master in Information Technology Manuel S. Enverga University Foundation, Inc.
 `
);

fOne.addEducation(
  `Bachelor of Science in Information Technology Marinduque State College`
);
c(fOne);

facultyCollection.push(fOne);

c(facultyCollection);
