# Mise en place de useRef
![module-5](../img/05/module-5.png)

```tsx
import { useRef } from "react";
export default function App() {
  const valeur = useRef(0);
  const ajouter = () => {
    valeur.current = valeur.current+ 1;
    console.log( valeur.current);
  };
  return (
    <>
    <button onClick={ajouter}>GO</button>
    <h1>{valeur.current}</h1>
    </>
  )
}
```
**Conclusion :**
L’affichage :
malheureusement il reste à 0  
mais augmenter dans la console  
La modification **ne** déclenche **pas** de rendering



# Différence entre useState et useRef

```tsx

import { useRef, useState } from "react";
export default function App() {
  const [valeur2, setValeur2] = useState<number>(0)
  let valeur = useRef(0);
  const ajouterRef= ()=>{
    console.log('use ref:'+valeur.current);
    valeur.current = valeur.current +1;
  }
  const ajouterState= ()=>{
    let test = valeur2+1;
    setValeur2(test);
  }
  return (
    <>
    <button onClick={ajouterState}> Ajouter Use State</button>
    <button onClick={ajouterRef}> Ajouter Use Ref</button>
    <h1> Use ref : {valeur.current}</h1>
    <h1> Use state : {valeur2}</h1>
    </>
  );
}



```
