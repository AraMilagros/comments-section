import estilos from './estilos.module.css';
import Imagen from '../Imagen';
import { useAppContext } from '../../context/ContextComments';
import { useState } from 'react';

export default function index(props) {
    const { commentsList, addReply, addComment, userActual } = useAppContext();

    const [textReply, setTextReply] = useState(props.type == 'reply' ? `@${props.userReply} ` : '');

    const replyComment = (type) => {
        if(type == 'comment'){
            addComment(commentsList, textReply, userActual, userActual, type);
            // Aqui se llama una funcion que se paso por props para limpiar el txt 
        }else{
            // aqui cambiar el 2 por el parentId del comment que se hizo reply
            addReply(2, textReply, userActual, userActual);
            // luego cambiar el bool del reply para que desaparezca el componente reply 
        }
    }
    return (
        <div className={estilos.container}>
            <div className={estilos.reply}>
                {<Imagen nombre={userActual} />}

                <textarea cols={10} rows={4} value={textReply} onChange={(e) => setTextReply(e.target.value)} placeholder={props.type == 'comment' ? 'Add comment...' : ''}></textarea>
                <button className={estilos.btnReply}
                    onClick={props.type == 'comment' ? ()=>addComment(commentsList, textReply, userActual, userActual, props.type ) : ()=>addReply(2, textReply, userActual, userActual)}>
                    {props.type == 'comment' ? 'SEND' : 'REPLY'}
                </button>
            </div>
        </div>
    )
}