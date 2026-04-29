import { Bar,Pie } from "react-chartjs-2";
import { Spinner } from "@shared/ui"
import { useGetUsersQuery } from "@modules/users/api/userApi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import style from "./DashboardsPage.module.css"
import { colorChart } from "./constants/color-chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);


const BASE_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
  },
};

const getOptions = (title) => {
  const options = {
    ...BASE_OPTIONS,
    plugins: { ...BASE_OPTIONS.plugins, title: { display: true, text: title } }
  };
  return options;
};

export const DashboardsPage = () => {
  const { data, isLoading } = useGetUsersQuery({ limit: -1, skip: 0 });

  if (isLoading) return <Spinner/>
  const {users} = data;

  const createStats = (arr, selector) => {
    return arr.reduce((acc, item) => {
      const key = selector(item) || "Unknown";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  };

  const countCompany = createStats(users, (user) => user?.company.name)
  const yearsUser = createStats(users, (user) => user?.age)
  const genderUser = createStats(users, (user) => user?.gender)
  const locationUser = createStats(users, (user) => user?.address?.city);
  const specializationUser = createStats(users, (user) => user?.company?.title)

  const labels = Object.keys(countCompany);
  const counts = Object.values(countCompany);

  const labelsStatsYears = Object.keys(yearsUser).sort((a, b) => Number(a) - Number(b));
  const years = labelsStatsYears.map(key => yearsUser[key]);

  const labelsStatsGender = Object.keys(genderUser);
  const gender = labelsStatsGender.map(key => genderUser[key]);

  const labelsStatsLocation =  Object.keys(locationUser);
  const location = labelsStatsLocation.map(key => locationUser[key]);

  const labelsStatsSpecialization =  Object.keys(specializationUser);
  const specialization = labelsStatsSpecialization.map(key => specializationUser[key]);

  const dataDashboards = {
    labels,
    datasets: [
      {
        label: "User by company",
        data: counts,
        backgroundColor: colorChart.company,
      },
    ],
  }
  const additionalDataConfig = [
    {
      type: "Bar",
      option: getOptions("years"),
      data:{
        labels:labelsStatsYears,
        datasets: [
          {
            label: "User by years",
            data: years,
            backgroundColor: colorChart.years,
          },
        ],
      }
    },
    {
      type: "Pie",
      option: getOptions("gender"),
      data:{
        labels: labelsStatsGender,
        datasets: [
          {
            label: "User by gender",
            data: gender,
            backgroundColor: [
              colorChart.female,
              colorChart.male,
            ],
            borderColor: [
              colorChart.female,
              colorChart.male,
            ],
          },
        ]
      }
    },

    {
      type: "Bar",
      option: getOptions("location"),
      data:{
        labels:labelsStatsLocation,
        datasets: [
          {
            label: "User by location",
            data: location,
            backgroundColor: colorChart.location,
          },
        ],
      }
      
    },
    {
      type: "Bar",
      option: getOptions("specialization"),
      data: {
        labels: labelsStatsSpecialization,
        datasets: [
          {
            label: "User by specialization",
            data: specialization,
            backgroundColor: colorChart.specialization,
          },
        ],
      } 
    }, 
  ]

  
  return(
    <>
      <div className={style.titleContainer}>
        <h1>Users dashboards</h1>
        <p>Visualization of key performance indicators, user activity, and system statistics in real time.</p>
      </div>
      <div className={style.dashboardContainer}>
        <div className={style.mainChart}>
          <Bar  options={getOptions("Company")} data={dataDashboards}/>
        </div>
        <div className={style.additionalCharts}>
          {additionalDataConfig.map(item=>(
            <div className={style.additionalChart} key={item.labels}>
              {item.type === 'Bar' ? <Bar  options={item.option} data={item.data}/> : <Pie options={item.option} data={item.data} />}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}