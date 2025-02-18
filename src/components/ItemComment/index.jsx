
import estilos from './estilos.module.css';
import { useState } from 'react';
import ReplyComment from '../Reply';
import ElementComment from '../ElementComment';
import { useAppContext } from '../../context/ContextComments';

export default function index(props) {

  const [userReply, setUserReply] = useState();
  const { userActual, commentsList } = useAppContext();
  // estado para mostrar o no el componente Reply
  // es decir, en caso de que el usuario quiera replicar un comentario se cambiará el estado a true
  // y se mostrará el componente como se muestra en la linea del código al final de todo
  const [reply, setReply] = useState(false);

  // function encargada de cambiar el estado del usestate 
  const replyComment = (username) => {
    setUserReply(username)
    setReply(!reply);

  }

  return (
    <>

      {commentsList.map(comment => (
        <>
          <div className={estilos.containerComment} >
            <ElementComment {...comment} />
          </div>

          {comment.replies?.length > 0 && (
            comment.replies.map(reply => (
              <div className={estilos.containerReply}>
                <ElementComment {...reply}/>
              </div>
            ))
          ) }
        </>

      ))
      }


      {reply ? <ReplyComment username={userActual} id={props.parentId} type={"reply"} userReply={userReply} /> : ''}
    </>
  )
}