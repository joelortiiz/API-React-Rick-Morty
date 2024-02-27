
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from "./Layout.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import "boostrap/dist/css/boostrap.min.css"

import Home from './components/Home.jsx'
import Actores from './components/Actores.jsx'
import Episodios from './components/Episodios.jsx'
import EpisodioDetalle from './components/EpisodioDetalle.jsx'

//import Error404 from './components/Error404.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
   
    <Route path='/' element={<Layout/>}>

    <Route index element={<Home/>} />
    <Route path='actores' element={<Actores/>} />
    <Route path='episodios' element={<Episodios/>} >
        <Route path=':id' element={<EpisodioDetalle/>} />
    </Route>

    </Route>

    </Routes>


    </BrowserRouter>
)
