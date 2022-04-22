import Layaout from "../components/Layout";
import Close from "../components/Close";

const Project2 = () => (
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
                                            <strong>Clasificación de tumores en casos de cáncer de mama</strong>
                                        </h1>
                                        <h5>
                                            Según la organización mundial de la salud, el cáncer de mama es el tipo de cáncer más común, con mas de 2.2 millones
                                            de casos reportados en 2020, una de cada 12 mujeres padeceran de este tipo de cáncer a lo largo de su vida,
                                            esta enfermedad es una de las principales causas de muerte en mujeres, 685000 mujeres fallecieron en el año 2020 a causa
                                            de cáncer de mama.
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
                                            https://www.kaggle.com/datasets/yasserh/breast-cancer-dataset,
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
                                                <h5>Creación y entrenamiento del modelo utilizando regresión logística, bosques aleatorios, support vector machine, K-Nearest neighbors, árboles de decisión, kernel support vector machine y naive bayes.</h5>
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
                                                <h4><strong>Regresión Logística:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 99%:
                                                </h5>
                                                <h5 className="text-center">Matriz de confusión:</h5>
                                                <img src="matriz_RL_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            89 casos de tumores begninos clasificados correctamente y 1 caso de tumor begnino clasificado incorrectamente como
                                                            tumor maligno.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            1 caso de tumor maligno clasificado incorrectamente como tumor begnino y 87 casos de tumores malignos
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 176 casos y de forma errónea 2 casos de un total de 178 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-3 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_RL_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Bosques Aleatorios:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 98%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_BA_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            89 casos de tumores begninos clasificados correctamente y 1 caso de tumor begnino clasificado incorrectamente como
                                                            tumor maligno.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            2 casos de tumores malignos clasificados incorrectamente como tumores begninos y 86 casos de tumores malignos
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 175 casos y de forma errónea 3 casos de un total de 178 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_BA_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Support Vector Machine:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 98%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_SVM_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            88 casos de tumores begninos clasificados correctamente y 2 casos de tumores begninos clasificados incorrectamente como
                                                            tumor maligno.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            1 caso de tumor maligno clasificado incorrectamente como tumor begnino y 87 casos de tumores malignos
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 175 casos y de forma errónea 3 casos de un total de 178 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_SVM_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>K-Nearest Neighbors:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 97%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_KNN_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            85 casos de tumores begninos clasificados correctamente y 5 casos de tumores begninos clasificados incorrectamente como
                                                            tumores malignos.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            0 casos de tumores malignos clasificados incorrectamente como tumores begninos y 88 casos de tumores malignos
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 173 casos y de forma errónea 5 casos de un total de 178 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_KNN_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Árboles De Decisión:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 95%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_AD_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            86 casos de tumores begninos clasificados correctamente y 4 casos de tumores begninos clasificados incorrectamente como
                                                            tumores malignos.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            5 casos de tumores malignos clasificados incorrectamente como tumores begninos y 83 casos de tumores malignos
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 169 casos y de forma errónea 9 casos de un total de 178 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_AD_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>kernel Support Vector Machine:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 98%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_KSVM_2.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            87 casos de tumores begninos clasificados correctamente y 3 caso de tumor begnino clasificado incorrectamente como
                                                            tumor maligno.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            1 casos de tumores malignos clasificados incorrectamente como tumores begninos y 87 casos de tumores malignos
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 174 casos y de forma errónea 4 casos de un total de 178 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_KSVM_2.png" className="img-fluid rounded-start mx-auto d-block" />
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

export default Project2;