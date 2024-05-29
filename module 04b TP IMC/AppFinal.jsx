import "./App.css";
import { useState } from "react";
function App() {
  const [valeur, setValeur] = useState({
    imc: "",
    tranche: "",
    conseil: "",
    class:""
  });

  const calcul = (e) => {
    console.log('abc');
    e.preventDefault(); // empeche d'appeler une autre page
    let info = {};
    const poids = e.target.poids.value;
    const taille = e.target.taille.value;
    e.target.reset(); // vider les champs input
    const imc = poids / (taille * taille);
    info.imc = imc.toFixed(1);
    //let tranche ='';
    if (imc < 18.5) {
      info.tranche = "maigreur";
      info.class = "warning";
      let poids = 18.5 * taille * taille;
      info.conseil = "objectif poids :" + poids.toFixed(1);
    } else if (imc < 25) {
      // 18.5 < imc < 25
      info.tranche = "normal";
      info.class = "success";
    } else if (imc < 30) {
      info.tranche = "surpoids";
      info.class = "warning";
      let poids = 25 * taille * taille;
      info.conseil = "objectif poids :" + poids.toFixed(1);
    } else if (imc < 35) {
      info.class = "danger";
      info.tranche = "obesité";
      let poids = 25 * taille * taille;
      info.conseil = "objectif poids :" + poids.toFixed(1);
    } else if (imc < 40) {
      info.class = "danger";
      let poids = 25 * taille * taille;
      info.conseil = "objectif poids :" + poids.toFixed(1);
      info.tranche = "obesité sévère";
    } else {
      info.class = "danger";
      let poids = 25 * taille * taille;
      info.conseil = "objectif poids :" + poids.toFixed(1);
      info.tranche = "obesité massive";
    }
    setValeur(info);
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
            <form method="post" onSubmit={calcul}>
              <input
                aria-label="Poids"
                className="form-control"
                name="poids"
                placeholder="Poids en kg."
                defaultValue="80"
              />

              <input
                aria-label="Taille"
                className="form-control mt-3"
                name="taille"
                placeholder="taille en m."
                defaultValue="1.8"
              />
            <button className="btn btn-success my-5 col-12" type="submit">
              <i className="fa-solid fa-weight-scale"></i>
            </button>
            </form>
            { valeur.imc>0 &&
            <div className={`alert alert-${valeur.class} mt-4`} role="alert">
              <h3>IMC : {valeur.imc}</h3>
              <p>{valeur.tranche}</p>
             { valeur.conseil && <p>{valeur.conseil}</p>}
            </div>
        } 
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

export default App;
