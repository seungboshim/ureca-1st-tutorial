export default function MyApp() {
    return <GrandParent value="쉬는시간" />;
}
function GrandParent({value}){
    return <Parent value={value}/>;
}

function Parent({value}){
    return <Child value="고주희입니다."/>;
}

function Child({value}){
    return <GrandChild value={value}/>;
}

function GrandChild({value}){
    return <Message value={value}/>;
}

function Message({value}){
    return <div>전달받은 데이터: {value} </div>;
}