import styled from "styled-components"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Button from "../../components/Button"
import { getPersonList } from "../../apis/person"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
`

const TableHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: lightcoral;
    color: white;
    font-weight: 600;
    border: 1px solid lightcoral;
    border-radius: 9999px;
    margin: 4px;
`
const TableBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid lightcoral;
    border-radius: 9999px;
    margin: 4px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 4px lightcoral;
        border: 1px solid #ffc5c5;
        transition: box-shadow 0.3s, border 0.3s;
    }
`
const TableItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 12px;
`
const ImageContainer = styled.div`
    width: 500px;
    border-radius: 24px;
    position: relative;
`
const Image = styled.img`
    width: 500px;
    border-radius: 24px;
`
const Ballon = styled.div`
    position: absolute;
    top: -50px;
    right: -100px;
    width: 200px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 9999px;
    border: 1px solid gray;
    box-shadow: 0 0 4px 0 lightgray;
    padding: 12px;
`

export default function ViewPage() {
    const [people, setPeople] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem('people')) || [];
    //     setPeople(storedData);
    // }, []);

    // GET /person/list -> people에 저장
    useEffect(() => {
        getPersonList(setPeople);
    }, []);

    return (
        <Wrapper>
            <TableWrapper>
                <TableHeader>
                    <TableItem>ID</TableItem>
                    <TableItem>이름</TableItem>
                    <TableItem>나이</TableItem>
                    <TableItem>직업</TableItem>
                </TableHeader>
                {people && people.map((person) => {
                    return (
                        <TableBody key={person.no} onClick={() => navigate(`/edit/${person.no}`)}>
                            <TableItem>{person.no}</TableItem>
                            <TableItem>{person.name}</TableItem>
                            <TableItem>{person.age}</TableItem>
                            <TableItem>{person.job}</TableItem>
                        </TableBody>
                    )
                })}
            </TableWrapper>
            <Button onClick={() => navigate('/add')} label='추가하기' theme='primary' />
            <ImageContainer>
                <Image src='https://i.namu.wiki/i/02Nd3r5_9XyQO8S9LMYQoVTCnsWO-NqYQf3N_PJYZmuxYOhJj5s9n9H66lozbQ9xB0zYl3GGRT3yzWiyVlTnWw.webp' />
                <Ballon>안녕하세요? 뉴진스 팜하니입니다. 아~~~와따시와 코이와~ 미나미노~~</Ballon>
            </ImageContainer>
        </Wrapper>
    )
}