export default function TrFav() {
    return(
<tr>
  <td>Star Wars</td>
  <td>2020</td>
  <td>
    <img src="img.jpg" alt="Star Wars" width="80" />
  </td>
  <td>
    8
  </td>
  <td className="align-middle">
    <button className="btn btn-outline-danger">
      <i className="fa fa-trash"></i>
    </button>
  </td>
</tr>
)
}