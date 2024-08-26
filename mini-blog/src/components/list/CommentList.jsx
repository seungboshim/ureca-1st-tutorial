import CommentListItem from "./CommentListItem";

function CommentList(props) {
    const {comments, handleDelete} = props;

    return (
        <div>
            {comments && comments.map((comment) => {
                return (
                    <CommentListItem
                        key={comment.id} 
                        id={comment.id}
                        content={comment.content} 
                        isLast={comment.id === comments[comments.length-1].id}
                        handleDelete={() => handleDelete(comment.id)}
                    ></CommentListItem>
                )
            })}
        </div>
    )
}

export default CommentList;