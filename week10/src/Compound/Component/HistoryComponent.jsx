export const HistoryComponent = (props) => {
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"fit-content",
            padding:"12px 24px",
            margin:"8px",
            border: "2px solid #F320F6",
            backgroundColor:"black",
            borderRadius:"24px"
        }}>
            <span style={{color:"white"}}>{props.history}</span>
        </div>
    )
}