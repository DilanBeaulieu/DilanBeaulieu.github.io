<div align="center">

# 🐍 Snake Friends IO

### Mini-jeu multijoueur temps réel style Snake / Agar.io / Slither.io

**Joue avec tes amis dans une salle privée, ramasse des points, grossis ton snake, utilise des bonus rares et domine le classement en live.**

</div>

---

## 📌 Présentation

**Snake Friends IO** est un jeu web multijoueur construit en **HTML5**, **CSS3**, **JavaScript**, **Canvas API** et **Supabase Realtime**.

Le jeu fonctionne directement dans le navigateur. Les joueurs peuvent créer ou rejoindre une salle avec un code, se déplacer sur une grande map, voir les autres joueurs en temps réel, utiliser le chat, ramasser des bonus et apparaître dans un classement live.

---

## 🎮 Fonctionnalités principales

- ✅ Jeu multijoueur temps réel
- ✅ Système de salles privées
- ✅ Lien de partage de room
- ✅ Snake contrôlable au clavier, souris et mobile
- ✅ Score live
- ✅ Classement en direct
- ✅ Chat de salle
- ✅ Minimap précise
- ✅ Skins personnalisables
- ✅ Couleurs personnalisées
- ✅ Logo / emoji sur la tête du snake
- ✅ Points à ramasser sur la map
- ✅ Drop de score quand un joueur meurt
- ✅ Bonus rare Gatorade
- ✅ Bonus rare Wheel Spin
- ✅ Log live des multiplicateurs
- ✅ Fusil à eau rare avec 5 munitions
- ✅ Headshot sur la tête = kill complet
- ✅ Bodyshot = dégâts
- ✅ Interface responsive mobile

---

## 🧱 Comment le site / jeu est bâti

Le projet est conçu comme une application web simple en un seul fichier principal :

```txt
index.html
```

Ce fichier contient :

```txt
index.html
├── Structure HTML du menu, du HUD, du chat et du canvas
├── Styles CSS complets de l'interface
├── Canvas principal du jeu
├── Canvas de la minimap
├── Logique JavaScript du gameplay
├── Connexion Supabase
├── Système multijoueur realtime
├── Système de chat
├── Système de bonus
├── Système de projectiles
├── Système de score
└── Boucle principale du jeu
```

---

## 🖥️ Frontend

Le frontend utilise :

- **HTML5** pour la structure
- **CSS3** pour le design moderne
- **JavaScript ES Modules** pour la logique du jeu
- **Canvas API** pour dessiner la map, les joueurs, les points, les tirs et les effets

Le canvas principal occupe tout l'écran :

```html
<canvas id="game"></canvas>
```

La minimap utilise aussi son propre canvas :

```html
<canvas id="minimap"></canvas>
```

---

## 🌐 Multiplayer avec Supabase

Le jeu utilise **Supabase Realtime** pour permettre aux joueurs de se voir et d'interagir en live.

La librairie Supabase est importée directement depuis un CDN :

```js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
```

Le client Supabase est ensuite initialisé avec :

