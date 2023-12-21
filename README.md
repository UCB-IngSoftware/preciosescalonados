#### Para instalar las dependencias:

npm install

#### IMPORTANTE: se tiene configuradas las siguientes acciones pre-post commit con Husky:

Pre-Commit: npm test-once
Post-commit: git push origin main

#### Comandos de uso:

Ejecutar web-sever local parcel:
npm start

Ejecutar pruebas de unidad de forma continua --watch:
npm test

Ejecutar pruebas de unidad solo una vez:
npm run test-once

#### Comandos que se usaron para instalar husky:

https://typicode.github.io/husky/getting-started.html
1.- npx husky-init && npm install
2.- modificamos el .husky/pre-commit para que ejecute npm run test-once
3.- anadimos post-comit push con:
npx husky add .husky/post-commit 'git push'
fin.
