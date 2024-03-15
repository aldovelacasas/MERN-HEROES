import { useNavigate,Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {


  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1)
    
  }

 const {id} = useParams();

 const hero = useMemo(() => getHeroById(id), [id]);

 if (!hero) {
  return <Navigate to='/Marvel'/>
 }

 
  



  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
    <div className="col-4">
      <img 
      src={`/assets/heroes/${id}.jpg`} 
      alt={hero.superhero} 
      className="img-thumbnail "
      />

    </div>

    <div className="col-8">
      <h3 className="ms-3">{hero.superhero}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
        <li className="list-group-item"> <b>publisher:</b> {hero.publisher} </li>
        <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
        

      </ul>

      <h5 className="mt-4 ms-3">characters</h5>
      <p className="ms-3">{hero.characters}</p>

      <button className="btn btn-outline-primary ms-2"
      onClick={onNavigateBack}
      >
        regresar
      </button>

    </div>
    </div>

  )
}
