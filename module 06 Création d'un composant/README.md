# Etape 1
## Personne.jsx
```jsx
export default function Personne() {
    return (
        <h1>Je suis le composant Personne</h1>
    )
}
```

## App.jsx
```jsx
import Personne from './components/Personne'
export default function App() {
  
  
  return (
    <>
    <Personne />
    <Personne />
    <Personne />
    </>
  );
}
```

# ETAPE 2 les props

## App.jsx
```jsx
import Personne from './components/Personne'
export default function App() {
  
  
  return (
    <>
    <Personne  prenom="Brad" nom="PITT"/>
    <Personne  prenom="Tom" nom="CRUISE"/>
    <Personne  prenom="Angelina" nom="Jolie"/>
    </>
  );
}
```


## Personne.jsx
```jsx
export default function Personne({prenom,nom}) {
    return (
        <h1>Je suis {prenom} {nom}</h1>
    )
}
```

# Etape 3 tableau d'objets

## App.jsx
```jsx
import Personne from './components/Personne'
export default function App() {
  const personnes =[
    {prenom:'Nicolas',nom:'CAGE'},
    {prenom:'Angelina',nom:'JOLIE'},
    {prenom:'Tom',nom:'Hanks'},
  ];
  // i c'est l indice : 0 , 1 ,2
  return (
    <>
        { personnes.map( (p,i) => <Personne key={i} nom={p.nom} prenom={p.prenom} />)}
    </>
  );
}
```
## Etape 4 props et fonctions

## App.jsx
```jsx
import Personne from './components/Personne'
export default function App() {
  const personnes =[
    {prenom:'Nicolas',nom:'CAGE'},
    {prenom:'Angelina',nom:'JOLIE'},
    {prenom:'Tom',nom:'Hanks'},
  ];
  const qui=(indice)=>{
    console.log(indice);
    console.log(personnes[indice]);
  }
  return (
    <>
     { personnes.map( (p,i) => <Personne 
     key={i} 
     nom={p.nom} prenom={p.prenom} 
     indice={i}
     qui={qui}
     />)}
    </>
  );
}
```

## Personne.jsx
```jsx
export default function Personne({prenom,nom,indice,qui}) {
    return (
        <p>{indice} Je suis {prenom} {nom}
        <button onClick={()=> qui(indice) }>Qui ?</button>
        </p>
        
    )
}
```