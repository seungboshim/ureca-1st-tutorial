// PostListItem.jsx  ==> 한건의 작성글 
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) => 
        props.islast === "false" && "border-bottom: 1px solid lightgrey"
    };
    background: white;
`;

const ContentText = styled.p`
    
`

function CommentListItem(props){
   const { id, content, isLast, handleDelete } = props;

   return(
       <Wrapper islast={isLast ? "true" : "false"}>
           <ContentText>
               {content}
           </ContentText>
           <div onClick={() => handleDelete(id)} style={{cursor:"pointer"}}>
            X
           </div>
       </Wrapper>
   );
}

export default CommentListItem;

