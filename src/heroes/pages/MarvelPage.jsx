import { HeroList } from "../components"

export const MarvelPage = () => {
  return (

    <div>
    <h1 className="text-danger" style={{ fontFamily: "Arial, sans-serif"}}>MarvelComics</h1>
    <hr />
    <HeroList publisher='Marvel Comics'/>

    </div>


    
  )
}
