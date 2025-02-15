import estilos from './estilos.module.css';
import data from './data.json';
import ItemComment from '../../components/ItemComment';

export default function index(){
    return(
        <div className={estilos.contenedor}>
            {data.map((item, id)=>{
                return(
                    <ItemComment key={Math.random()}
                        likes={item.likes}
                        imgperfil={item.imgperfil}
                        username={item.username}
                        time={item.time}
                        text={item.text}
                        replies={item.replies}
                    />
                )
            })}
        </div>
    )
}