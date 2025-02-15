import estilos from './estilos.module.css';

export default function index() {

    return (
        <div className={estilos.containerReply}>
            <div className={estilos.reply}>
                <img src="" alt="img-perfil"/>

                <textarea cols={10} rows={4}></textarea>
                <button className={estilos.btnReply}>REPLY</button>
            </div>
        </div>
    )
}