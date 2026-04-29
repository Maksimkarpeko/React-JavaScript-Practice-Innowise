import { useParams } from 'react-router'
import { CustomMap,ErrorMessage,Spinner } from '@shared/ui';
import { useGetUserByIdQuery } from './api/userApi';
import style from './UserProfile.module.css'
import { userText } from './configs/userText';


//hendler проверить.
//Неймиг и стили тоже  '' 
export const UserProfilePage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useGetUserByIdQuery(id);

  if ( isLoading ) return <Spinner/>
  // нейминг
  const string = userText(data);
  // проверка 
  const { lat:latHome, lng:lngHome } = data.address.coordinates;
  const { lat:latCompany, lng:lngCompany } = data.company.address.coordinates;
  //error?.
  return (
    <div className={style.developerContainer}>
      {isError ? <ErrorMessage text={error.data.message}/> : 
        <>
          <div className={style.developerBiography}>
            <h1>{`${data.firstName} ${data.lastName}`}</h1>
            <div className={style.developerDetail}>
              <p className={style.developerText}>
                <b>Role</b>: {`${data.company.department} ${data.company.title}`} <br />
                <b>Gender</b>: {`${data.gender}`} <br />
                <b>Age</b>: {`${data.age} ${data.age === 1 ? 'years' : 'year'}поправить`} <br /> 
                <b>University</b>: {`${data.university}`}
              </p>
            </div>
            <div className={style.developerDetail}>
              <h2>{string.summaryTitle}</h2>
              <p className={style.developerText}>
                {string.hobbyText}
              </p>
            </div>
            <div className={style.developerDetail}>
              <h2>{string.hobbyTitle}</h2>
              <p className={style.developerText}>
                {string.hobbyText}
              </p>
            </div>
          </div>
          <div className={style.developerLocationContainer}>
            <div className={style.developerMapContainer}>
              <h2>Location home</h2>
              <p>address: {`${data.address.country} ${data.address.city} ${data.address.address}`}</p>
              <CustomMap coords={[latHome, lngHome]}/>
            </div>
            <div className={style.developerMapContainer}>
              <h2>Location company</h2>
              <p>name: {data.company.name}</p>
              <p>address:
                {`${data.company.address.country} 
                ${data.company.address.city}
                ${data.company.address.address}`}
              </p>
              <CustomMap coords={[latCompany, lngCompany]}/>
            </div>
          </div>
        </>
      }
    </div>
  )
}