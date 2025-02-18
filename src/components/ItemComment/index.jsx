
import estilos from './estilos.module.css';
import { useState } from 'react';
import ReplyComment from '../Reply';
import ElementComment from '../ElementComment';
import { useAppContext } from '../../context/ContextComments';

export default function index(props) {

  const {userActual} = useAppContext();
  // estado para mostrar o no el componente Reply
  // es decir, en caso de que el usuario quiera replicar un comentario se cambiará el estado a true
  // y se mostrará el componente como se muestra en la linea del código al final de todo
  const [reply, setReply] = useState(false);

  // function encargada de cambiar el estado del usestate 
  const replyComment = () => {
    setReply(!reply);

  }

  return (
    <>
    {/* este fragmento de codigo se encarga de mostrar todos los comentarios "bases", es decir que no se encargara de las replicas,
        es decir las respuestas a comentarios
      
        Como los comentarios "bases" y las reply tienen pequeñas diferencias visuales como el ancho de su contenedor, pero
        todo lo demás: ubicación de foto de perfil, btn de reply, input, es igual, cree un nuevo componente que se encargue de todo lo demas que es igual

        Entonces, ElementComment (que se encarga de mostrar foto de perfil, texto, fecha de tiempo del comentario, etc) está dentro de un div
        que segun sea un comentario o un reply, tiene una determinada clase.

        Luego de pasar todos los datos a mostrar en el comentario, también se pasa como props la funcion 'replyComment'
     */}
      <div className={estilos.containerComment} >
        <ElementComment key={Math.random()}
          likes={props.likes}
          username={props.username}
          time={props.time}
          text={props.text}
          onClickReply={replyComment}
          parentId={props.parentId}
        />
      </div>

{      /* Ahora, el siguiente fragmento de codigo se encargará de mostrar las replicas que tenga, o no, los comentarios "bases"
          
          Antes de intentar recorrer una lista con los reply, se asegura que haya elementos qué recorrer
          
          Entonces, se vuelve a utilizar el componente ElementComment como se hizo anteriormente,
          unicamente cambia la clase del div en el que está anidado
        */}
      {
        props.replies.length > 0 &&
        props.replies.map((item, id)=>{
          return(
            <div className={estilos.containerReply}>
              <ElementComment key={Math.random()}
                likes={item.likes}
                username={item.username}
                time={item.time}
                text={item.reply}
                onClickReply={replyComment}
              />
            </div>
          )
        })
      }
      {/* Esta ultima parte se encarga de mostrar el elemento encargado de capturar otro reply
          A diferencia de como fue llamado en el componente de Comment, en esta ocasión se pasará 'reply' como valor de type
          Estos valores permitirán mostrar los mensajes adecuados para cada ocasión:
            por ejemplo cuando se trata de un comentario "base" en el input se debería mostrar un placeholder con el msj "Add comment..."
            mientras que en caso de ser un reply de un comentario existente, en vez de un placeholder, se mostrar el input con un valor
            determinado, por ejemplo con el "@nombreuser" representado el nombre del usuario del comentario a replicar
       */}
      {reply ? <ReplyComment username={userActual} id={props.parentId} type={"reply"} userReply={props.username} /> : ''}
    </>
  )
}