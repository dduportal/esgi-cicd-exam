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

