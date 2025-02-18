import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import data from './data.json';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [userActual, setUserActual] = useState('amyrobson');
    const [commentsList, setCommentsList] = useState(data);
    // const [commentsduplicado, setCommentsDuplicado] = useState(data);

    // useEffect(()=>{
    //     setCommentsList(commentsduplicado);
    // },[setCommentsDuplicado])

    const addComment = (comments, text, username, imgperfil, parentId = null) => {
        const newComment = {
            id: Math.random(),
            username,
            imgperfil,
            text,
            replies: [],
        };

        if(parentId === null){
            console.log('entro aqui')
            setCommentsList([...comments, newComment]);
        }
    };

    const addReply = (parentId, reply, username, imgperfil) => {
        console.log("reply add");
        console.log("id ",parentId,". text: ", reply);

        const newReply = {
            idReply: Math.random(),
            reply,
            username,
            imgperfil
        }

        setCommentsList((prev)=>
            prev.map((item)=>
                item.parentId == parentId 
                ? { ...item, replies: [...item.replies, newReply]}
                : item
            )
        )
    };

    const deleteComment = () => {
        console.log("eliminar comentario")
    }

    const deleteReply = () => {
        console.log("eliminar REPLY")
    }

    const editComment = () => {
        console.log("editar comentario")
    }

    const editReply = () => {
        console.log("editar REPLY")
    }

    return (
        <AppContext.Provider value={{ userActual, commentsList, addComment, addReply, deleteComment, deleteReply, editComment, editReply}}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.prototype = {
    children: PropTypes.node,
};

