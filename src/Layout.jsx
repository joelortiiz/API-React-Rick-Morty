import { Link, Outlet  } from 'react-router-dom'
const Layout =()=> {
    return (
        <>
        <nav>
            <ul className='nav'>

                <li><Link className='nav-item' to="/">Home</Link></li>
                <li><Link className='nav-item' to="/actores">Actores</Link></li>
                <li><Link className='nav-item' to="/episodios">Episodes</Link></li>
            </ul>
        </nav>
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default Layout