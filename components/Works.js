import Link from 'next/link'
import { proyectos } from "../data/profile";

const Works = () => (
    <div className="row py-1">
        <div className="col-md-12">
            <div className="card border-info mb-3">
                <div className="card-body py-5" style={{ background: `#7FCFDF` }}>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="fw-bold py-2 text-center text-white">Portafolio 📊</h1>
                        </div>
                        {
                            proyectos.map((proyecto) => (
                                <div className="col-md-4 p-3" key={proyecto.id}>
                                    <div className="card border-info mb-3 h-100">
                                        <img src={`${proyecto.imagen}`} className="card-img-top" alt="" width="304" height="200" />
                                        <div className="card-body text-center h-50">
                                            <h5 className="card-title text-info">{proyecto.nombre}</h5>
                                            <div className="d-grid gap-2 d-md-flex justify-content-center py-2">
                                                <Link href={`${proyecto.linkProyect}`}>
                                                    <a className="btn btn-info fw-bold">About</a>
                                                </Link>
                                                <Link href={`${proyecto.linkGithub}`}>
                                                    <a className="btn btn-info fw-bold" data-bs-dismiss="modal">
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