# Monde CE1-CE2 Fantasy

Application web éducative gratuite en HTML/CSS/JavaScript.

## Fichiers

- `index.html` : page principale
- `style.css` : design
- `app.js` : logique du jeu
- `data/questions.json` : toutes les questions
- `assets/images/` : images futures
- `assets/sounds/` : sons futurs

## Lancer localement

Comme l'app charge `data/questions.json`, certains navigateurs bloquent l'ouverture directe de `index.html`.

Solution avec Python :

```bash
python -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

Sur Mac/Linux, essaie aussi :

```bash
python3 -m http.server 8000
```

## Publier gratuitement

### GitHub Pages
1. Créer un dépôt GitHub.
2. Ajouter tous les fichiers.
3. Aller dans `Settings` > `Pages`.
4. Choisir `Deploy from a branch`.
5. Choisir `main` et `/root`.

### Netlify
1. Créer un compte Netlify.
2. Glisser-déposer le dossier `monde-ce1-ce2-web`.
3. Netlify donne une adresse publique.

## Ajouter une question

Dans `data/questions.json`, ajouter :

```json
{
  "id": "fr-ce1-999",
  "level": "CE1",
  "kingdom": "francais",
  "title": "Déterminant",
  "prompt": "___ étoile brille.",
  "choices": ["Le", "La", "L’"],
  "answer": "L’",
  "explanation": "Devant une voyelle, le ou la devient l apostrophe."
}
```

Valeurs possibles pour `kingdom` :
`francais`, `maths`, `lecture`, `logique`, `orthographe`.

La valeur de `answer` doit être exactement identique à un choix de `choices`.
