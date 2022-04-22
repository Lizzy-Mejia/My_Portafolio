import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{ background: `#7FCFDF` }}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="logo5.png" width="95" height="95" />
            </a>
            <h5 className="text-center text-white fw-bold" >
                El fracaso es simplemente una nueva oportunidad de empezar de nuevo, esta vez de forma más inteligente. #Henry Ford.
            </h5>
        </div>
    </nav>
)

export default Navbar;