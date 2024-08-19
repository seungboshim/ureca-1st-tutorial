import React from "react";
import logo from "./logo.svg";
import notice from "./notice.svg";
const styles = {
  MainContainer: {
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
  },
  logo:{
    marginTop: "15px",
    width: "75%",
  },
  notice: {
    margin: "30px 0",
    width: "55%",
    borderBottom: "3px solid #F320F6",
    paddingBottom: "10px",
  }
};
export default function MainContainer(props) {
  return <main style={styles.MainContainer}>
    <img src={logo} alt="Logo" style={styles.logo} />
    <img src={notice} alt="notice" style={styles.notice} />
    {props.children}</main>;
}

