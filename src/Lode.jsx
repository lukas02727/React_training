import { Link } from "react-router-dom";

export default function Lode() {

    return(
        <>
        <h1>Zde jsou lode</h1>
        <Link to={"/Auta"}>
            Jít na auta
        </Link>
        </>
    )
}