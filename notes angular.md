# Angular

##  Directives Angular
- NgIf (if)
``` html
<p *ngIf="product.description">
  ...
</p>
```


- NgFor (for)
``` html
<div *ngFor="let product of products">
  ...
</div>
```

- NgStyle (style de l'élément)


- NgClass (ajouter ou retirer dynamiquement des classes)
``` html
<div [class.someClass]="isStyleWithSomeClass()">
  Ng class!
</div>
```

## Resume

Plusieurs symboles pour intéragir avec le template :
- {{}} pour afficher le contenu de variable 
- ng ou directives qui commencent *
- [] pour le binding de propriétés
- création de variables locales avec #
- usage des selecteurs pour imbriquer les templates de composants
- gestion des evenements avec ()

## Utilisation des pipes

Les pipes permettent de transformer les données pour la vue.
Ce sont des fonctions prenant des valeurs de nos expressions en input et en affichant la sortie directement au niveau du template


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

apiKey: "AIzaSyDpEwMaowo1kWp0go96kf2AsBreVRY-M3M",

authDomain: "pokedexesgi.firebaseapp.com",

projectId: "pokedexesgi",

storageBucket: "pokedexesgi.appspot.com",

messagingSenderId: "716410472706",

appId: "1:716410472706:web:50f30d652acf6efb8f5a1b"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);




npm install firebase
