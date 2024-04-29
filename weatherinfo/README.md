# React + Vite - Weather Info Exercise

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## 1. Quick start

1. Create a new repositori on github. Clone it locally. (We just have node installed localy globally in our machine).

2. Execute: 

`npm create vite@latest`

```
✔ Project name: … weatherinfo
✔ Select a framework: › React
✔ Select a variant: › JavaScript

Scaffolding project in /Users/nana/ENTREGAS/Weather-Info-React-UseEffect/weatherinfo...

Done. Now run:

  cd weatherinfo
  npm install
  npm run dev
```
Then follow the console instrucctions. ¡¡¡ Pay attemtion: if you name the Vite project as your repository you could forget to execute the first command: "cd viteprojectname". Be sure you do it.

3. Execute cd + your project name: 

`cd todolist`

4. Execute: 
`npm i`

5. Execute: 
`npm run dev`````

6.Just now, by clicking on the link showed by the console, you can be your project working into the browser.

![first browser Vite image](./img_readme/03_1st_vite_screen.png)

7. Install NPM UUID to manage the keys of the list.(para manejar las keys de los diferentes elementos de la lista.)

`npm i uuid`

8. We will also install this extension to see the components on the browser: 

React Developer Tools
5.1.0 (4/15/2024)

9. Install this framework to create automatically the structure of component folders

`npm i create-react-component-folder`

## Instructions: WEATHER INFO

### We will practice useEffect and asyncrony in React

1.[ ] Un Componente WeatherList que recorra una lista de items con la información del pronóstico extendido de los próximos días.
2.[ ] Un Componente WeatherCard que contenga la información meteorológica de las próximas horas ese día (horario, temperatura, estado del tiempo (ej: clear, clouds, rain))
3.[ ] Un formulario con input + botón para buscar una ciudad en concreto.

### Flujo de esta vista:

1.[ ] En esta vista se mostrará por defecto el pronóstico extendido de Madrid. 

2.[ ] Al introducir una nueva ciudad en el input de tipo texto y hacer click en el botón, la información se actualizará con los datos correspondientes a la ciudad buscada.

3.[ ] EXTRA 1: Agregar al componente una imágen que ilustre el estado del tiempo de cada día.

4.[ ] EXTRA 2: En la primera carga de datos de esta vista, reemplazar Madrid por la geolocalización actual del usuario.

 