const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    const name = props.name;
    const content = props.content;

    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img 
                    style={styles.image} 
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{name}</span>
                <span style={styles.commentText}>{content}</span>
            </div>
        </div>
    )
}

export default Comment;