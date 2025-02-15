import estilos from './estilos.module.css';
import Imagen from '../Imagen';
export default function index(props) {
    return (
        <div className={estilos.comment}>
            <div className={estilos.contadorLikes}>
                <button>+</button>
                <span>{props.likes}</span>
                <button>-</button>
            </div>
            <div className={estilos.header}>
                {<Imagen nombre={props.username} />}
                <span className={estilos.username}>{props.username}</span>
                <span className={estilos.time}>{props.time}</span>
            </div>
            <div className={estilos.bodyComment}>
                <p>{props.text}</p>
            </div>
            <div className={estilos.reply} onClick={() => props.onClickReply()}>
                ↪ Reply
            </div>
        </div>
    )
}