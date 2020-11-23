# TP JavaScript

- Copier le [fichier d'exercices](../assets/javascript.js) et le [fichier de tests](../assets/javascript.test.js) dans votre répertoire git.

- Remplir le fichier d'exercices.

- Les [tests automatisés](../assets/javascript.test.js) doivent passer en lançant la commande :

```js
npm test javascript.test.js
```

## Questions sur les tests
Répondre aux questions en modifiant directement ce fichier.

**1. A quoi correspond la première ligne ? Connaissez-vous (ou sinon cherchez sur Internet !) une autre manière d'importer des dépendances.**

La première ligne sert à importer le fichier javascript.js comme une dépendance. L'instruction import permet aussi d'importer des dépendances.

**2. Expliquez le rôle de la fonction `expect`.**

La fonction 'expect' sert à vérifier certaines valeurs sous certaines conditions (définies en arguments). On l'utilise dans les tests pour valider différents traitements.

**3. A quoi sert `toEqual` ? Trouvez 5 autres fonctions similaires.**

.toEqual sert à comparer de manière récursive toutes les propriétés des instances d'objet. Cela est semblable à l'opérateur "===" d'égalité stricte.
Les fonctions suivantes sont similaires: '.toBe', '.toStrictEqual', '.toBeFalsy', 'toBeTruthy', 'toBeDefined'

**4. Trouver le rôle des fonctions `beforeEach` et `afterEach`. En déduire le rôle de la fonction `describe`.**

La fonction 'beforeEach' execute une instruction avant d'effectuer chacun des tests qui suivent. La fonction 'afterEach' execute une instruction après chacun des tests qui suivent.
La fonction 'describe' sert à créer un bloc de test dans le but de les regrouper.

**5. La fonction `console.log` est "mocké". Expliquez ce que cela signifie et comment peut-on utiliser des mocks ?**

Cela signifie un test où les fonctionnalités sont remplacées par des données simulées. Cela permet d'avoir un test rapide et peu couteux.
On peut utiliser des mocks en appelant la méthode (.mock) ou en explicitant le module (jest.mock).

**6. Imaginez d'autres cas ou il s'avère utile de mocker une fonction.**

Lorsqu'une fonction utilise des données contenues dans une base de données, il peut être utile de mocker cette fonction pour la tester sans passer par la base de données par exemple.
