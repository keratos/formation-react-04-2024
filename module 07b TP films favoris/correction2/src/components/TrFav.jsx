export default function TrFav({film,indice,supprimer}) {
    return(
<tr>
  <td>{film.Title}</td>
  <td>{film.Year}</td>
  <td>
    <img src={film.Poster} alt={film.Title} width="80" />
  </td>
  <td>
  {film.imdbRating}
  </td>
  <td className="align-middle" onClick={()=>supprimer(indice)}>
    <button className="btn btn-outline-danger">
      <i className="fa fa-trash"></i>
    </button>
  </td>
</tr>
)
}