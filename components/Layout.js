import Navbar from "./Navbar"

const Layaout = ({children}) =>(
    <div className="container">
        <Navbar/>
        <main className="container">

            {children}

        </main>
    </div>
)

export default Layaout;