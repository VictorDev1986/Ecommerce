# Ecommerce

## Índice

1. [Introducción](#introducción)
2. [Descripción General](#descripción-general)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Instalación y Configuración](#instalación-y-configuración)
    - [Requisitos Previos](#requisitos-previos)
    - [Clonación del Repositorio](#clonación-del-repositorio)
    - [Instalación de Dependencias](#instalación-de-dependencias)
    - [Configuración de TailwindCSS](#Configuración-de-TailwindCSS)
    - [Ejecución de la Aplicación](#ejecución-de-la-aplicación)
    - [Configuración de React Router](#Configuración-de-React-Router)
6. [Componentes Principales](#componentes-principales)
7. [Consideraciones Finales](#consideraciones-finales)
8. [Recursos Adicionales](#recursos-adicionales)

---

## Introducción

Esta documentación describe el proceso de creación de un E-commerce utilizando React para el frontend, TailwindCSS para el diseño, y React Router para el manejo de rutas. Se consume una API externa de Platzi para mostrar los productos disponibles.

## Descripción General

El E-commerce permite a los usuarios explorar una lista de productos, ver detalles de cada uno y realizar simulaciones de compra. Es un proyecto ideal para practicar habilidades de frontend y aprender a consumir APIs externas.


## Tecnologías Utilizadas

**React:** Librería de JavaScript para construir interfaces de usuario.
**TailwindCSS:** Framework de CSS para estilos rápidos y responsivos.
**React Router:** Manejo de rutas en aplicaciones React.
**Axios:** Cliente HTTP para consumir APIs.
**API de Platzi:** Fuente de datos para los productos.

## Estructura del Proyecto

```
ecommerce/
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductDetails.jsx
│   ├── pages/                  # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   └── NotFound.jsx
│   ├── api/                    # Configuración de la API
│   │   └── platziApi.js
│   ├── App.jsx                 # Componente principal
│   ├── index.css               # Estilos principales
│   ├── main.jsx                # Punto de entrada de la aplicación
│   └── tailwind.config.js      # Configuración de TailwindCSS
├── public/                     # Archivos estáticos
├── package.json                # Dependencias del proyecto
├── package-lock.json           # Archivo de bloqueo de npm
└── README.md                   # Documentación del proyecto



```

## Instalación y Configuración

### Requisitos Previos

- **Node.js** (versión 14 o superior)
- **npm** 

### Clonación del Repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/VictorDev1986/Ecommerce.git
cd Ecommerce
```

### Instalación de Dependencias

Instala las dependencias del proyecto:

```bash
npm install

```
### Configuración de TailwindCSS

Instalación de Tailwind CSS:

```bash
npm install -D tailwindcss
npx tailwindcss init

```

Configuración del archivo tailwind.config.js:

En el archivo tailwind.config.js, especifica la ubicación de tus archivos para TailwindCSS:

```bash
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


```
Configuración en el archivo CSS:

Crea o ajusta un archivo CSS principal en public/css/styles.css e incluye las directivas de Tailwind:

```bash
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

```


### Ejecución de la Aplicación

Inicia la aplicación en modo de desarrollo:

```bash

  npm run dev

```
La aplicación estará disponible en `http://localhost:3000`. o live server


### Configuración de React Router

```bash

  npm install react-router-dom

```

Configura rutas en index.jsx:

```bash

import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home />, },
        { path: '/MyOrder', element: <MyOrder />, },
        { path: '/MyOrders', element: <MyOrders />, },
        { path: '/MyAccount', element: <MyAccount />, },
        { path: '*', element: <NotFound />, },
        { path: '/Signin', element: <Signin />, },
    ])

    return routes
}

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
            <Navbar />
        </BrowserRouter>
    )
}

export default App


```

## Componente Principal

- **Navbar:** Barra de navegación con enlaces a secciones de la página.

## Consumo de Api 

Este código utiliza React para consumir datos de la API pública de Platzi (https://api.escuelajs.co/api/v1/products). Los datos obtenidos son una lista de productos, que se muestran en una cuadrícula utilizando un componente llamado Card.

***Estructura del Código**

El componente principal es Home, que realiza las siguientes tareas:

Inicializa un estado llamado items para almacenar los datos de la API.
Usa useEffect para realizar una solicitud HTTP a la API cuando se monta el componente.
Renderiza los datos obtenidos en un diseño tipo cuadrícula.

```bash

import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {

    const [items, setItems] = useState(null); 

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    return (
        <Layout>

            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
                {
                    items?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                }

            </div>
        </Layout>
    );
}

export default Home;

```



## Consideraciones Finales





## Recursos Adicionales

- **Documentación de tailwindcss**: [https://tailwindcss.com/](https://tailwindcss.com/)
- **Documentación de React**: [https://es.react.dev/](https://es.react.dev/)

---

**Nota**: Esta documentación se centra exclusivamente en la aplicación frontend desarrollada con Reactjs y tailwindcss.
