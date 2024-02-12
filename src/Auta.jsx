import { Link } from "react-router-dom";

export default function Auta() {

    return(
        <>
        <h1>Zde jsou auta</h1>
        <Link to={"/Lode"}>
            Jít na lodě
        </Link>
        </>
    )
}