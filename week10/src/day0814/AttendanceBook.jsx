import { useState } from "react";

const students = [
    {no:1, name: '고명진'},
    {no:2, name: '고은진'},
    {no:3, name: '고주희'},
    {no:4, name: '고윤정'},
];

function NameForm() {
    const [userName, setUserName] = useState('');
    const handleChange = (e) => {
        setUserName(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(`입력한 이름: ${userName}`);
        e.preventDefault(); // submit 기능 중지
        // 이거 안하면 submit 시 페이지 전체 새로고침
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: <input type="text" value={userName} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

function AttendanceBook() {
    return (
        <div>
            <ul>
                {students.map((student) => (
                    <li key={student.no}>{student.name}</li>
                ))}
            </ul>
            <NameForm />
        </div>
    )
}

export default AttendanceBook;