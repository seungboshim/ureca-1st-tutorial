function MyApp3(){
   return(
      <UrecaComponent value="오늘은 화요일입니다!"/>
   );
}

function UrecaComponent({value}){
   return(
      <div>
          <First value={value}/>
          <Second value={value}/>
          <Third value={value}/>
      </div>
   );
}

function First({value}){
    return (<div>첫번째 컴포넌트: {value}</div>);
}
function Second({value}){
    return (<div>두번째 컴포넌트: {value}</div>);
}
function Third({value}){
    return (<div>세번째 컴포넌트: {value}</div>);
}


export default MyApp3;