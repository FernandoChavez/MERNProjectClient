import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';



const Proyecto = ({proyecto}) => {
    // Obtener el state del formulario
    //Aqui podemos consumir lo del formulario false dentro de este componente sin necesidad de pasarlo por props
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => proyectoActual(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>

    );
}

export default Proyecto;