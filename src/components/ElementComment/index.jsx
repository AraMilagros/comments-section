import estilos from './estilos.module.css';
import Imagen from '../Imagen';
import { useState } from 'react';
import { useAppContext } from '../../context/ContextComments';


export default function index(props) {

    const [bandera, setBandera] = useState(true);
    const { userActual, likeDislike, commentsList } = useAppContext();

    const likes = (action) => {
        if(bandera){
            if(props.type == 'comment'){
                likeDislike(commentsList, props.comment.parentId, action, props.type);
            }else{
                likeDislike(commentsList, props.comment.idReply, action, props.type)
            }
        }
        setBandera(false);
    }

    return (
        // El siguiente fragmento de codigo se encarga de mostrar lso datos de los comentarios
        <div className={estilos.comment}>
            {/* seccion que muestra los likes recibidos del comentario
                NOTA: falta funcionalidad para poder aumentar o disminuir. 
                    Pero también controlar que sólo se pueda permitir aumentar/disminuir sólo una vez */}
            <div className={estilos.contadorLikes}>
                <button onClick={()=>likes('like')}>+</button>
                <span>{props.comment.likes}</span>
                <button onClick={()=>likes('dislike')}>-</button>
            </div>
            {/* Seccion donde se muestra la foto del usuario que comentó, al igual que su username y el tiempo pasado en que creo el comentario */}
            <div className={estilos.header}>
                {/* componente creado para manejar las img de las fotos de perfil */}
                {<Imagen nombre={props.comment.username} />}
                <span className={estilos.username}>{props.comment.username}</span>
                <span className={estilos.time}>{props.comment.time}</span>
            </div>
            {/* Sección donde se muestra el mensaje */}
            <div className={estilos.bodyComment}>
                <p>{props.comment.text}</p>
            </div>
            {/* Btn que permite replicar al comentario */}
            <div className={estilos.reply} onClick={() => props.onClickReply(props.comment.username)}>
                {props.comment.username === userActual ? '↪ Reply' : userActual}
            </div>
        </div>
    )
}