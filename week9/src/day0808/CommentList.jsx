import Comment from "./Comment";

function CommentList() {
    const comments = [
        {
            name: "승보",
            content: "ddd"
        },
        {
            name: "승봉",
            content: "ㅎㅎ"
        },
        {
            name: "싱승봉",
            content: "나락도락팔로우하세요"
        },
        {
            name: "승보봉",
            content: "팔로우하세요"
        }
    ]

    return (
        <div>
            {comments.map((comment, index) => (
                <Comment name={comment.name} content={comment.content} />
            ))}
        </div>
    )
}

export default CommentList;