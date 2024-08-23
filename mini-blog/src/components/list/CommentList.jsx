import CommentListItem from "./CommentListItem";

function CommentList(props) {
    const {comments} = props;
    console.log(comments)

    const handleDelete = (commentId) => {
        const newComments = comments.filter((comment) => {
            return comment.id !== parseInt(commentId);
        });
        localStorage.setItem('comments', JSON.stringify(newComments));
        alert("삭제되었습니다.");
        window.location.reload();
    }

    return (
        <div>
            {comments && comments.map((comment) => {
                return (
                    <CommentListItem
                        key={comment.id} 
                        id={comment.id}
                        content={comment.content} 
                        isLast={comment.id === comments[comments.length-1].id}
                        handleDelete={handleDelete}
                    ></CommentListItem>
                )
            })}
        </div>
    )
}

export default CommentList;