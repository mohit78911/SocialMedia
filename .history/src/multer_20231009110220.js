import axios from "axios";
import React, { useState } from "react";

export default function Multer() {
  const [file, setFile] = useState([]);
  const upload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file);
    axios
      .post("http://localhost:6600/userlogin/userprofile", formData)
      .then((res) => {
        alert("Submited");
      })
      .catch((er) => console.log(er));
  };
  return (
    <div>
      <form onSubmit={upload}>
        <input
          type="file"
          value={file}
          onChange={(e) => setFile(e.target.files)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
