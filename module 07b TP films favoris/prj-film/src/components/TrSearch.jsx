export default function TrSearch({film,indice,ajouter}) {
return(
<tr>
  <td>{film.Title}</td>
  <td>{film.Year}</td>
  <td>
    <img src={film.Poster} alt={film.Title} width="80" />
  </td>
  <td className="align-middle">
    <button className="btn btn-outline-secondary" onClick={()=>ajouter(indice)}>
      <i className="fa fa-plus"></i>
    </button>
  </td>
</tr>
)
}