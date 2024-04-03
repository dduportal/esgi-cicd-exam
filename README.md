# Exam CI

Il s'agit d'un projet effectué en cours avec une db firebase que je ne lance pas. Je lance uniquement Angular dans le cadre de l'exercice

# Fabriquer l'image

Pour fabriquer l'image docker entrez cette commande :
```
docker build -t pokedex .
```

# S'assurer du fonctionnement

## Github Actions 
A chaque push sur une pull request et sur la branche main, une action se charge de build l'app et d'effectuer un curl pour tester son bon fonctionnement

## Manuellement
```
docker run -d -p 4200:80 --name pokedex pokedex
curl http://0.0.0.0:4200
docker stop pokedex 
```

# Deploiement

Le déploiement s'effectue sur une Github Page lors de la création d'un tag

La convention utilisée est le versionnage sémantique :

    v(majeure).(mineure).(correction)