```js
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

---

## 🏠 Système de salles

Chaque partie utilise un **code de salle**.

Exemple :

```txt
warcry
```

Tous les joueurs qui entrent le même code rejoignent la même room.

Le menu permet de :

- choisir son nom
- choisir sa couleur
- choisir son emoji/logo
- créer une salle
- rejoindre une salle existante
- générer une salle aléatoire
- copier un lien d'invitation

---

## 📡 Fonctionnement du multijoueur

Chaque joueur possède son propre état local :

```txt
nom
couleur
emoji
position
score
direction
munitions
état vivant / mort
```

À intervalle régulier, le joueur envoie ses données à la room Supabase.

Les autres joueurs reçoivent ces données et les affichent sur leur écran.

### Exemple logique

```txt
Joueur A bouge
↓
Son navigateur met à jour sa position
↓
Supabase Realtime envoie l'information aux autres joueurs de la room
↓
Joueur B, C et D voient Joueur A bouger en direct
```

---

## 🎨 Système de skins

Le joueur peut personnaliser son snake avec :

- une couleur prédéfinie
- une couleur custom
- un emoji/logo sur la tête

Exemples d'emojis disponibles :

```txt
👽 👻 🤠 🧌 🧟 🌚 🐦‍🔥 ❄️ 🍑 🥨 🍪 🧊 🎲 💸 🌍 👑 🔥
```

Le skin est synchronisé aux autres joueurs dans la salle.

---

## 🐍 Gameplay du snake

Le joueur contrôle un snake sur une grande map.

Le snake peut :

- manger des points
- augmenter son score
- grossir
- ramasser des bonus
- tirer avec une arme rare
- mourir
- exploser en points

La taille et la progression du snake sont liées au score.

---

## 🍬 Points sur la map

La map contient plusieurs points à ramasser.

Quand un joueur ramasse un point :

```txt
score + valeur du point
```

Les points peuvent respawn afin de garder la map active.

---

## 💥 Mort et explosion de score

Quand un joueur meurt, son score peut être transformé en points au sol.

Les autres joueurs peuvent ensuite ramasser ces points.

Ce système rend les kills importants, car un joueur peut récupérer une grosse partie du score laissé par un adversaire.

---

## 🔫 Fusil à eau rare

Un objet rare peut apparaître sur la map : le **fusil à eau**.

Quand un joueur le ramasse :

```txt
Munitions : 5 / 5
```

Le joueur peut tirer avec le clic gauche de la souris.

### Dégâts

```txt
Tir dans la tête du snake ennemi = kill instantané
Tir dans le corps = -50 points / dégâts
Si le joueur a moins de 50 points = mort instantanée
```

Ce bonus est volontairement rare pour éviter de déséquilibrer la partie.

---

## 🎡 Wheel Spin Rare

La **Wheel Spin** est un bonus de gambling rare.

Quand un joueur la ramasse :

- une roue apparaît à l'écran
- elle tourne avec différents multiplicateurs
- le joueur peut gagner gros
- le joueur peut aussi tout perdre

### Résultats possibles

```txt
x2
x3
x5
x10
x25
x50
X = perte totale / mort
```

La roue est risquée : il y a plus de chances de perdre ou d'avoir un petit gain que d'obtenir un gros multiplicateur.

---

## 📜 Log des multiplicateurs

Le HUD contient une section spéciale :

```txt
🎡 Gains roue - Live
```

Elle affiche les derniers gains ou pertes des joueurs avec la roue.

Cela permet de voir en direct qui a gagné gros ou qui a tout perdu.

---

## 💬 Chat de salle

Chaque room possède son propre chat.

Les joueurs peuvent envoyer des messages qui apparaissent immédiatement chez tous les autres joueurs de la même salle.

Le chat est indépendant entre les rooms.

---

## 🗺️ Minimap

La minimap affiche une vue réduite de la grande map.

Elle permet de voir :

- sa position
- les autres joueurs
- les déplacements globaux

Elle est mise à jour en temps réel.

---

## 🏆 Classement live

Le leaderboard affiche les meilleurs joueurs de la salle selon leur score.

Il est mis à jour pendant la partie.

---

## 📱 Support mobile

Le jeu est responsive et contient des contrôles mobiles.

Sur mobile, des boutons directionnels apparaissent :

```txt
▲
◀ ▼ ▶
```

Le joueur peut donc jouer sur téléphone ou tablette.

---

## 🕹️ Contrôles

### PC

```txt
Souris        Déplacement précis
Clic gauche   Tirer avec le fusil à eau
Clavier       Déplacement alternatif
```

### Mobile

```txt
Boutons tactiles directionnels
```

---

## ⚙️ Configuration importante

Dans le fichier `index.html`, le jeu utilise des constantes principales :

```js
const WORLD = 3600;
const FOOD_COUNT = 260;
```

Ces valeurs contrôlent :

- la taille du monde
- la quantité de nourriture sur la map

---

## 🚀 Installation

Aucune compilation n'est nécessaire.

### Étapes

1. Télécharge le projet
2. Place `index.html` dans ton hébergement
3. Configure ton projet Supabase si nécessaire
4. Ouvre le site dans un navigateur
5. Crée une room
6. Partage le lien avec tes amis

---

## 🌍 Hébergement recommandé

Le jeu peut être hébergé sur :

- GitHub Pages
- Netlify
- Vercel
- VPS
- Apache
- Nginx

Comme le jeu est frontend, il peut fonctionner sur presque n'importe quel hébergeur statique.

---

## 🔐 Note de sécurité

Le projet utilise une clé Supabase publique `anon` côté client, ce qui est normal pour une application frontend.

Pour un projet public ou plus sérieux, il est recommandé de :

- configurer les règles RLS Supabase
- limiter les permissions de la clé anon
- valider les données reçues
- ajouter une protection anti-spam pour le chat
- ajouter une logique serveur pour éviter la triche
- éviter de faire confiance uniquement au client

---

## 🧠 Idées futures

- Comptes joueurs
- Système de statistiques globales
- Leaderboard permanent
- Matchmaking public
- Système d'amis
- Skins débloquables
- Boutique cosmétique
- Modes de jeu
- Mode Battle Royale
- Mode équipe
- Anti-cheat serveur
- Sauvegarde des meilleurs scores

---

## 📁 Structure simplifiée

```txt
Snake-Friends-IO/
├── index.html
└── README.md
```

---

## ❤️ Crédits

Projet créé pour offrir un mini-jeu web fun, rapide et multijoueur, jouable directement avec ses amis depuis un simple lien.

<div align="center">

### 🐍 Snake Friends IO

**Built with HTML5, Canvas, JavaScript and Supabase Realtime.**

</div>
