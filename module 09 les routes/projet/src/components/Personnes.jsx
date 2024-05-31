import { useNavigate } from "react-router-dom";

export default function Personne({ id, personne,effacer,modifier2 }) {
  const navigate = useNavigate();
  const modif =()=>{
    navigate("/modifier/"+id);
  }
  return (
    <>
      <tr className={`table-${personne.etat ? 'success': 'danger'}`}>
        <td>{personne.prenom}</td>
        <td>{personne.nom}</td>
        <td>
          <button className="btn btn-danger" onClick={()=>effacer(id)}>
            <i className="fa fa-trash"></i>
          </button>
        </td>
        <td>
          <button className="btn btn-warning"  onClick={()=>modifier2(id)}>
            <i className="fa fa-check"></i>
          </button>
        </td>

        <td>
          <button className="btn btn-primary"  onClick={modif}>
            <i className="fa fa-pen"></i>
          </button>
        </td>

      </tr>
    </>
  );
}
