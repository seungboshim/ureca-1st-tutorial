import React from "react";
import { HistoryComponent } from "../Component/HistoryComponent";

export default function Second({ tryHistory, result, children }) {
  return (
    <>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      {tryHistory.length > 0 &&
        <>
          <svg style={{padding:"16px"}} width="105" height="20" viewBox="0 0 105 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 11V9.5H0V5H3V3.5H0V2H4.5V0.5H7.5V2H12V3.5H9V5H12V6.5H16.5V5H12V3.5H16.5V0.5H19.5V11H16.5V8H12V9.5H9V11H3ZM4.5 9.5H7.5V8H9V6.5H7.5V5H4.5V6.5H3V8H4.5V9.5ZM4.5 18.5H19.5V20H3V18.5H1.5V12.5H4.5V18.5ZM40.5 20H37.5V0.5H40.5V9.5H42V0.5H45V20H42V11H40.5V20ZM36 18.5H33V17H31.5V15.5H28.5V17H27V18.5H24V17H25.5V15.5H27V14H28.5V3.5H24V2H36V3.5H31.5V14H33V15.5H34.5V17H36V18.5ZM79.5 20H76.5V0.5H79.5V20ZM69 17H67.5V15.5H64.5V17H63V18.5H60V17H61.5V15.5H63V14H64.5V2H67.5V14H69V15.5H70.5V17H72V18.5H69V17ZM85.5 11V2H103.5V3.5H88.5V11H103.5V12.5H96V17H105V18.5H84V17H93V12.5H87V11H85.5Z" fill="white"/>
          </svg>
          {tryHistory.map((h, idx) => (
            <HistoryComponent key={idx} history={h} />
          ))}
        </>
      }
      </div>
    </>
  );
}
