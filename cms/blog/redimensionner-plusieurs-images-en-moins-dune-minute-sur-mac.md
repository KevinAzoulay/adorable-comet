---
created-on: '2020-05-10T22:44:37.108Z'
title: Redimensionner plusieurs images en moins d'une minute sur Mac.
slug: redimensionner-plusieurs-images-en-moins-dune-minute-sur-mac
updated-on: '2021-05-31T11:50:18.084Z'
f_image:
  url: /assets/external/60afb578ebcd64c88da0ce9e_sisyphus.png
  alt: null
f_description: >-
  Découvrez comment vous pouvez facilement redimensionner plusieurs images pour
  votre site internet / e-commerce via le terminal sans logiciel tiers coûteux
  ni logiciel de retouche photo sur Mac OSX en moins d'une minute.
published-on: '2021-05-31T11:50:18.084Z'
layout: '[blog].html'
tags: blog
---

Beaucoup de mes clients perdent leurs temps à retoucher le format de leurs images pour le e-commerce.

Par exemple, un client souhaitant retoucher ces images pour son site sur Shopify, ou le format recommandé des images de produits à vendre est de 2048 x 2048 (moins de 20mo) prenez habituellement plusieurs heures de travails afin de retoucher une centaine de photos une à une.  
  
Grâce à ce tuto simple et rapide, vous allez pouvoir faire cette tache en moins d'une minute pour toutes vos images en un seul coup tout en obtenant une taille minimum sans perdre en qualité !  
  
Pour commencer, plaçez vos images dans un dossier. Appelons ce dossier test. Le dossier test doit se trouver dans le fichier Documents.  
Lancez le terminal et écrivez ce qui suit:  
‍

  
En réponse le terminal vous confirmera que la commande a marcher en inscrivant le nom du fichier "test %"  
  
Ensuite, tapez    
‍

  
Voila, vous avez terminé !

![](/assets/external/60b4c071213f314e66d028be_screenshot202021-05-3120at2013.42.33.png)

Voila un exemple de la commande une fois accomplie.

‍

Maintenant essayons de comprendre ce que nous venons de faire:

" cd documents/test " permet de rentrer dans le fichier test, ou se situe les images que nous voulons re-formater.

sips est une commande et -Z conserve le rapport hauteur / largeur de l'image.

"1024" est la largeur et la hauteur maximales.

Si vous souhaitez modifier la hauteur/largeur maximales alors remplacez 1024 par la valeur souhaité.  
Par exemple pour Shopify cela sera de 2048x2048. Remplacez donc 1024 par 2048.

"\* .jpg" convertit chaque image se terminant par .jpg.

Si le format de vos images sont .png alors remplacez jpg par png.  
  

Attention: faites d'abord une copie du dossier "test" si vous souhaitez conserver des images avec leur plus grande taille!

N'hésitez pas à nous contacter si vous avez des questions, nous nous ferons un plaisir de vous aider.
