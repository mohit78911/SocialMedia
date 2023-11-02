// import React, { useState } from "react";
// import axios from "axios";
// export default function FilesUploadComponent() {
//   const [profileImg, setProfileImg] = useState("");
//   const [isFileUploaded, setIsFileUploaded] = useState(false);
//   const onFileChange = (e) => {
//     setProfileImg(e.target.files[0]);
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("img", profileImg);
//     axios
//       .post("http://localhost:6600/userlogin/userprofile", formData)
//       .then((res) => {
//         console.log(res);
//         setIsFileUploaded(true);
//       });
//   };

//   return (
//     <div className="container">
//       <br />
//       <form onSubmit={onSubmit}>
//         <div className="mb-3">
//           <input type="file" className="form-control" onChange={onFileChange} />
//         </div>
//         <button className="btn btn-primary" type="submit">
//           Upload
//         </button>
//       </form>
//       {isFileUploaded && (
//         <div className="alert alert-success mt-3">
//           File successfully uploaded!
//         </div>
//       )}
//     </div>
//   );
// }



import React from 'react'

export default function Multer() {
  return (
    <div>
      <video>
        <source ></source>
      </video>
    </div>
  )
}
