# Test technique

## Intro

Robert est un aventurier célèbre. Il est actuellement en expédition pour faire
le tour du pôle Nord en auto-stop. Entre les selfies avec les pingouins et les
pique-niques avec les ours polaires, ses récits sont passionnants.
Et c'est vous qui êtes chargé de maintenir le contact radio.

Seulement voilà, cela faisait plusieurs jours que vous n'avez plus eu de ses
nouvelles quand tout à coup arrive le message suivant :

```
bgou  lorh uhgb uhob  grbl rgbh  bgou rgbh uhob rgbh uohr  lrug lorh  glhu  rgbh ghob  orgh grbl hrbo uhgb  olgr lorh  bgou burh rgob bgou rgob grbl rgbh uhob  rblg  burh lorh grbl orgh  orgh grbl lorh rgbh uhgb lorh  rblg
```

Que se passe t'il ? Ses nombreux admirateurs s'inquiètent, pourriez-vous nous
donnez de ses nouvelles ?

Un dernier détail, Robert ne parle pas français, il est blourgophone mais
rassurez-vous il s'agit d'une langue facile à apprendre.

## Level 1

Ecrire un programme en Ruby permettant de convertir du français en blourg et
vice-versa. Veillez à versionner vos travaux avec Git et vous assurer de la
fiabilité de la transcription des messages.

Voici une table de caractères de l'alphabet blourg:

```
{
  "A"=>"rgbh",
  "B"=>"brug",
  "C"=>"bgou",
  "D"=>"olgr",
  "E"=>"lorh",
  "F"=>"gbhu",
  "G"=>"rlgo",
  "H"=>"burh",
  "I"=>"ghob",
  "J"=>"lrug",
  "K"=>"rhol",
  "L"=>"grbl",
  "M"=>"uhog",
  "N"=>"glhu",
  "O"=>"rgob",
  "P"=>"orgh",
  "Q"=>"lrob",
  "R"=>"ogru",
  "S"=>"uhgb",
  "T"=>"uhob",
  "U"=>"hrbo",
  "V"=>"rgub",
  "W"=>"ruob",
  "X"=>"orhu",
  "Y"=>"ublo",
  "Z"=>"ohbr",
  "!"=>"rblg",
  ","=>"uohr",
  "."=>"obgl",
  "?"=>"grlh"
}
```

## Level 2

Marcelle, sa grand-mère, souhaite lui écrire directement. Le problème, c'est
qu'elle n'est pas à l'aise en console. Vous allez donc créer une application
Ruby-on-Rails permettant de poster des messages.

Les message devront également comporter le nom de l'auteur, être persisté en
base de donnée (avec Sqlite3) et s'afficher directement en langue Blourg sur
une vue.

Pour trier les messages, il devra être possible de leur associer des tags
(Urgent, Secret ou Rigolo).

Mais attention, Marcelle et son petit-fils sont bavard, aussi l'application
devrait permettre de stocker de nombreux messages (on prendra 1000 messages par
exemple).

Enfin pour qu'on puisse rapidement échanger avec Robert, inutile d'écrire du
CSS/JS, on se contentera d'une interface HTML pure.

L'application devra exposer les routes suivantes

- /messages/
- /messages/:id
- /tags/:name/messages

## Level 3

Ca y est, on vient de recevoir une toute nouvelle radio ! Elle est smart et
elle peut directement se connecter à internet. Il ne reste donc plus qu'à
implémenter une API REST dans l'application Rails précédente qui aura les
routes suivantes:

```
- GET /api/messages.json?per_page={per_page:-10}
  Pour avoir la liste des messages filtré par tag et
  limité à 10 messages par défaut

- GET /api/messages/:id.json
  Pour avoir le corps d'un message (id, auteur, date, plain, blorg et tags)

- GET /api/tags/:name/messages.json?per_page={per_page:-10}
  Pour avoir la liste des messages filtrés par tag
```

## Conseils

Pensez à bien faire des commits Git et des commentaines si nécessaire.
