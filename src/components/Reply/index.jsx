import estilos from './estilos.module.css';
import foto from '../Comment/avatars/image-amyrobson.png';
function index() {

    return (
        <div className={estilos.containerReply}>
            <div className={estilos.reply}>
                <img src={foto} alt="img-perfil"/>

                <textarea cols={10} rows={4}></textarea>
                <button className={estilos.btnReply}>REPLY</button>
            </div>
        </div>
    )
}

export default index
