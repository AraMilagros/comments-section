
import estilos from './estilos.module.css';
import { useState } from 'react';
import ReplyComment from '../Reply';
import ElementComment from '../ElementComment';

export default function index(props) {

  const [reply, setReply] = useState(true);

  const replyComment = () => {
    console.log(reply)
    setReply(!reply);

  }

  return (
    <>
      <div className={estilos.containerComment}>
        <ElementComment key={Math.random()}
          likes={props.likes}
          username={props.username}
          time={props.time}
          text={props.text}
          onClickReply={replyComment}
        />
      </div>

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
      {/* {reply ? <ReplyComment /> : ''} */}
      {reply ?  <ReplyComment/> : ''}
    </>
  )
}