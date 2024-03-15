import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context";

export const LoginPage = () => {

    const {login } = useContext( AuthContext)

    const navigate = useNavigate()

    const onLogin = () => {
        const lasthPath = localStorage.getItem('lasthPath') || '/'

        login('Aldo')



        navigate(lasthPath, {
            replace: true
        })
    }


  return (

    <div className="container mt-5">
        <h1>login</h1>
        <hr />

        <button className="btn btn-primary"
        onClick={onLogin}
        >
            Login

        </button>

    </div>
  )
}
