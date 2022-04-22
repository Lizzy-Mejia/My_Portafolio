import { skills, abouts } from "../data/profile";

const About = () => (
    <div className="row py-4">
        <div className="col-sm-7">
            <div className="card bg-info border-info mb-3">
                <div className="card-body text-white py-3">
                    <h1 className="fw-bold text-center py-2">Acerca de mi 👧🏻</h1>
                    <ul>
                        {
                            abouts.map((about) => (
                                <li key={about.id}>
                                    <div className="py-3">
                                        <h4>{about.desc}</h4>
                                    </div>
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-sm-5">
            <div className="card border-info mb-3">
                <div className="card-body text-info py-4">
                    <h1 className="fw-bold text-center">Skills 🛠️</h1>
                    {
                        skills.map((skill) => (
                            <div className="py-2" key={skill.id}>
                                <h6>{skill.nombre}</h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: `${skill.porcentaje}%` }}></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
)

export default About;