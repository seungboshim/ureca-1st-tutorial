import React, { useState, useEffect } from 'react';

const callbackTest = () => {
    console.log('callbackTest');
    const names = ['홍길동', '김철수', '이영희'];
    return names;
}

function SignUp() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    // const [callback, setCallback] = useState(callbackTest());
    // const [callback, setCallback] = useState(() => callbackTest());
    const [callback, setCallback] = useState(callbackTest);

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        setCallback([...callback, name]);
        e.preventDefault();
    }
    
    const handleChangeGender = (e) => {
        setGender(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <input type="submit" value="제출" />
        </form>
    )
}

export default SignUp;