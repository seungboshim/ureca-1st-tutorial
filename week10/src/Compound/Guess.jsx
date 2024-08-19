import MainContainer from "./Container/MainContainer";
import Heading from "./text/Heading";
import First from "./First/First";
import Second from "./Second/Second";
import Third from "./Third/Third";
import useGuessNumber from "./hooks/useGuessNumber";
import { HistoryComponent } from "./Component/HistoryComponent";

const styles = {
  button: {
    color: "white",
    backgroundColor: "#F320F6",
    padding: "8px 10px",
    borderRadius: "25px",
    textAlign: "center",
    fontSize: "16px",
    cursor: "pointer",
  },
  button2: {
    color: "#F320F6",
    backgroundColor: "white",
    padding: "8px 10px",
    borderRadius: "25px",
    textAlign: "center",
    fontSize: "16px",
    cursor: "pointer",
  },
};

function MyNumberGuess4() {
  const {
    user_num,
    result,
    tryCount,
    tryHistory,
    newGameDisable,
    gameDone,
    answerHistory,
    checkNum,
    handleChange,
    handleKeyDown,
    newGame,
  } = useGuessNumber();

  return (
    <MainContainer>
      <First
        tryCount={tryCount}
        user_num={user_num}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", margin:"24px"}}>
          <div onClick={checkNum}
            style={{
              color: "white",
              backgroundColor: "#F320F6",
              padding: "8px 10px",
              borderRadius: "25px",
              textAlign: "center",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {/* <svg width="90" height="54" viewBox="0 0 90 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="54" rx="27" fill="#F320F6"/>
            <path d="M42.75 20V24.5H38.25V20H33.75V35.75H38.25V31.25H36V29H42.75V38H31.5V35.75H29.25V20H31.5V17.75H40.5V20H42.75ZM58.5 17.75V20H60.75V35.75H58.5V38H49.5V35.75H47.25V20H49.5V17.75H58.5ZM56.25 20H51.75V35.75H56.25V20Z" fill="white"/>
            </svg> */}
            GO
          </div>
          {!newGameDisable &&
          <div style={{
            color: "black",
            backgroundColor: "white",
            padding: "8px 10px",
            borderRadius: "25px",
            textAlign: "center",
            fontSize: "16px",
            cursor: "pointer",
            marginLeft:"12px"
          }} onClick={newGame}>
            NEW GAME
          </div>
          }

        </div>

      <div style={{display:"flex", justifyContent:"center", padding:"24px"}}>{tryHistory.length > 0 &&
        <>
       <svg style={{marginRight:"12px"}} width="136" height="20" viewBox="0 0 136 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.69922 13.5V12H15.1992V10.5H0.199219V9H4.69922V7.5H1.69922V6H0.199219V4.5H1.69922V3H0.199219V1.5H4.69922V0H7.69922V1.5H12.1992V3H10.6992V4.5H12.1992V6H10.6992V7.5H7.69922V9H15.1992V0H18.1992V4.5H22.6992V6H18.1992V18H16.6992V19.5H15.1992V13.5H1.69922ZM9.19922 6V4.5H3.19922V6H9.19922ZM33.1992 10.5H27.1992V9H25.6992V7.5H24.1992V3H25.6992V1.5H27.1992V0H33.1992V1.5H34.6992V3H36.1992V7.5H34.6992V9H33.1992V10.5ZM43.6992 10.5H40.6992V0H43.6992V10.5ZM28.6992 3H27.1992V7.5H28.6992V9H31.6992V7.5H33.1992V3H31.6992V1.5H28.6992V3ZM28.6992 18H43.6992V19.5H27.1992V18H25.6992V12H28.6992V18ZM60.1992 0H69.1992V9H67.6992V10.5H61.6992V9H66.1992V1.5H60.1992V0ZM72.1992 3H76.6992V0H79.6992V10.5H76.6992V7.5H72.1992V6H76.6992V4.5H72.1992V3ZM61.6992 15H76.6992V13.5H61.6992V12H79.6992V16.5H64.6992V18H79.6992V19.5H63.1992V18H61.6992V15ZM88.6992 16.5V9H91.6992V10.5H93.1992V3H84.1992V1.5H96.1992V10.5H94.6992V12H91.6992V16.5H99.1992V0H102.199V9H106.699V10.5H102.199V19.5H99.1992V18H84.1992V16.5H88.6992ZM119.923 12.708V4.812L135.067 8.772L119.923 12.708Z" fill="white"/>
    </svg>

       {result} </>}</div>


      <div style={{display:"flex", justifyContent:"center"}}>
        <Second tryHistory={tryHistory} result={result} />
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          {answerHistory.length > 0 &&
            <>
            <svg style={{padding:"16px"}} width="106" height="20" viewBox="0 0 106 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20H17V0.5H20V20ZM9.5 18.5H3.5V17H2V15.5H0.5V5H2V3.5H3.5V2H9.5V3.5H11V5H12.5V15.5H11V17H9.5V18.5ZM5 5H3.5V15.5H5V17H8V15.5H9.5V5H8V3.5H5V5ZM36.5 11H33.5V9.5H32V8H29V9.5H27.5V11H24.5V9.5H26V8H27.5V6.5H29V2H24.5V0.5H36.5V2H32V6.5H33.5V8H35V9.5H36.5V11ZM44 11H41V6.5H36.5V5H41V0.5H44V11ZM29 18.5H44V20H27.5V18.5H26V12.5H29V18.5ZM80 20H77V0.5H80V20ZM65 15.5H66.5V3.5H60.5V2H69.5V15.5H68V17H66.5V18.5H62V17H65V15.5ZM86 6.5V3.5H101V2H86V0.5H104V5H89V6.5H104V8H96.5V9.5H105.5V11H84.5V9.5H93.5V8H87.5V6.5H86ZM86 12.5H104V18.5H102.5V20H101V14H86V12.5Z" fill="white"/>
            </svg>
            {answerHistory.map((history, idx) => (
              <HistoryComponent key={idx} history={history} />
            ))}
            </>
          }
        </div>
      </div>
    </MainContainer>
  );
}

export default MyNumberGuess4;
