import { useParams } from "react-router"
import { useGetUserByIdQuery } from "../developers";
import style from "./DeveloperProfile.module.css"
import { CustomMap } from "../../shared/ui";

export const DeveloperProfilePage = () => {
  const {id} = useParams();

  const {data, isLoading} = useGetUserByIdQuery(id);

  if (isLoading) return <p>Loading...</p>

  const {lat:latHome,lng:lngHome} = data.address.coordinates;
  const {lat:latCompany, lng:lngCompany} = data.company.address.coordinates;
  
  return (
    <div className={style.developerContainer}>
      <div className={style.developerBiography}>
        <h1>{`${data.firstName} ${data.lastName}`} </h1>
        <div className={style.developerDetail}>
          <p className={style.developerParaph}>
            <b>Role</b>:{`${data.company.department} ${data.company.title}`} <br />
            <b>Gender</b>:{`${data.gender}`} <br />
            <b>Age</b>: {`${data.age} years`} <br />
            <b>University</b>: {`${data.university}`}
          </p>
        </div>
        <div className={style.developerDetail}>
          <h2>
            Professional Summary 
          </h2>
          <p className={style.developerParaph}>
            {`${data.firstName} ${data.lastName}`} is an experienced {data.company.title} working in the {data.company.department}. With a focus on professional growth and expertise in the engineering sector, {`${data.firstName} ${data.lastName}`} contributes to the strategic goals of the organization
          </p>
        </div>
        <div className={style.developerDetail}>
          <h2>Hobby & Interests</h2>
          <p className={style.developerParaph}>
            Outside of work, {data.firstName} is passionate about <strong>digital photography and mountain biking</strong>. 
            Whether exploring urban landscapes or forest trails, {data.gender === 'female' ? 'she' : 'he'} enjoys 
            capturing moments that inspire creativity in {data.gender === 'female' ? 'her' : 'his'} professional life.
          </p>
        </div>
      </div>
      <div className={style.developerLocationContainer}>
        <div className={style.developerMapContainer}>
          <h2>Location home</h2>
          <p>address:{`${data.address.country} ${data.address.city} ${data.address.address}`}</p>
          <CustomMap coords={[latHome, lngHome]}/>
        </div>
        <div className={style.developerMapContainer}>
          <h2>Location company</h2>
          <p>name:{data.company.name}</p>
          <p>address:
            {`${data.company.address.country} 
            ${data.company.address.city}
            ${data.company.address.address}`}
          </p>
          <CustomMap coords={[latCompany, lngCompany]}/>
        </div>
      </div>
    </div>
  )
}