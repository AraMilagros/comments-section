import estilos from './estilos.module.css';
import Imagen from '../Imagen';
export default function index(props) {
    return (
        // El siguiente fragmento de codigo se encarga de mostrar lso datos de los comentarios
        <div className={estilos.comment}>
            {/* seccion que muestra los likes recibidos del comentario
                NOTA: falta funcionalidad para poder aumentar o disminuir. 
                    Pero también controlar que sólo se pueda permitir aumentar/disminuir sólo una vez */}
            <div className={estilos.contadorLikes}>
                <button>+</button>
                <span>{props.likes}</span>
                <button>-</button>
            </div>
            {/* Seccion donde se muestra la foto del usuario que comentó, al igual que su username y el tiempo pasado en que creo el comentario */}
            <div className={estilos.header}>
                {/* componente creado para manejar las img de las fotos de perfil */}
                {<Imagen nombre={props.username} />}
                <span className={estilos.username}>{props.username}</span>
                <span className={estilos.time}>{props.time}</span>
            </div>
            {/* Sección donde se muestra el mensaje */}
            <div className={estilos.bodyComment}>
                <p>{props.text}</p>
            </div>
            {/* Btn que permite replicar al comentario */}
            <div className={estilos.reply} onClick={() => props.onClickReply(props.parentId)}>
                ↪ Reply
            </div>
        </div>
    )
}