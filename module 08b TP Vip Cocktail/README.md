# TP VIP Cocktail

- Ajouter une personne  
- Enlever une personne  
- Modifier avec patch  

```js

let data= {
    "id1" :{"nom": "PITT", "prenom": "Brad"},
    "id2" :{"nom": "CAGE", "prenom": "Nicolas"},
    "id3" :{"nom": "JOLIE", "prenom": "Angelina"}
}


Object.keys(data).map( attribut => {
  console.log(attribut)
  //un objet est aussi un tableau
  console.log(data[attribut]);
});
```