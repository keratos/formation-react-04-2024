# TP 2 ways binding
```jsx
import "./App.css";
import { useRef,useState } from "react";
export default function App() {
  const valeur = useRef('');
  const [info,setInfo]=useState('');
  const affiche =(e)=>{
    console.log(e.target.name); // info
    console.log(e.target.value); // contenu du champ input
    valeur.current = e.target.value; // je met le contenu input
    setInfo(valeur.current);
  }
  return (
    <>
    <div className="container">
    <input name="info" onChange={affiche} />
    <h1>{info}</h1>
    </div>
    </>
  );
}


```

## ETAPE 1
Modifier le code ci dessus  
enlever le champ info  
ajouter un champ input prenom  
ajouter un champ input nom  
Afficher en temps réels le nom et le prénom  
```jsx
import "./App.css";
import { useRef, useState } from "react";
export default function App() {
  const prenom = useRef("");
  const nom = useRef("");
  const [info, setInfo] = useState("");
  const affiche = (e) => {
    if (e.target.name == 'nom'){
      //obj[e.target.name]= e.target.value;
      nom.current = e.target.value;
    }else{
      prenom.current = e.target.value;
    }
   // setInfo(prenom.current + ' '+nom.current);
    setInfo(`${prenom.current} ${nom.current}`);
  };
  return (
    <>
      <div className="container">
        <div className="col-4">
          <h1>Saisir votre nom</h1>
          <input
            className="my-3 form-control"
            name="prenom"
            onChange={affiche}
            placeholder="Prénom"
          />
          <input
            className="form-control"
            name="nom"
            onChange={affiche}
            placeholder="Nom"
          />
          <h1>{info}</h1>
        </div>
      </div>
    </>
  );
}
```
## ETAPE 2
Enlever le bouton au projet imc
```jsx
import "./App.css";
import { useState, useRef } from "react";
export default function App() {
  const poids = useRef(0);
  const taille = useRef(0);
  const [valeur, setValeur] = useState({
    imc: "",
    tranche: "",
    conseil: "",
    class: "",
  });

  const calcul = (e) => {
    if (e.target.name == "poids") {
      poids.current = e.target.value;
    } else {
      taille.current = e.target.value;
    }
    let info = {};
    if (poids.current > 0 && taille.current > 0) {
      const imc = poids.current / (taille.current * taille.current);
      info.imc = imc.toFixed(1);
      //let tranche ='';
      if (imc < 18.5) {
        info.tranche = "maigreur";
        info.class = "warning";
        let poids = 18.5 * taille.current * taille.current;
        info.conseil = "objectif poids :" + poids.toFixed(1);
      } else if (imc < 25) {
        // 18.5 < imc < 25
        info.tranche = "normal";
        info.class = "success";
      } else if (imc < 30) {
        info.tranche = "surpoids";
        info.class = "warning";
        let poids = 25 * taille.current * taille.current;
        info.conseil = "objectif poids :" + poids.toFixed(1);
      } else if (imc < 35) {
        info.class = "danger";
        info.tranche = "obesité";
        let poids = 25 * taille.current * taille.current;
        info.conseil = "objectif poids :" + poids.toFixed(1);
      } else if (imc < 40) {
        info.class = "danger";
        let poids = 25 * taille.current * taille.current;
        info.conseil = "objectif poids :" + poids.toFixed(1);
        info.tranche = "obesité sévère";
      } else {
        info.class = "danger";
        let poids = 25 * taille.current * taille.current;
        info.conseil = "objectif poids :" + poids.toFixed(1);
        info.tranche = "obesité massive";
      }
      setValeur(info);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-weight-scale"></i>
            Calcul IMC
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-4 pt-4">
            <h1 className="h3">Calculer votre IMC</h1>

            <input
              aria-label="Poids"
              className="form-control"
              name="poids"
              placeholder="Poids en kg."
              onChange={calcul}
            />

            <input
              aria-label="Taille"
              className="form-control mt-3"
              name="taille"
              placeholder="taille en m."
              onChange={calcul}
            />

            {valeur.imc > 0 && (
              <div className={`alert alert-${valeur.class} mt-4`} role="alert">
                <h3>IMC : {valeur.imc}</h3>
                <p>{valeur.tranche}</p>
                {valeur.conseil && <p>{valeur.conseil}</p>}
              </div>
            )}
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
    </>
  );
}
```
