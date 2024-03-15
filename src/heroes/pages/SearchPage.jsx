import { useNavigate, useLocation } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from "query-string"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {


    const navigate = useNavigate()
    const location = useLocation()

    const { q = "" } = queryString.parse(location.search)

    const heroes = getHeroesByName(q)
  const {searchText, onInputChange} = useForm({
    searchText:q
  })

  const onSearchSubmit = (event) => {
        event.preventDefault()
        // if(searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`);
  }




  return (
    <div>
        <h1 className="text-danger" style={{ fontFamily: "Arial, sans-serif"}}>Search</h1>
        <hr />

         <div className="row">
            
        <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
                <input 
                type="text" 
                name="searchText" 
                id=""
                placeholder="Search hero"
                className="form-control"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
                
                />
                <button className="btn btn-outline-primary mt-1">
                    Search

                </button>


            </form>

        </div>

        <div className="col-7">
            <h4>Result</h4>
            <hr />

            {
                (q === "")
                ? <div className="alert alert-primary  animate__animated animate__fadeIn">
                Search a hero
            </div>
                : (heroes.length === 0) &&
            <div className="alert alert-danger animate__animated animate__fadeIn">
                there´s no result  <b>{q}</b>
            </div>
            }


            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }
        </div>


         </div>



    </div>
  )
}
