# Tech Challenge

## Intention

Ce test simule un scenario dans lequel la *Tech team* doit créer un nouveau service en production.

Chaque niveau correspond à une nouvelle itération avec de nouvelles exigences soumises par la *Product Team* au fur et à mesure qu'ils apprennent des contraintes du business.

Ce challenge a pour but d'évaluer les capacités suivantes :

### Niveau Technique

- le niveau technique dans le langage Typescript
- le niveau technique dans un écosystème NodeJS (npm, yarn, etc.)
- les bonnes pratiques Git (commits atomiques, messages clairs)

### Capacité de collaboration en équipe

- La capacité à ajouter des outils qui améliorent la productivité, le code robuste
- La capacité à écrire du code clair, lisible et modifiable par une autre personne

### Flux de travail

- La manière de concevoir par petites itérations
- La manière de s'organiser lors de la production d'une fonctionnalité

## Travail attendu

- [Dupliquez](https://help.github.com/articles/duplicating-a-repository/) ce dépôt (ne **pas** le forker)
- Résoudre les niveaux dans l'ordre
- **Commit souvent et de manière atomique** pour montrer l'évolution du code
- S'assurer constamment que `yarn test:e2e` fonctionne. Elle est la seule commande qui sera lancé par l'examinateur pour tout vérifier.

Quand le travail est fini, fournissez un lien vers votre dépôt.

## Guidelines

- Le code doit être "clean" (Dernière syntaxe ECMA, Typescript sûr, séparation des couches, des modules)
- L'utilisation des libraries NPM est autorisée
- Les tests doivent être présents (Montrez-nous ce que vous savez faire de mieux : TDD, unitaire, integration, etc.)
  - `jest` est pré-installé mais vous avez le droit de changer si vous préférez une autre
- Utiliser des fonctions asynchrone uniquement :
  - exemple #1 : `fs.xxxxxSync` ne doit pas être utilisé
  - exemple #2 : `import data from 'xxxx.json'` ne doit pas être utilisé
- Le programme doit être executable sur MacOS et Linux, vous pouvez supposer que `npm`, `yarn` and `node` LTS sont déjà installés
- La documentation et les commentaires pour expliquer le fonctionnement ou des choix techniques sont importants

## Remerciements

Ce test est inspiré du test de GetAround :-), merci à eux d'avoir publié ce test Open-Source sur le dépôt Github.
