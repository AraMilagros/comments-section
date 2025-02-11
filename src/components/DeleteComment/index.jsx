import estilos from './estilos.module.css';

function index(){
    return (
        <div className={estilos.containerDelete}>

            <h2>Delete comment</h2>
            <p>Are you sure you want to delete this comment? This will remove the comment and can´t be undone.</p>
        
            <div className={estilos.btns}>
                <button>NO, CANCEL</button>
                <button>YES, DELETE</button>
            </div>
        </div>
    )
}
export default index