import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
    width: 40px;
    height: 40px;
    background-color: lightgray;
    font-weight: 600;
    border-radius: 50%;
    cursor: pointer;
    border: none;
`

function PageNation({ page, setPage, totalPage }) {
  return (
    <Wrapper>
      <ButtonWrapper onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </ButtonWrapper>
      <span>{page} / {totalPage}</span>
      <ButtonWrapper onClick={() => setPage(page + 1)} disabled={page === totalPage}>
        &gt;
      </ButtonWrapper>
    </Wrapper>
  );
}

export default PageNation;