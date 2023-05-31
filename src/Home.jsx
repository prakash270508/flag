import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to={"/flag?flag=red"}>Click me</Link>
    </div>
  );
}
