import React, { useState } from "react";
import "./ChatGPT.css";
import SendIcon from "@mui/icons-material/Send";
export default function ChatGPT() {
  const [searchBar, setSearchBar] = useState("");
  return (
    <>
      <div>
        {/* navbar */}
        <nav className="chatgptnav">
          <div className="centerName">Default(GPT-3.5)</div>
        </nav>
        {/* search_bar */}
        <div className="searchContainer">
          <input
            className="GptSearchBar"
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
          />
          <button className=>
            <SendIcon />
          </button>
        </div>
      </div>
    </>
  );
}
