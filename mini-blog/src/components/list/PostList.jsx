import PostListItem from "./PostListItem";

function PostList(props) {
    const {posts, onClickItem} = props;
    return (
        <div>
            {/* {posts.map((post) => (
                <PostListItem key={post.id} post={post}></PostListItem>
            ))} */}
            {posts.map((post) => {
                return (
                    <PostListItem 
                        key={post.id} 
                        post={post} 
                        onClick={() => onClickItem(post)}
                    ></PostListItem>
                )
            })}
        </div>
    )
}

export default PostList;