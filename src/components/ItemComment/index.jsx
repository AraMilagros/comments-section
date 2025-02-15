
import estilos from './estilos.module.css';
import Imagen from '../Imagen';
import { useState } from 'react';
import ReplyComment from '../Reply';

export default function index(props) {

  const [reply, setReply] = useState(false);

  const replyComment = () => {
    console.log(reply)
    setReply(!reply);

  }

  return (
    <>
      <div className={estilos.containerComment}>
        <div className={estilos.comment}>
          <div className={estilos.contadorLikes}>
            <button>+</button>
            <span>{props.likes}</span>
            <button>-</button>
          </div>
          <div className={estilos.header}>
            {<Imagen nombre={props.username} />}
            <span className={estilos.username}>{props.username}</span>
            <span className={estilos.time}>{props.time}</span>
          </div>
          <div className={estilos.bodyComment}>
            <p>{props.text}</p>
          </div>
          <div className={estilos.reply} onClick={()=>replyComment()}>
            ↪ Reply
          </div>
        </div>
      </div>

      {
        reply ? <ReplyComment /> : ''
      }

      {
        props.replies.length > 0 &&
        props.replies.map((item, i) => {
          return (
            <div className={estilos.containerReply} key={Math.random()}>
              <div className={estilos.comment}>
                <div className={estilos.contadorLikes}>
                  <button>+</button>
                  <span>{item.likes}</span>
                  <button>-</button>
                </div>
                <div className={estilos.header}>
                  {<Imagen nombre={item.username} />}
                  <span className={estilos.username}>{item.username}</span>
                  <span className={estilos.time}>{item.time}</span>
                </div>
                <div className={estilos.bodyComment}>
                  <p>{item.reply}</p>
                </div>
                <div className={estilos.reply}>
                  ↪ Reply
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}