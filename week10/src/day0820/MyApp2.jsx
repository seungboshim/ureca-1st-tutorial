
import { createContext, useContext } from "react";

const MyContext = createContext();

export default function MyApp2(){
   //전달데이터 => "쉬는 시간"
   //<GrandParent value="배고프시죠?"/>;
   return (<MyContext.Provider value="배고프시죠?">
             <GrandParent/>
   </MyContext.Provider>);
}

function GrandParent(){
   return <Parent/>;
}
function Parent(){
   const v = useContext(MyContext);
   console.log("[Parent]:"+v)
   return <Child/>;
}
function Child(){
   return <GrandChild/>;
}
function GrandChild(){
   return <Message/>;
}

function Message(){
   const value = useContext(MyContext);
   return <div>전달받은 데이터는 "{value}" </div>;
}