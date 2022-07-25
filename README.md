# 2Buy with Vue
![Status: Finished](https://img.shields.io/badge/status-finished-green) ![Node: v16.15.1](https://img.shields.io/badge/node-v16.15.1-important) ![Language: JavaScript](https://img.shields.io/badge/language-JavaScript-yellow) ![Framework: Vue js](https://img.shields.io/badge/framework-Vue.js-red) ![First Realese: 06/25/2022](https://img.shields.io/badge/first_release-06/25/2022-informational) 

## Introduction

### ⏩ Quick Description
Project with Vue exploring the tool, with the maximum consumption of the API, concept of routes and the most efficient in componentization.

### 📃 A little context

2Buy with Vue is **originally** a traffic-driving tool for big brands looking to drive digital performance.
**The project in question**, this is my first challenge, as an intern at Lett, where it was necessary to replicate the existing project, using Vue. It is important to note that this was my first project using this technology.

## A aplicação

Application main screen 
![Gif Showing the Home Screen](./public/Mostrando_Tela_Inicial.gif)

Use of internal and external routes 
![Gif Shown the Routes](./public/Mostrando_Rotas.gif)

### 🛠 Technologies Used
The following tools were used in building the project.
- [Node.js](https://nodejs.org/)
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [json-Server](https://www.npmjs.com/package/json-server)
- [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/)

### 📦 Downloading and Using the Application
Initially, it is important to establish that the project is private, as it may expose the security of LETT Digital.

Make sure you have Node.js installed - tested with v16.15.1

So to use the project, the first thing to do is clone it!
**`gh repo clone GabFiterman/2buy-Campari-Vue`**

In the project folder, it is important at this point to install its dependencies, which basically is the vue route scheme, the vite for deployment and visualization in development and the json-server, which will simulate the database.
**`npm install`**

With the dependencies installed you should already be able to access it, first it is essential to **start the data server** with
**`npm run database`**

So finally **start the dev Vite project**
**`npm run dev`**