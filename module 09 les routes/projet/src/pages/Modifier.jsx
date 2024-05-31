import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios"
export default function Modifier() {
    const [personne,setPersonne]= useState({prenom:'',nom:''})
    const {id} = useParams();
    const navigate = useNavigate();
    const load = async()=>{
        const url =
        "https://orsys-vip-default-rtdb.europe-west1.firebasedatabase.app/";
      
      let url2 = `${url}personne/${id}.json`;
      let response = await axios.get(url2);
      setPersonne(response.data);
    }
useEffect(()=>{
    load(id);
},[])
const modifier=async (e)=>{
    e.preventDefault();
    const url =
      "https://orsys-vip-default-rtdb.europe-west1.firebasedatabase.app/";
      let url2 = `${url}personne/${id}.json`;
    let personne = { 
      prenom: e.target.prenom.value, 
      nom: e.target.nom.value,
     };
    let response = await axios.patch(url2, personne);
    navigate("/");
}
return(
    <>

    <form method="post" onSubmit={modifier}>
        <input name="prenom" defaultValue={personne.prenom} />
        <input name="nom" defaultValue={personne.nom}/>
        <button type="submit">go</button>
    </form>

    </>
)
}