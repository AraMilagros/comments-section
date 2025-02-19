import estilos from './estilos.module.css';
import Imagen from '../Imagen';
import { useAppContext } from '../../context/ContextComments';
import { useState } from 'react';

export default function index(props) {
    const { comments, addReply, addComment, userActual } = useAppContext();

    const [textReply, setTextReply] = useState(props.type == 'reply' ? `@${props.userReply} ` : '');

    return (
        <div className={estilos.container}>
            <div className={estilos.reply}>
                {<Imagen nombre={userActual} />}

                <textarea cols={10} rows={4} value={textReply} onChange={(e) => setTextReply(e.target.value)} placeholder={props.type == 'comment' ? 'Add comment...' : ''}></textarea>
                <button className={estilos.btnReply}>
                    {props.type == 'comment' ? 'SEND' : 'REPLY'}
                </button>
            </div>
        </div>
    )
}