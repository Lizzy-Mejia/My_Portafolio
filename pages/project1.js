import Close from "../components/Close";
import Layaout from "../components/Layout";

const Project1 = () => (
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
                                            <strong>Clasificación De Eventos Astrosismólogicos</strong>
                                        </h1>
                                        <h5>
                                            La sismología es utilizada para estudiar las propiedades de la materia estelar.
                                            La astrosismología es el único medio disponible para sondear el interior de las estrellas.
                                            Las tecnicas de astrosismología permiten estudiar la estructura interna, los procesos físicos
                                            y el estado evolutivo de las estrellas con la disposición de datos sismólogicos. La astrosismología
                                            posibilita la realización de deducciones sobre la estructura estelar independiente de los modelos.
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
                                        <h5> El dataset utilizado para este proyecto fue obtenido en:
                                            https://www.kaggle.com/datasets/fernandolima23/classification-in-asteroseismology,
                                            utilizado unicamente con fines educativos y de aprendizaje, todos los derechos a su respectivo autor.
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
                                                <h5>Creación y entrenamiento del modelo utilizando regresión logística, bosques aleatorios, support vector machine, K-Nearest neighbors y árboles de decisión.</h5>
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
                                            realizando una nueva predicción con el conjunto de datos de validación que conformaba el 25% restante del total de datos, lo cual brindo los
                                            siguientes resultados:
                                        </h5>
                                        <ul className="py-2">
                                            <li>
                                                <h4><strong>Regresión Logística:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 93%:
                                                </h5>
                                                <h5 className="text-center">Matriz de confusión:</h5>
                                                <img src="matriz_RL_1.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            166 casos de rama gigante roja clasificados correctamente y 4 casos de rama gigante roja clasificados incorrectamente como
                                                            combustión de helio.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            21 casos de combustión de helio clasificados incorrectamente como rama gigante roja y 164 casos de combustión de helio
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 330 casos y de forma errónea 25 casos de un total de 355 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-3 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_RL_1.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Bosques Aleatorios:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 97%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_BA_1.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            164 casos de rama gigante roja clasificados correctamente y 6 casos de rama gigante roja clasificados incorrectamente como
                                                            combustión de helio.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            5 casos de combustión de helio clasificados incorrectamente como rama gigante roja y 180 casos de combustión de helio
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 344 casos y de forma errónea 11 casos de un total de 355 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_BA_1.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Support Vector Machine:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 97%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_SVM_1.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            162 casos de rama gigante roja clasificados correctamente y 8 casos de rama gigante roja clasificados incorrectamente como
                                                            combustión de helio.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            4 casos de combustión de helio clasificados incorrectamente como rama gigante roja y 181 casos de combustión de helio
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 343 casos y de forma errónea 12 casos de un total de 355 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_SVM_1.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>K-Nearest Neighbors:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 93%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_KNN_1.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            167 casos de rama gigante roja clasificados correctamente y 3 casos de rama gigante roja clasificados incorrectamente como
                                                            combustión de helio.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            8 casos de combustión de helio clasificados incorrectamente como rama gigante roja y 177 casos de combustión de helio
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 344 casos y de forma errónea 11 casos de un total de 355 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_KNN_1.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Árboles De Decisión:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 97%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_AD_1.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            164 casos de rama gigante roja clasificados correctamente y 6 casos de rama gigante roja clasificados incorrectamente como
                                                            combustión de helio.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            5 casos de combustión de helio clasificados incorrectamente como rama gigante roja y 180 casos de combustión de helio
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 344 casos y de forma errónea 11 casos de un total de 355 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_AD_1.png" className="img-fluid rounded-start mx-auto d-block" />
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
    </Layaout >
)

export default Project1;