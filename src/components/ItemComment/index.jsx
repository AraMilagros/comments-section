import foto from './avatars/image-amyrobson.png';

import estilos from './estilos.module.css';
const imagen = require.context('./avatars/', true);

function index(props) {

  return (
    <div className={estilos.containerComment}>
      <div className={estilos.comment}>
        <div className={estilos.contadorLikes}>
          <button>+</button>
          <span>{props.likes}</span>
          <button>-</button>
        </div>
        <div className={estilos.header}>
          <img src={imagen(props.imgperfil)} alt="perfil-foto" />
          <span>{props.username}</span>
          <span>{props.time}</span>
        </div>
        <div className={estilos.bodyComment}>
          <p>{props.text}</p>
        </div>
        <div className={estilos.reply}>
          ↪ Reply
        </div>
      </div>
    </div>
  )
}

export default index
