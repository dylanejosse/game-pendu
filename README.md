# Prise en main de JavaScript : Création du célèbre jeu du pendu

Le but de ce projet est simple : créer, en JavaScript le jeu du pendu. L'objectif de ce projet est de pouvoir travailler sur la manipulation des fichiers .js, sur la création d'écouteurs d'évènements et sur l'impact que ceux-ci peuvent avoir sur les interactions avec l'utilisateur !

## Règles du jeu & mise en place 

À chaque début de partie, un mot aléatoire est généré, qui apparît à l'écran (les lettres de celui-ci sont masquées 👀)

L'objectif du joueur : retrouver la totalité des lettres manquantes 🕵️🕵️‍♀️

Dans le cadre d'une partie, les règles du jeu suivantes seront suivies :

- Le joueur possède 10 chances (💚) pour trouver le bon mot. Pour ce faire, il devra réussir à trouver toutes les lettres manquantes et compléter le mot (affiché à l'écran),
- 1 chance est perdue dès qu'une lettre proposée par le joueur n'est pas présente dans le mot ❌,
- Si la lettre proposée par le joueur est valide, celle-ci s'affiche à l'écran et aucune chance n'est retirée au jopueur ✅,
- Dans le cas où le joueur repropose une lettre qu'il a déjà proposer, il ne perd aucune chance (que la lettre soit présente dans le mot ou non) 🤝 Si le joueur oublie les lettres qu'il a déjà proposé, pas de panique ! La section "lettres déjà proposée" reprendra dynamiquement ces caractères et lui affichera pour éviter les doublons 🎩

## But pédagogique

Ce projet m'a permis de travailler sur les notions suivantes :

- Utilisation des branches sur Github (git checkout -b, git merge)
- Création et utilisation de fonctions JavaScript,
- Mise en place d'écouteurs d'évènements (querySelector(), createElement()...), 
- Ajout et suppression de classes dynamiquement (gestion du darkMode par exemple),
- Léger travail sur la partie CSS,
- Autres : setTimeout(), location.reload(), window.alert()
