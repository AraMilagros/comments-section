import estilos from './estilos.module.css';
import ItemComment from '../../components/ItemComment';
import { useAppContext } from '../../context/ContextComments';
import Reply from '../../components/Reply';
export default function index(){
    // const desde contexto comment. 
        // comments es la lista basica que se muestra 
        // userActual simula el usuario que está logeado actualmente para poder comentar
    const {comments, userActual} = useAppContext();

    return(
        // usuando la lista basica de comentarios, pasada desde el contexto,
        // se mapeara para pasar sus atributos a otro componente encargado de estructurar visualmente los comentarios
        <div className={estilos.contenedor}>
            {comments.map((item, id)=>{
                return(
                    <ItemComment key={Math.random()}
                        parentId={item.parentId}
                        likes={item.likes}
                        imgperfil={item.imgperfil}
                        username={item.username}
                        time={item.time}
                        text={item.text}
                        replies={item.replies}
                    />
                )
            })}
            {/* Reply es otro componente que se muestra al usuario actual en caso de querer añadir un nuevo comentario
                el componente Reply tambien se utiliza para las replicas a los comentarios ya existentes por lo que tambien 
                se envia un props "type" para distinguir si es un comentario nuevo o un reply a un comentario ya existente
                el props de username lo envio para poder mostrar la imagen del usuario que va a comentar
            */}
            <Reply username={userActual} type={"comment"}/>
        </div>
    )
}