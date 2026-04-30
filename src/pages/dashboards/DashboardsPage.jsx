import { Bar,Pie } from 'react-chartjs-2';
import { useGetUsersQuery } from '@modules/users/api/userApi';
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
import { ErrorMessage, Spinner } from '@shared/ui';
import style from './DashboardsPage.module.css';
import { getChartData } from './constants/get-chart-data';

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
    legend: { position: 'top' },
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
  const { data, isLoading, isError, error } = useGetUsersQuery({ limit: -1, skip: 0 });

  if (isLoading) return <Spinner/>
  if (isError) return <ErrorMessage message = {error?.data?.message}/>

  const {users} = data;

  const [companyChart, ...otherCharts] = getChartData(users);

  return(
    <div className={style.dashboardContainer}>
      <div className={style.titleContainer}>
        <h1>Users dashboards</h1>
        <p>Visualization of key performance indicators, user activity, and system statistics in real time.</p>
      </div>
      <div className={style.chartContainer}>
        <div className={style.companyChart}>
          <Bar options={getOptions(companyChart.title)} data={companyChart.data}/>
        </div>
        <div className={style.userCharacteristicsCharts}>
          {otherCharts.map(item=>(
            <div className={style.userCharacteristicsChart} key={item.title}>
              {item.type === 'Bar' ? 
                <Bar  options={getOptions(item.title)} data={item.data}/> : 
                <Pie options={getOptions(item.title)} data={item.data} />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}