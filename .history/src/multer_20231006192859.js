import React, { useState } from "react";

export default function M   ulter() {
  const [file, setFile] = useState();
  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:6600/userlogin/userprofile", formData)
      .then((res) => {})
      .catch((er) => console.log(er));
  };
  return (
    <div>
      <form onSubmit={upload}>
        <input
          type="file"
          value={file}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
