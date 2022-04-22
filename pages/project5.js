import Layaout from "../components/Layout";
import Close from "../components/Close";

const Project5 = () => (
    <Layaout>
        <div className="row py-5">
            <div className="col-md-12">
                <div className="card border-info">
                    <div className="card-body py-5" style={{ background: `#7FCFDF` }}>
                        <Close />
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="card bg-light border-info mb-3">
                                    <div className="card-body text-info">
                                        <h1 className="card-title text-center py-4">
                                            <strong>Predicción del abandono o estadía de los clientes de un banco</strong>
                                        </h1>
                                        <h5>
                                            Los bancos y cajas siempre han sido un mercado que históricamente ha recibido gran número de quejas y reclamaciones.
                                            Un estudio publicado por CDC Software revela que las entidades bancarias pierden un 12% de sus clientes anualmente
                                            debido al desconocimiento de los motivos de insatisfacción de los mismos. La media de usuarios de banca descontentos es de un
                                            22%, de los que sólo un 4% reclama de manera formal ante el banco, mientras que el 18% restante permanecen como clientes insatisfechos
                                            que no llegan a comunicarse con la entidad pero que cargan la imagen de marca y el posicionamiento estratégico de la compañía en el
                                            mercado. Este descontento termina la paciencia de los usuarios hasta el punto de no retorno y abandonan el banco. Así pues, el 55% de
                                            estos clientes descontentos abandona la entidad y cuenta su mala experiencia a una media de 10 personas.
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <div className="card bg-light border-info mb-3">
                                    <div className="card-body text-info">
                                        <h3 className="card-title">
                                            <strong>Acerca del dataset utilizado:</strong>
                                        </h3>
                                        <h5> El dataset utilizado para este proyecto fue obtenido de los materiales proporcionados en el curso:
                                            "Machine Learning de A a la Z: R y Python para Data Science" el cual puede ser encontrado en:
                                            https://www.udemy.com/course/machinelearning-es/, utilizado unicamente con fines educativos y de
                                            aprendizaje, todos los derechos a sus respectivos autores.
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <div className="card bg-light border-info mb-3">
                                    <div className="card-body text-info">
                                        <h3 className="card-title">
                                            <strong>Actividades realizadas:</strong>
                                        </h3>
                                        <ul className="py-2">
                                            <li>
                                                <h5>Análisis y evaluación de los datos.</h5>
                                            </li>
                                            <li>
                                                <h5>Limpieza y preparación del dataset.</h5>
                                            </li>
                                            <li>
                                                <h5>Representación gráfica de algunos datos.</h5>
                                            </li>
                                            <li>
                                                <h5>Creación y entrenamiento del modelo utilizando bosques aleatorios, K-Nearest neighbors y árboles de decisión.</h5>
                                            </li>
                                            <li>
                                                <h5>Evaluación de los resultados obtenidos por cada modelo con el conjunto de datos de prueba.</h5>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <div className="card bg-light border-info mb-3">
                                    <div className="card-body text-info">
                                        <h3 className="card-title">
                                            <strong>Resultados obtenidos:</strong>
                                        </h3>
                                        <h5 className="py-2">
                                            Los diferentes modelos creados, fueron entrenados con el 75% de datos que contenía el dataset y posterior a ello se válido su funcionamiento,
                                            realizando una nueva predicción con el conjunto de datos de pruebas que conformaba el 25% restante del total de datos, lo cual brindo los
                                            siguientes resultados:
                                        </h5>
                                        <ul className="py-2">
                                            <li>
                                                <h4><strong>Bosques Aleatorios:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 95%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_BA_5.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            1811 casos de clientes que no abandonan el banco clasificados correctamente y 170 casos de clientes que no abandonan el banco
                                                            clasificados incorrectamente como clientes que si abandonan el banco.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            45 casos de clientes que si abandonan el banco clasificados incorrectamente como clientes que no abandonan el banco y 1956 casos
                                                            de clientes que si abandonan el banco clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 3767 casos y de forma errónea 215 casos de un total de 3982 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_BA_5.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>K-Nearest Neighbors:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 91%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_KNN_5.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            1679 casos de clientes que no abandonan el banco clasificados correctamente y 302 casos de clientes que no abandonan el banco
                                                            clasificados incorrectamente como clientes que si abandonan el banco.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            42 casos de clientes que si abandonan el banco clasificados incorrectamente como clientes que no abandonan el banco y 1959 casos
                                                            de clientes que si abandonan el banco clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 3638 casos y de forma errónea 344 casos de un total de 3982 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_KNN_5.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Árboles De Decisión:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 91%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_AD_5.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            1674 casos de clientes que no abandonan el banco clasificados correctamente y 307 casos de clientes que no abandonan el banco
                                                            clasificados incorrectamente como clientes que si abandonan el banco.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            37 casos de clientes que si abandonan el banco clasificados incorrectamente como clientes que no abandonan el banco y 1964 casos
                                                            de clientes que si abandonan el banco clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 3638 casos y de forma errónea 344 casos de un total de 3982 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_AD_5.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layaout>
)

export default Project5;