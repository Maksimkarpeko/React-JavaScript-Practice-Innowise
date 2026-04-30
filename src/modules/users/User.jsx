import { useParams } from 'react-router'
import { LeafletMap, ErrorMessage, Spinner } from '@shared/ui';
import { useGetUserByIdQuery } from './api/userApi';
import style from './User.module.css';
import { getUserText } from './utils/getUserText';


export const User = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useGetUserByIdQuery(id);

  if ( isLoading ) return <Spinner/>
  if ( isError ) return (
    <div className={style.userContainer}>
      <ErrorMessage text={error?.data?.message}/>
    </div>
  )

  const userText = getUserText(data);

  const { lat: latHome, lng: lngHome } = data?.address?.coordinates || {};
  const { lat: latCompany, lng: lngCompany } = data?.company?.address?.coordinates || {};

  return (
    <div className={style.userContainer}>
      <div className={style.userBiography}>
        <h1>{`${data.firstName} ${data.lastName}`}</h1>
        <div className={style.userDetails}>
          <p className={style.userText}>
            <b>Role</b>: {`${data.company.department} ${data.company.title}`} <br />
            <b>Gender</b>: {`${data.gender}`} <br />
            <b>Age</b>: {`${data.age} ${data.age === 1 ?  'year': 'years'}`} <br /> 
            <b>University</b>: {`${data.university}`}
          </p>
        </div>
        <div className={style.userDetails}>
          <h2>{userText.summaryTitle}</h2>
          <p className={style.userText}>
            {userText.summaryText}
          </p>
        </div>
        <div className={style.userDetails}>
          <h2>{userText.hobbyTitle}</h2>
          <p className={style.userText}>
            {userText.hobbyText}
          </p>
        </div>
      </div>
      <div className={style.userLocationContainer}>
        <div className={style.userMapContainer}>
          <h2>Location home</h2>
          <p>address: {`${data.address.country} ${data.address.city} ${data.address.address}`}</p>
          <LeafletMap coords={[latHome, lngHome]}/>
        </div>
        <div className={style.userMapContainer}>
          <h2>Location company</h2>
          <p>name: {data.company.name}</p>
          <p>address:
            {`${data.company.address.country} 
                ${data.company.address.city}
                ${data.company.address.address}`}
          </p>
          <LeafletMap coords={[latCompany, lngCompany]}/>
        </div>
      </div>
    </div>
  )
}