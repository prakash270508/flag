import React, { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { data } from "./data";

export default function Flag() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [result, setResult] = useState({});

  // Get the value of a specific query parameter
  const flag = queryParams.get("flag");

  const classNameFunction = () => {
    if (flag == "red") {
      return "redFlag";
    } else if (flag == "yellow") {
      return "yellowFlag";
    } else {
      return "greenFlag";
    }
  };

  const fetchResult = () => {
    const datas = data.find((item) => item.flag == flag);
    setResult(datas);
  };

  useEffect(() => {
    fetchResult();
  }, []);

  console.log(result);

  return (
    <div className={classNameFunction()}>
      <div style={{ textAlign: "center" }}>
        <p>
          {flag == "red" ? (
            <FaThumbsDown
              style={{
                color: `red`,
                fontSize: "6vw",
                marginTop: "6vw",
              }}
            />
          ) : (
            <FaThumbsUp
              style={{
                color: `${flag == "yellow" ? "#e4e40f" : flag}`,
                fontSize: "6vw",
                marginTop: "6vw",
              }}
            />
          )}
        </p>
        <h1>
          <b>Status :- {result.status}</b>
        </h1>
        <h4 style={{ marginLeft: "11vw", marginRight: "11vw" }}>
          <b>{result.text}</b>
        </h4>
      </div>
    </div>
  );
}
