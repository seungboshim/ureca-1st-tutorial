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
    cursor: pointer;
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