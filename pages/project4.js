import Layaout from "../components/Layout";
import Close from "../components/Close";

const Project4 = () => (
    <Layaout>
        <div className="row py-5">
            <div className="col-md-12">
                <div className="card border-info">
                    <div className="card-body btn-info py-5">
                        <Close />
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="card bg-light border-info mb-3">
                                    <div className="card-body text-info">
                                        <h1 className="card-title text-center py-4">
                                            <strong>Predicción de accidentes cerebrovasculares</strong>
                                        </h1>
                                        <h5>
                                            En los últimos años ACV se han posicionado entre las principales causas de muerte a nivel mundial, en el año 2000 representó
                                            un 31% de las muertes, en el año 2010 esa cifra subió al 38%, en el año 2019 estuvo en la segunda posición de las principales
                                            causas de muerte, siendo responsables de aproximadamente 6% del total de muertes mundiales, según estudios de la Organización
                                            Mundial de la Salud y es una tendencia que esta al alza. este tipo de enfermedad se encuntra entre las 10 principales causas de
                                            muerte que representaron el 55% de los 55,4 millones de muertes en todo el mundo en el año 2019, según la Organización Mundial
                                            de la salud.
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
                                            https://www.kaggle.com/datasets/fedesoriano/stroke-prediction-dataset,
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
                                                <h4 className="pt-3"><strong>Bosques Aleatorios:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 99%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_BA_4.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            1187 casos negativos de ACV clasificados correctamente y 29 casos negativos de ACV clasificados incorrectamente como casos
                                                            positivos de ACV.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            0 casos positivos de ACV clasificados incorrectamente como casos negativos de ACV y 1215 casos casos positivos de ACV
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 2402 casos y de forma errónea 29 casos de un total de 2431 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_BA_4.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>K-Nearest Neighbors:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 98%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_KNN_4.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            1157 casos negativos de ACV clasificados correctamente y 59 casos negativos de ACV clasificados incorrectamente como casos
                                                            positivos de ACV.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            0 casos positivos de ACV clasificados incorrectamente como casos negativos de ACV y 1215 casos casos positivos de ACV
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 2372 casos y de forma errónea 59 casos de un total de 2431 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_KNN_4.png" className="img-fluid rounded-start mx-auto d-block" />
                                            </li>
                                            <li>
                                                <h4 className="pt-3"><strong>Árboles De Decisión:</strong></h4>
                                                <h5 className="py-2">
                                                    Como se puede observar en la matriz de confusión, el accuracy fue del 97%:
                                                </h5>
                                                <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="matriz_AD_4.png" className="img-fluid rounded-start mx-auto d-block" />
                                                <h5 className="pt-3">En el mapa de calor de la misma se pueden vizualizar:</h5>
                                                <ul className="p2 py-2">
                                                    <li className="py-2">
                                                        <h5>
                                                            1150 casos negativos de ACV clasificados correctamente y 66 casos negativos de ACV clasificados incorrectamente como casos
                                                            positivos de ACV.
                                                        </h5>
                                                    </li>
                                                    <li className="py-2">
                                                        <h5>
                                                            0 casos positivos de ACV clasificados incorrectamente como casos negativos de ACV y 1215 casos casos positivos de ACV
                                                            clasificados correctamente.
                                                        </h5>
                                                    </li>
                                                </ul>
                                                <h5>Indentificando de forma acertada 2365 casos y de forma errónea 66 casos de un total de 2431 casos que contenia el dataset de prueba.</h5>
                                                <h5 className="py-2 text-center">Mapa de calor de la matriz de confusión:</h5>
                                                <img src="grafica_AD_4.png" className="img-fluid rounded-start mx-auto d-block" />
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

export default Project4;