import estilos from './estilos.module.css';
import ItemComment from '../../components/ItemComment';
import { useAppContext } from '../../context/ContextComments';
import Reply from '../../components/Reply';
export default function index(){
    const {comments, userActual} = useAppContext();

    return(
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
            <Reply username={userActual} type={"comment"}/>
        </div>
    )
}