import Link from 'next/link'
import { proyectos } from "../data/profile";

const Works = () => (
    <div className="row py-4">
        <div className="col-md-12">
            <div className="card border-info mb-3">
                <div className="card-body btn-info py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="py-2 text-center text-white"><strong>Portafolio 📊</strong></h1>
                        </div>
                        {
                            proyectos.map((proyecto) => (
                                <div className="col-md-4 py-3" key={proyecto.id}>
                                    <div className="card btn-light mb-3">
                                        <img src={`${proyecto.imagen}`} className="card-img-top" alt="" width="304" height="200" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-info">{proyecto.nombre}</h5>
                                            <div className="d-grid gap-2 d-md-flex justify-content-center">
                                                <Link href={`${proyecto.linkProyect}`}>
                                                    <a className="btn btn-info">About</a>
                                                </Link>
                                                <Link href={`${proyecto.linkGithub}`}>
                                                    <a className="btn btn-info" data-bs-dismiss="modal">
                                                        <img src={`${proyecto.logo}`} alt="GitHub" width="20" height="20" /> Repositorio
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Works;