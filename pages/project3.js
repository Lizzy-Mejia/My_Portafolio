import Layaout from "../components/Layout";
import Close from "../components/Close";

const Project3 = () => (
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
                                            <strong>Clasificación de estrellas, galaxias y cuásares</strong>
                                        </h1>
                                        <h5>
                                            Las estrellas son cuerpos celestes gigantes, compuestos principalmente por hidrógeno y helio, que producen
                                            luz y calor desde sus arremolinadas fundiciones nucleares, asi como rayos ultravioleta, rayos X y otras formas
                                            de radiación. Una galaxia es un conjunto de estrellas, nubes de gas, planetas, polvo cósmico, materia oscura y energía
                                            unidas gravitatoriamente en una estructura más o menos definida, históricamente, las galaxias se han clasificado de
                                            acuerdo a su forma aparente. Un cuásar o quasar es una galaxia recién nacida o bien aquel fuente de energía que se
                                            presenta en el aguajero negro del centro de dichas galaxias recién nacidas, se caracterizan por ser una fuente astronómica
                                            de energía electromagnética que incluye radiofrecuencia y luz visible.
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
                                        <h5> El dataset utilizado para este proyecto fue obtenido en: federal. (enero de 2022). Conjunto de datos
                                            de clasificación estelar - SDSS17. Recuperado [marzo de 2022] de
                                            https://www.kaggle.com/datasets/fedesoriano/stellar-classification-dataset-sdss17,
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
                                                <h5>Creación y entrenamiento del modelo utilizando: regresión logística, bosques aleatorios, support vector machine, K-Nearest neighbors y árboles de decisión.</h5>
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
                                            Los diferentes modelos creados, fueron entrenados con el 75% de datos que contenía el dataset, posterior a ello se válido su funcionamiento,
                                            realizando una nueva predicción con el conjunto de datos de prueba, que conformaba el 25% restante del total de datos, lo cual brindo los
                                            siguientes resultados:
                                        </h5>
                                        <ul className="py-2">
                                            <li>
                                                <h4><strong>Regresión Logística:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 95%:
                                                </h5>
                                                <h5 className="text-center">Matriz de confusión</h5>
                                                <img src="matriz_RL_3.png" className="img-fluid rounded-start mx-auto d-block py-3" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            13038 casos de galaxias clasificadas correctamente, 1097 casos de galaxias clasificadas incorrectamente como objeto cuásar y 557 casos de galaxias
                                                            clasificadas incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            675 casos de objeto cuásar clasificados incorrectamente como galaxias, 14220 casos de objeto cuásar clasificados correctamente y 6 casos de
                                                            objeto cuásar clasificados incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li>
                                                        <h5>
                                                            64 casos de estrellas clasificadas incorrectamente como galaxias, 0 casos de estrellas clasificadas incorrectamente como objeto cuásar y 14775 casos
                                                            de estrellas clasificadas correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>
                                                    Indentificando de forma acertada 42033 casos y de forma errónea 2399 casos de un total de 44432 casos que contenia el dataset de prueba.
                                                </h5>
                                                <h5 className="py-3 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_RL_3.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Bosques Aleatorios:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 98%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión</h5>
                                                <img src="matriz_BA_3.png" className="img-fluid rounded-start mx-auto d-block py-3" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            14380 casos de galaxias clasificadas correctamente, 254 casos de galaxias clasificadas incorrectamente como objeto cuásar y 58 casos de galaxias
                                                            clasificadas incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            380 casos de objeto cuásar clasificados incorrectamente como galaxias, 14521 casos de objeto cuásar clasificados correctamente y 0 casos de
                                                            objeto cuásar clasificados incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li>
                                                        <h5>
                                                            3 casos de estrellas clasificadas incorrectamente como galaxias, 0 casos de estrellas clasificadas incorrectamente como objeto cuásar y 14836 casos
                                                            de estrellas clasificadas correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>
                                                    Indentificando de forma acertada 43737 casos y de forma errónea 695 casos de un total de 44432 casos que contenia el dataset de prueba.
                                                </h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_BA_3.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Support Vector Machine:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 96%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión</h5>
                                                <img src="matriz_SVM_3.png" className="img-fluid rounded-start mx-auto d-block py-3" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            14020 casos de galaxias clasificadas correctamente, 491 casos de galaxias clasificadas incorrectamente como objeto cuásar y 181 casos de galaxias
                                                            clasificadas incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            1037 casos de objeto cuásar clasificados incorrectamente como galaxias, 13862 casos de objeto cuásar clasificados correctamente y 2 casos de
                                                            objeto cuásar clasificados incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li>
                                                        <h5>
                                                            0 casos de estrellas clasificadas incorrectamente como galaxias, 0 casos de estrellas clasificadas incorrectamente como objeto cuásar y 14839 casos
                                                            de estrellas clasificadas correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>
                                                    Indentificando de forma acertada 42721 casos y de forma errónea 1711 casos de un total de 44432 casos que contenia el dataset de prueba.
                                                </h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_SVM_3.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>K-Nearest Neighbors:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 97%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión</h5>
                                                <img src="matriz_KNN_3.png" className="img-fluid rounded-start mx-auto d-block py-3"/>
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            13749 casos de galaxias clasificadas correctamente, 448 casos de galaxias clasificadas incorrectamente como objeto cuásar y 495 casos de galaxias
                                                            clasificadas incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            316 casos de objeto cuásar clasificados incorrectamente como galaxias, 14550 casos de objeto cuásar clasificados correctamente y 35 casos de
                                                            objeto cuásar clasificados incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li>
                                                        <h5>
                                                            189 casos de estrellas clasificadas incorrectamente como galaxias, 7 casos de estrellas clasificadas incorrectamente como objeto cuásar y 14643 casos
                                                            de estrellas clasificadas correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>
                                                    Indentificando de forma acertada 42942 casos y de forma errónea 1490 casos de un total de 44432 casos que contenia el dataset de prueba.
                                                </h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_KNN_3.png" className="img-fluid rounded-start mx-auto d-block"/>
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Árboles De Decisión:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 97%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión</h5>
                                                <img src="matriz_AD_3.png" className="img-fluid rounded-start mx-auto d-block py-3" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            14084 casos de galaxias clasificadas correctamente, 580 casos de galaxias clasificadas incorrectamente como objeto cuásar y 28 casos de galaxias
                                                            clasificadas incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            484 casos de objeto cuásar clasificados incorrectamente como galaxias, 14417 casos de objeto cuásar clasificados correctamente y 0 casos de
                                                            objeto cuásar clasificados incorrectamente como estrellas.
                                                        </h5>
                                                    </li>
                                                    <li>
                                                        <h5>
                                                            31 casos de estrellas clasificadas incorrectamente como galaxias, 0 casos de estrellas clasificadas incorrectamente como objeto cuásar y 14808 casos
                                                            de estrellas clasificadas correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>
                                                    Indentificando de forma acertada 43309 casos y de forma errónea 1123 casos de un total de 44432 casos que contenia el dataset de prueba.
                                                </h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_AD_3.png" className="img-fluid rounded-start mx-auto d-block" />
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

export default Project3;