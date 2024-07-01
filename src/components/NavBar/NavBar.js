import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Mi BolsiTienda</h3>
            <div>
                <button>Inicio</button>
                <button>Tienda</button>
                <button>Blog</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar