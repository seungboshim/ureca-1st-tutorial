const plus = (su1, su2) => {
    if (su1.length === 0 || su2.length === 0) {
        alert("두 개의 수를 입력!!");
        return "두 개의 수를 입력!!";
    } else if (isNaN(su1) || isNaN(su2)) {
        alert("숫자만 입력!!");
        return;
    } else {
        return parseInt(su1) + parseInt(su2);
    }
}