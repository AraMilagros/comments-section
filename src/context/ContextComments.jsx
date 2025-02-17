import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import data from './data.json';
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [userActual, setUserActual] = useState('amyrobson');
    const [comments, setComments] = useState(data);
    const [commentsduplicado, setCommentsDuplicado] = useState(data);

    useEffect(()=>{
        setComments(commentsduplicado);
    },[setCommentsDuplicado])

    const addComment = (commentsList, text, username, imgperfil, parentId = null) => {
        const newComment = {
            id: Math.random(),
            username,
            imgperfil,
            text,
            replies: [],
        };

        if(parentId === null){
            console.log('entro aqui')
            setComments([...commentsList, newComment]);
        }else{
            setComments(addReply(comments, parentId, newComment));
        }
        console.log(comments)
    };

    const addReply = (commentsList, parentId, reply) => {
        console.log("reply add");
        console.log("id ",parentId,". text: ", reply);
    };


    return (
        <AppContext.Provider value={{ userActual, comments, setComments, addComment, addReply }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.prototype = {
    children: PropTypes.node,
};

