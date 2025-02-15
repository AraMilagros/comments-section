import amyrobson from './avatars/amyrobson.png';
import juliusomo from './avatars/juliusomo.png';
import maxblagun from './avatars/maxblagun.png';
import ramsesmiron from './avatars/ramsesmiron.png';
import estilos from './estilos.module.css';
export default function index(nombre) {
    const imagenes = {
        "amyrobson": amyrobson,
        "juliusomo": juliusomo,
        "maxblagun": maxblagun,
        "ramsesmiron": ramsesmiron
    }

    return (
        <img className={estilos.imagen} src={imagenes[nombre.nombre]} alt={nombre.nombre} />

    )
}