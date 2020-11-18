import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';




const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño de Sitio web'},
        {id: 4, nombre: 'MERN'}
    ]

    const initialState = {
        proyectos : [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    // useReducer es como si usaras useState. Te regresa el state y la funcion del dispatch
    // useReducer es un hook que realiza lo mismo que el reducer de REDUX
    const [state, dispatch] = useReducer(proyectoReducer, initialState)


    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        // Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload:proyecto
        })
    }

    // Validar formulario por error
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //Eliminar proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    //Recomendacion: Pasa los componentes en el value conforme los vayas declarando aqui en el state
    //Recomendacion 2: coloca los States primero y despues las funciones, dentro del value
    //props.children permite pasar los diferentes componentes hijos del Provider
    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;