# TP liste d'utilisateurs

## Analyse de code

Analysez le [code situé du projet](https://codesandbox.io/s/tp-props-q0wln?file=/src/App.js) puis répondez aux questions.


**1. Quelle ligne charge le fichier JSON dans le code ?**

La ligne import users from "./Users.json"; charge le fichier JSON dans le code

**2. Quelle est la structure de données du fichier JSON ?**

Le fichier JSON est sous la forme d'une liste d'objets avec les différents attributs et leurs valeurs (le genre, le nom, l'adresse, l'email, le login, la date de naissance, le numéro de téléphone, le numéro de portable, l'identifiant, une photo et une nationalité)

**3. Justifiez le `User.propTypes`. Quelles données ne sont pas prises en compte ?**

Les données en rapport avec le login, le téléphone, date de naissance, infos inscription ne sont pas prises en compte. En effet, il n'y aurait pas d'interêt à les afficher sur les card de cette page de présentation.

**4. Quelles données sont obligatoires pour construire le composant `User` ?**

Le nom, le prenom et le titre sont obligatoires pour construire le composant 'User'. On peut voir cela grâce au mot clé .isRequired

**5. A quoi correspond `PropTypes.shape` ?**

Cela sert à établir les conditions de types et de format d'un attribut ainsi que d'établir sa structure. En l'occurence, cela permet de définir les sous-attributs qui composent l'attribut principal (exemple : l'attribut name est composé des sous-attributs "title", "first" et "last")

**6. Pourquoi l'attribut contient deux accolades ?**

React utilise JSX, Dans JSX, toute variable, object d’état, expression, etc. doit être entouré de {}.
Tout en donnant des styles en ligne dans JSX, il doit être spécifié en tant qu’object pour qu’il soit à nouveau entre accolades. {}.
C’est la raison pour laquelle il y a deux paires d’accolades


**7. Quel est le nom de l'opérateur qui transmet les données du composant `App` vers le composant `User`? Pourquoi est-ce dangereux d'abuser de cet opérateur ?**

Il s'agit de l'opérateur de décomposition (...user dans notre cas). Il est dangereux d'abuser de cet opérateur parce qu'il va retourner la totalité des attributs du fichier JSON alors que seule une petite partie serait utile. C'est donc très gourmand en temps de réponse.

**8. Ajoutez un paragraphe `p` au composant `User` pour afficher la date de naissance sous la forme "Né le 27/02/1942" pour un homme ou "Née le 27/02/1942" pour une femme en utilisant une condition ternaire. Copiez le code ajouté dans ce document en guise de réponse.**

(Pensez à mettre votre code dans des balises Markdown  !!)

## Rédaction de tests
**9. Lisez [les recettes de tests](https://fr.reactjs.org/docs/testing-recipes.html#gatsby-focus-wrapper). Rédigez un test pour vérifier que le composant `User` contient une image.**

function TestImage(props){
if(props.picture!=null){
  render("L'utilisateur contient une image");
}
else{
  render("L'utilisateur ne contient pas d'image")
}
}

**10. Rédigez un autre test dans lequel vous créez le composant `User` avec le `name` de votre choix dans le `props` et vérifiez que le composant affiche bien le `name`.**

function TestName(Users){
  return{
    <main>
    <div className="cards">
<User = "name": { "title": "Mrs", "first": "Lara", "last": "Powell" }/>
    </div>
    </main>
}
}
**11. Faites un test de "capture d'instantanés" en suivant les indications de la documentation**

**12. Proposez 3 autres tests**

On pourrait tester le cas où le composant name n'est pas entièrement initialisé.
Un autre test pourrait vérifier si le format du composant mail de User est bien un format valide de type "xxxxx@yyyy.zzz"
Enfin, un dernier test pourrait vérifier si le composant "âge" correspond bien avec le composant "date de naissance"

## Mini-projet

[Téléchargez une liste de films sous le format d'un fichier JSON](https://imdb-api.com/). Cela vous demandera de créer un compte.

**13. Créez un nouveau projet et affichez les films sous la forme de cartes. Vous devrez soigner le design de la page, sans copiant le code de la liste d'utilisateurs**
