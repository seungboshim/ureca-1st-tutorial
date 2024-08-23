// PostListItem.jsx  ==> 한건의 작성글 
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    &:hover {
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s;
    }
`;

const TitleText = styled.span`
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`;

const ContentText = styled.span`
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`;

function PostListItem(props){
   const { post, onClick } = props;
   return(
       <Wrapper onClick={onClick}>
           <TitleText>
               {post.title}
           </TitleText>
           <ContentText>
                {post.content}
           </ContentText>
       </Wrapper>
   );
}

export default PostListItem;

