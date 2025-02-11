import foto from './avatars/image-amyrobson.png';

import estilos from './estilos.module.css';

function index() {

    return (
      <div className={estilos.containerComment}>
        <div className={estilos.comment}>
          <div className={estilos.contadorLikes}>
            <button>+</button>
            <span>21</span>
            <button>-</button>
          </div>
          <div className={estilos.header}>
            <img src={foto} alt="perfil-foto" />
            <span>2 weeks ago</span>
          </div>
          <div className={estilos.bodyComment}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nesciunt! Vel fugiat ea ad, et pariatur, asperiores doloribus inventore dicta modi eos illum, animi rerum quasi. Illo dignissimos magni rerum.</p>
          </div>
          <div className={estilos.reply}>
            ↪ Reply
          </div>
        </div>
      </div>
    )
  }
  
  export default index
  