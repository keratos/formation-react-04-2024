import { useState } from "react";
import TrSearch from "./components/TrSearch";
import TrFav from "./components/TrFav";
export default function App() {
  const [films, setFilms] = useState([]);
  const [favories, setFavories] = useState([]);
  const ajouter=(indice)=>{
    console.log(indice);
    console.log(films[indice]);
    favories.push(films[indice]);
    setFavories([...favories]);


  }
  const recherche = async (e) => {
    e.preventDefault();
    const key = "efdc2275";
    // &t= 1seul film
    //  &s= 1 tableau de films
    const titre = e.target.film.value;
    let url = `http://www.omdbapi.com/?apikey=${key}&s=${titre}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.Search);
    setFilms(data.Search);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-rocket me-4"></i>
            Mes séries
          </a>
        </div>
      </nav>
      <div className="container mt-4" data-info="88zzefdc2275">
        <div className="row">
          <div className="col-4">
            <form method="post" onSubmit={recherche}>
              <div className="row">
                <div className="col-10">
                  <input
                    type="text"
                    name="film"
                    defaultValue="star"
                    className="form-control"
                    placeholder="Nom de la série"
                  />
                </div>
                <div className="col-2">
                  <button className="btn btn-success" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
            </form>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Séries</th>
                  <th>Année</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{
                films.map((film,indice)=><TrSearch 
                key={indice}
                film={film}
                indice={indice}
                ajouter={ajouter}
                />)
                }
            
              </tbody>
            </table>
          </div>
          <div className="offset-3 col-4">
            <h1>Séries à regarder :</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Séries</th>
                  <th>Année</th>
                  <th>rating</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <TrFav></TrFav>
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
    </>
  );
}
