import { colorChart } from './color-chart';

const createStats = (arr, selector) => {
  return arr.reduce((acc, item) => {
    const key = selector(item) || 'Unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
};

const formatStats = (statsObj, sortFn = null) => {
  const labels = Object.keys(statsObj);
  if (sortFn) {
    labels.sort(sortFn);
  }
  return {
    labels,
    data: labels.map((key) => statsObj[key]),
  };
};

export const getChartData = (users) => {
  const getFormatted = (selector, sortFn = null) => formatStats(createStats(users, selector), sortFn);

  const companyCount = getFormatted((user) => user?.company?.name);
  const userYears = getFormatted(
    (user) => user?.age,
    (a, b) => Number(a) - Number(b),
  );
  const userGender = getFormatted((user) => user?.gender);
  const userLocation = getFormatted((user) => user?.address?.city);
  const userSpecialization = getFormatted((user) => user?.company?.title);

  return [
    { 
      type: 'Bar',
      title: 'Company',
      data:{
        labels: companyCount.labels,
        datasets: [
          {
            label: 'User by company',
            data: companyCount.data,
            backgroundColor: colorChart.company,
          },
        ],
      }
    },
    {
      type: 'Bar',
      title: 'Years',
      data: {
        labels: userYears.labels,
        datasets: [
          {
            label: 'User by years',
            data: userYears.data,
            backgroundColor: colorChart.years,
          },
        ],
      },
    },
    {
      type: 'Pie',
      title: 'Gender',
      data: {
        labels: userGender.labels,
        datasets: [
          {
            label: 'User by gender',
            data: userGender.data,
            backgroundColor: [colorChart.female, colorChart.male],
            borderColor: [colorChart.female, colorChart.male],
          },
        ],
      },
    },
    {
      type: 'Bar',
      title: 'Location',
      data: {
        labels: userLocation.labels,
        datasets: [
          {
            label: 'User by location',
            data: userLocation.data,
            backgroundColor: colorChart.location,
          },
        ],
      },
    },
    {
      type: 'Bar',
      title: 'Specialization',
      data: {
        labels: userSpecialization.labels,
        datasets: [
          {
            label: 'User by specialization',
            data: userSpecialization.data,
            backgroundColor: colorChart.specialization,
          },
        ],
      },
    },
  ];
};
