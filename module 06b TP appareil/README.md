# TP appareil
```js
let a ={ nom:'TV', etat:'allume'}
```

- créer un tableau d'objet appareils
- Créer le component Appareil.jsx
- Envoyer les élèments du tableau au component Appareil
- changer la couleur du background
- Allumer et Eteindre tous les appareils


## Etape 1
**App.jsx**
```jsx
import {useState} from 'react';
import Appareil from './components/Appareil'
export default function App() {
  const [appareils,setAppareils] = useState([
    {nom:'TV',etat:'allume'},
    {nom:'Xbox',etat:'eteint'},
    {nom:'Machine à café',etat:'allume'},
  ]);
  const allumer=()=>{
    appareils.map(appareil=> appareil.etat = 'allume');
    setAppareils([...appareils]);
  }
  const eteindre=()=>{
    appareils.map(appareil=> appareil.etat = 'eteint');
    setAppareils([...appareils]);
  }
 
  return (
    <div className="container">
      <div className="col-4">
      <h2>Les Appareils</h2>
				<ul className="list-group">
          {appareils.map((a,i)=><Appareil key={i} appareil={a} indice={i}/>)}
          </ul>
          <button className="btn btn-success mt-4" onClick={allumer}>ON</button>
          <button className="btn btn-danger mt-4 ms-5" onClick={eteindre}>OFF</button>
      </div>
    </div>

  );
}
```
**Appareils.jsx**
```jsx
export default function Personne(props) {
    return (
        <li 
        className={`list-group-item list-group-item-${props.appareil.etat == 'allume' ? 'success':'danger' }`}
        >
            <h4>{props.indice}  {props.appareil.nom} -- {props.appareil.etat}</h4>
            <button className="btn btn-success " >ON</button>
          <button className="btn btn-danger ms-3" >OFF</button>
        </li>
        
    )
}
```

## Etape 2
- ajouter ON et OFF pour chaque 