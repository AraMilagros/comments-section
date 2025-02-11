import { createContext, useContext, useState } from "react";
// import PropTypes from "prop-types";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [comments, setComments] = useState([]);

    const addComment = (text, username, imgperfil, parentId = null) => {
        const newComment = {
            id: Math.random(),
            username,
            imgperfil,
            text,
            replies: [],
        };

        if(parentId === null){
            setComments([...comments, newComment]);
        }else{
            setComments(addReply(comments, parentId, newComment));
        }
    };

    const addReply = (commentsList, parentId, reply) => {
        console.log("reply add");
        return commentsList.map(comment => {
            if(comment.id === parentId){
                return {...comment, replies: [...comment.replies, reply]};
            }else if(comment.replies.length > 0){
                return {...comment, replies: addReply(comment.replies, parentId, reply)};
            }
            return comment;
        });
    };


    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

// AppProvider.prototype = {
//     children: PropTypes.node,
// };
