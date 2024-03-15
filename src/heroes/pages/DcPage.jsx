import { HeroList } from "../components"
import '../../styles.css'

export const DcPage = () => {

  return (


    <div className="dc-page-container">
      <div className="container">
        <h1 className="text-danger" style={{ fontFamily: "Arial, sans-serif" }} >DC Comics</h1>
        <hr />
        <HeroList publisher='DC Comics' />
      </div>
      </div>
    
    
    )
}
