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

## ETAPE 2
Enlever le bouton au projet imc

