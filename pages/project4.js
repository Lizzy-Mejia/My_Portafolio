import Layaout from "../components/Layout";
import Close from "../components/Close";

const Project4 = () => (
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
                                            <strong>Predicción de accidentes cerebrovasculares</strong>
                                        </h1>
                                        <h5>
                                            En los últimos años ACV se han posicionado entre las principales causas de muerte a nivel mundial, en el año 2000 representó
                                            un 31% de las muertes, en el año 2010 esa cifra subió al 38%, en el año 2019 estuvo en la segunda posición de las principales
                                            causas de muerte, siendo responsables de aproximadamente 6% del total de muertes mundiales, según estudios de la Organización
                                            Mundial de la Salud y es una tendencia que esta al alza. Este tipo de enfermedad se encuentra entre las 10 principales causas de
                                            muerte que representaron el 55% de los 55,4 millones de muertes en todo el mundo en el año 2019, según la OMS.
                                        </h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-10">
                                <div className="card bg-light border-info mb-3">
                                    <div className="card-body text-info">
                                        <h5>Según datos clínicos sobre pacientes que sufrieron un accidente cerebrovascular, se desarrolló un modelo de clasificación para predecir 
                                            si es probable que un paciente sufra o no un ACV, en función de los parámetros de entrada.
                                        </h5>
                                        <h5>El conjunto de datos contenía 5510 registros y 12 columnas, de las cuales nuestra variable objetivo es la columna: “stroke”, las 11 columnas 
                                            restantes son las características que en teoría influyen sobre la variable de salida. El dataset utilizado para este proyecto fue obtenido en:
                                            https://www.kaggle.com/datasets/fedesoriano/stroke-prediction-dataset, utilizado únicamente con fines de investigación y aprendizaje,
                                            todos los derechos a su respectivo autor.
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
                                                <h5>Creación y entrenamiento de diferentes modelos.</h5>
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
                                            Las diferentes pruebas realizadas demostraron que los modelos se comportan mejor con variables numéricas continuas, así como la
                                            cantidad de datos con los que se realiza el entrenamiento de los mismos, si influye considerablemente sobre los resultados obtenidos,
                                            en la selección de las mejores características a través de Random Forest, los modelos brindaron buenos resultados utilizando únicamente 
                                            3 variables de entrada, las cuales fueron: edad, nivel de glucosa en la sangre y índice de masa corporal.
                                        </h5>
                                        <h5 className="py-2">
                                            Para la selección de los mejores modelos se utilizó el método de validación cruzada y como se puede observar en la siguiente imagen los 3
                                            mejores modelos fueron: KNeighbors con un accuracy del 93.15% y una desviación estándar de 1.12%, Decision Tree con un accuracy 94.03% y 
                                            una desviación estándar de 1.12% y Random Forest con un accuracy del 96.57% y una desviación estándar de 0.70%.
                                        </h5>
                                        <h5 className="py-2 text-center">Resultados de los Diferentes Modelos:</h5>
                                                <img src="Gráfica25-4.png" className="img-fluid rounded-start mx-auto d-block" />
                                        <h5 className="pt-5">
                                            A estos 3 modelos se les aplico el método GridSearchCV para la búsqueda de los mejores parámetros. Posterior a ello se realizó nuevamente 
                                            el entrenamiento de estos, utilizando validación cruzada y el modelo que brindo el mejor resultado fue Random Forest con un accuracy del 
                                            96.74% y una desviación estándar de 0.61%.
                                        </h5>
                                        <h5 className="py-2">
                                            En las pruebas del modelo final utilizando Random Forest, se obtuvo un accuracy del 97.11% para el conjunto de datos val_set. El reporte de 
                                            los resultados obtenidos para los casos de personas que no sufrieron una ACV fue el siguiente: la precisión fue del 97%, recall 97% y 
                                            f1-score 97%. Para los casos de personas que si sufrieron un ACV la precisión fue del 97%, recall del 97% y f1-score del 97%.
                                        </h5>
                                        <h5 className="py-2">
                                            En la matriz de confusión se puede observar que el modelo clasifico correctamente 942 casos de personas que no sufrieron un ACV y únicamente 29 
                                            casos fueron clasificados incorrectamente, para las personas que si sufrieron un ACV el modelo clasifico correctamente 944 casos y únicamente 27 
                                            fueron clasificados incorrectamente.
                                        </h5>
                                        <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="Matriz1-4.png" className="img-fluid rounded-start mx-auto d-block" />
                                        <h5 className="pt-5">
                                            Para el conjunto de datos test_set, el accuracy fue del 97.11%. El reporte de los resultados obtenidos para los casos de personas que no sufrieron
                                            una ACV fue el siguiente: la precisión fue del 96%, recall 98% y f1-score 97%. Para los casos de personas que si sufrieron un ACV la precisión fue 
                                            del 98%, recall del 96% y f1-score del 97%.
                                        </h5>
                                        <h5 className="py-2">
                                        En la matriz de confusión se puede observar que el modelo clasifico correctamente 952 casos de personas que no sufrieron un ACV y únicamente 17 casos 
                                        fueron clasificados incorrectamente, para las personas que si sufrieron un ACV el modelo clasifico correctamente 932 casos y únicamente 39 fueron clasificados
                                        incorrectamente.
                                        </h5>
                                        <h5 className="py-2 text-center">Matriz de confusión:</h5>
                                                <img src="Matriz2-4.png" className="img-fluid rounded-start mx-auto d-block" />
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