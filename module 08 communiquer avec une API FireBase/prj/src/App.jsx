import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

import Personne from "./components/Personnes";
export default function App() {
  const [data, setData] = useState(0);
  
  useEffect(() => {
    afficher();
  }, []);

  const ajouter = async (e) => {
    //console.log(e.target.prenom.value);
    e.preventDefault();
    const url =
      "https://orsys-vip-default-rtdb.europe-west1.firebasedatabase.app/";
    let url2 = url + "personne.json";
    let personne = { 
      prenom: e.target.prenom.value, 
      nom: e.target.nom.value,
    etat:true };
    let response = await axios.post(url2, personne);
    console.log(response.data);
    let id = response.data.name;
    // un objet est aussi un tableau 
    data[id] = personne;
    setData({ ...data });

    e.target.reset();
  };
  const modifier = async () => {
    // PUT
    const url =
      "https://orsys-vip-default-rtdb.europe-west1.firebasedatabase.app/";
    const id = "-NzDXDmn9zda3UsGxCCZ";
    let url2 = `${url}personne/${id}.json`;
    let personne = { prenom: "Tom 2", nom: "CRUISE 2" };
    let response = await axios.put(url2, personne);
    console.log(response.data);
  };
  const modifier2 = async (id) => {
    const url =
      "https://orsys-vip-default-rtdb.europe-west1.firebasedatabase.app/";
   
    let url2 = `${url}personne/${id}.json`;
    let personne = { etat: !data[id].etat };
    let response = await axios.patch(url2, personne);
    data[id].etat=!data[id].etat;
    setData({...data})
    console.log(response.data);
  };
  const effacer = async (id) => {
    // PATCH
    const url =
      "https://orsys-vip-default-rtdb.europe-west1.firebasedatabase.app/";
    
    let url2 = `${url}personne/${id}.json`;
    let response = await axios.delete(url2);
    delete(data[id]);
    setData({...data});
    console.log(response.data);
  };
  const afficher = async () => {
   
    const url =
      "https://orsys-vip-default-rtdb.europe-west1.firebasedatabase.app/";

    let url2 = `${url}personne.json`;
    let response = await axios.get(url2);
    let objet = response.data;
    setData(objet);
    /*
    // let attribut
    let personnes = [];
    for (let attribut in objet){
     // console.log(attribut);
      let id = attribut
      // un objet est aussi un tableau (array)
      let personne = objet[id];
      personne.id = attribut;
      personnes.push(personne);
      //console.log(personne);
    }
    console.log(personnes);
*/
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-martini-glass-citrus me-4"></i>
            VIP Cocktail
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="bg-gris p-4">
              <form method="post" onSubmit={ajouter}>
                <div className="row">
                  <div className="col-4">
                    <input
                      aria-label="Nom"
                      className="form-control"
                      placeholder="Nom"
                      name="nom"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      aria-label="Prenom"
                      className="form-control"
                      placeholder="prenom"
                      name="prenom"
                    />
                  </div>
                  <div className="col-1">
                    <button className="btn btn-success">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <table className="table table-striped mt-4">
              <thead>
                <tr>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th colSpan="2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  Object.keys(data).map((key) => (
                    <Personne 
                    key={key} 
                    id={key} personne={data[key]} 
                    effacer={effacer}
                    modifier2={modifier2}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Seven Valley 2023
          </p>
        </div>
      </footer>
      {/* {
      data && Object.entries(data).map(tab => 
        <Personne key={tab[0]} indice={tab[0]} personne={tab[1]} />
      )
      } */}
    </>
  );
}
