import estilos from './estilos.module.css';
import ItemComment from '../../components/ItemComment';
import { useAppContext } from '../../context/ContextComments';
import Reply from '../../components/Reply';
export default function index(){
    const {commentsList, userActual} = useAppContext();

    return(
        <div className={estilos.contenedor}>

            {commentsList?.length > 0 && (
                <ItemComment />                
            )}

            {/* Reply es otro componente que se muestra al usuario actual en caso de querer añadir un nuevo comentario
                el componente Reply tambien se utiliza para las replicas a los comentarios ya existentes por lo que tambien 
                se envia un props "type" para distinguir si es un comentario nuevo o un reply a un comentario ya existente
                el props de username lo envio para poder mostrar la imagen del usuario que va a comentar
            */}
            <Reply username={userActual} type={"comment"} />
        </div>
    )
}