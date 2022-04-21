import Layaout from "../components/Layout";
import Close from "../components/Close";

const Project6 = () => (
    <Layaout>
        <div className="row py-5">
            <div className="col-md-12">
                <div className="card-body btn-info py-5">
                    <Close />
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="card bg-light border-info mb-3 py-2">
                                <div className="card-body text-info">
                                    <h1 className="card-title text-center py-4">
                                        <strong>Predicción de los clics realizados en un anuncio en redes sociales</strong>
                                    </h1>
                                    <h5>
                                        Según un estudio realizado por BI Intelligence con datos de EE. UU., las empresas de dicho país duplicarán la inversión
                                        en anuncios de redes sociales entre 2016 y 2021, pasando de 15.500 millones de dólares a más de 30.000, solo se paga por
                                        los clics de los usuarios, con lo que se ahorra el problema de las inversiones malgastadas, además de ellos, el coste
                                        por clic de este tipo de plataformas suele ser bastante económico. Los usuarios dedican una gran cantidad de tiempo a las
                                        redes sociales, y además las cifras de actividad no paran de crecer. Por eso, los anuncios en redes sociales son una manera
                                        óptima de llegar a ellos.
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
                                            <h5>Creación y entrenamiento del modelo utilizando bosques aleatorios, K-Nearest neighbors, árboles de decisión y kernel support vector machine.</h5>
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
                                                Como se puede observar en la matriz de confusión, el accuracy fue del 90%:
                                            </h5>
                                            <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                            <img src="matriz_BA_6.png" className="img-fluid rounded-start mx-auto d-block" />
                                            <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                            <ul className="p2 py-2">
                                                <li className="py-2">
                                                    <h5>
                                                        58 casos de personas que no realizaron clic en el anuncio clasificados correctamente y 7 casos de personas que no realizaron clic
                                                        en el anuncio clasificados incorrectamente como personas que si realizaron clic en el anuncio.
                                                    </h5>
                                                </li>
                                                <li className="py-2">
                                                    <h5>
                                                        6 casos de personas que si realizaron clic en el anuncio clasificados incorrectamente como personas que no realizaron clic en el anuncio
                                                        y 58 casos personas que si realizaron clic en el anuncio clasificados correctamente.
                                                    </h5>
                                                </li>
                                            </ul>
                                            <h5>Indentificando de forma acertada 116 casos y de forma errónea 13 casos de un total de 129 casos que contenia el dataset de prueba.</h5>
                                            <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                            <img src="grafica_BA_6.png" className="img-fluid rounded-start mx-auto d-block" />
                                        </li>
                                        <li>
                                            <h4 className="pt-3"><strong>K-Nearest Neighbors:</strong></h4>
                                            <h5 className="py-2">
                                                Como se puede observar en la matriz de confusión, el accuracy fue del 92%:
                                            </h5>
                                            <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                            <img src="matriz_KNN_6.png" className="img-fluid rounded-start mx-auto d-block" />
                                            <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                            <ul className="p2 py-2">
                                                <li className="py-2">
                                                    <h5>
                                                        62 casos de personas que no realizaron clic en el anuncio clasificados correctamente y 3 casos de personas que no realizaron clic
                                                        en el anuncio clasificados incorrectamente como personas que si realizaron clic en el anuncio.
                                                    </h5>
                                                </li>
                                                <li className="py-2">
                                                    <h5>
                                                        7 casos de personas que si realizaron clic en el anuncio clasificados incorrectamente como personas que no realizaron clic en el anuncio
                                                        y 57 casos personas que si realizaron clic en el anuncio clasificados correctamente.
                                                    </h5>
                                                </li>
                                            </ul>
                                            <h5>Indentificando de forma acertada 119 casos y de forma errónea 10 casos de un total de 129 casos que contenia el dataset de prueba.</h5>
                                            <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                            <img src="grafica_KNN_6.png" className="img-fluid rounded-start mx-auto d-block" />
                                        </li>
                                        <li>
                                            <h4 className="pt-3"><strong>Árboles De Decisión:</strong></h4>
                                            <h5 className="py-2">
                                                Como se puede observar en la matriz de confusión, el accuracy fue del 91%:
                                            </h5>
                                            <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                            <img src="matriz_AD_6.png" className="img-fluid rounded-start mx-auto d-block" />
                                            <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                            <ul className="p2 py-2">
                                                <li className="py-2">
                                                    <h5>
                                                        62 casos de personas que no realizaron clic en el anuncio clasificados correctamente y 3 casos de personas que no realizaron clic
                                                        en el anuncio clasificados incorrectamente como personas que si realizaron clic en el anuncio.
                                                    </h5>
                                                </li>
                                                <li className="py-2">
                                                    <h5>
                                                        9 casos de personas que si realizaron clic en el anuncio clasificados incorrectamente como personas que no realizaron clic en el anuncio
                                                        y 55 casos personas que si realizaron clic en el anuncio clasificados correctamente.
                                                    </h5>
                                                </li>
                                            </ul>
                                            <h5>Indentificando de forma acertada 117 casos y de forma errónea 12 casos de un total de 129 casos que contenia el dataset de prueba.</h5>
                                            <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                            <img src="grafica_AD_6.png" className="img-fluid rounded-start mx-auto d-block" />
                                        </li>
                                        <li>
                                            <h4 className="pt-3"><strong>Kernel Support Vector Machine:</strong></h4>
                                            <h5 className="py-2">
                                                Como se puede observar en la matriz de confusión, el accuracy fue del 91%:
                                            </h5>
                                            <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                            <img src="matriz_KSVM_6.png" className="img-fluid rounded-start mx-auto d-block" />
                                            <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                            <ul className="p2 py-2">
                                                <li className="py-2">
                                                    <h5>
                                                        60 casos de personas que no realizaron clic en el anuncio clasificados correctamente y 5 casos de personas que no realizaron clic
                                                        en el anuncio clasificados incorrectamente como personas que si realizaron clic en el anuncio.
                                                    </h5>
                                                </li>
                                                <li className="py-2">
                                                    <h5>
                                                        7 casos de personas que si realizaron clic en el anuncio clasificados incorrectamente como personas que no realizaron clic en el anuncio
                                                        y 57 casos personas que si realizaron clic en el anuncio clasificados correctamente.
                                                    </h5>
                                                </li>
                                            </ul>
                                            <h5>Indentificando de forma acertada 117 casos y de forma errónea 12 casos de un total de 129 casos que contenia el dataset de prueba.</h5>
                                            <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                            <img src="grafica_KSVM_6.png" className="img-fluid rounded-start mx-auto d-block" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layaout>
)

export default Project6;