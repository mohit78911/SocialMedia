import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../Navbar";
import ".//Setting.css";
import EditProfileData from "./EditProfileData";
import FriendsList from "./FriendsList";
// --------------------------------------
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Settings({
  user,
  users,
  requests,
  loadingDot,
  requestData,
  getRequestHandler,
  requestDeleteHandler,
  requestCancelHandler,
  sendFriendRequestHandler,
}) {
  const [editbtn, setEditBtn] = useState(false);
  const [userDetail, setUserDetail] = useState([]);

  // -------------multer-------------
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profilePicture", file);

    axios
      .post("http://localhost:6600/user/uploadimage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
         
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };
  // -------------multerEnd-------------

  const userDetails = () => {
    const getDetails = localStorage.getItem("userDetails");
    const details = JSON.parse(getDetails);
    // console.log("details", details);
    setUserDetail(details);
  };

  const handleClickOpen = () => {
    setEditBtn(true);
  };

  const handleClose = () => {
    setEditBtn(false);
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <Box>
      <Navbar
        users={users}
        requests={requests}
        loadingDot={loadingDot}
        requestData={requestData}
        getRequestHandler={getRequestHandler}
        requestCancelHandler={requestCancelHandler}
        sendFriendRequestHandler={sendFriendRequestHandler}
        requestDeleteHandler={requestDeleteHandler}
      />
      <Box className="mainContaineProfile">
        <Box className="centerEditContaine">
          <Box
            className="editProfileimg"
            component="img"
            src={userDetail.userprofile}
          />
          <Typography sx={{ fontWeight: "bold", marginTop: "8px" }}>
            {userDetail.name}
          </Typography>
          <Typography>{userDetail.email}</Typography>
          <Typography>{userDetail.dob}</Typography>
          <Typography>
            {userDetail.phonenumber ? (
              <Typography>+91 {userDetail.phonenumber}</Typography>
            ) : null}
          </Typography>
          <Button onClick={handleClickOpen}>Edit Profile</Button>
        </Box>
        {/* ---------multer--------- */}

        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAACVlZVQUFB+fn7FxcXPz8/09PTt7e329vbR0dHx8fHp6enW1tbIyMjNzc1lZWWgoKC0tLTb29sYGBi7u7teXl6oqKhzc3MoKCiJiYmurq4wMDDh4eFHR0eYmJh1dXUQEBA4ODhDQ0MvLy9ra2uNjY1OTk5ZWVkfHx8+Pj7i/JMRAAAIF0lEQVR4nO2dWXvqIBCG69JqNFbjvlSP0WNb/f8/8DS1CwMEBhhMPM+8V71ICJ/DMswAfXhgGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGOb/ozsZZu3TaH7cHd9Go3b2OOhXXSVCuo/tS96QmV6Ws/9CZZqtFHG/rP6kVVcwjM7izSDvytuiU3U1vUnXU6u+z/a6vk9Ddk8oeVeW3aqr60yydtBX0L6zUWfjqK9gXHWlHejPPQQ2Gu930x1nXvoKZlVXHUfbW+BHb6y68gg67wECP2bH2g84qWEKfFtn2WI2zrLXebmfk9e8M25L6n1pPktP9krdnUElNUcy0NtuobdLf6Yfc2ssUStwvzW8kb7elcSuprJtW7dK/mjeqmlf7KjDR8tkv5/39sp703qOqMo0McVO4L2D/Oouak09USZ6l6lNebmGU/+zXMdXp9fH8uu1c+D6cg1dVwoD2VWo22gzkur36FzCVpI4j1DLAOTlxNCjDNnhq9d68RxqwYJtDkupU4SqCau28SxG8onWpHUMogNrtvQuSBpR6zPvw9nsJaAk6N74/1TESDMFxlMrBXo3dZkxYC/8E1TWEyjLzWuIRgIG0lVgaaDF5yQVDAbOhT4zoUgCm3zjMG+Oq26swJ0JXxRIM8+V06ZClXCqkMMx7shG/PntFlVNHiCAfyQosDzjsewRFO8OWPhS+JJl8bqCVhUhHLECOUlDahkkNuZB060PPfHzJ5IiLYmrsAnXnUz8uN+aQkYXsxN5mZB8BgtoUkSZXGvyf0HzHRyiI3khKnNhU9hYJkSfspPmwnebVIVaFTaON5M4ET9LFh87lwn7ZXqjvQ0JaFBkI8DzeDjs9baD3tN4PVLCxVfyG0wb28UIBvLjfCZJN9oc1Sq2FR93yjfjfayf5arEQ9S+mKkfxC0Nvb2esZr4iZjdmP3VNRvMZPEU4BWoebhY0biyzQjv9leLIIW/xFRxBeJkN3oacZ+MrK9eozABvp2SMo4x2uh6IFLh928TsEx+dG83rmgT7ziFw58nA6wo7xUgb6emDU8WhWLrDrCitECmDscZLGhTCCOhdFakjama9+QZM35P0sMBVoS1oIkrfDFp6Ji3X7NFgckussAgK8JYFdWKpkB1+VcZzttWBQZZ8QIKonPelFjtDjuQ6QSGSISjjW+6UkFZl6JjCXqBIQ0VtNOQdB5A2oywQsfZywQGWLEDcv5E61JpmMH79eUCA6wIPCuiCQPO9S30e6VubJAVE9GIB89CIDABk6P3SQwbZnytCH5wgoBGZwMH6Cfsi2YLBlgRFBwcP32WF4R77JumPhhoxVwoIjCbsHlRKoUdRjECfSWKE0ZQUm+m6kMHD3ACPSUC79R/IZxqM13IJB5WoJ9EkCv2TivqEwjIwdk+yPziM9yIsTfPzGxScoIQN8HiLVjgYUUxTOyXU+yWhNNxtVEteBT+VqPJ7lYUZ0Qvr0a/GCzArFZUCw7EwW+tJuudrSjGG3wi/PrjLwVTxNuqBZ/Bb97WPuEGCBCfnffbTPIygavM/rZ2RQ8Vhq/6YVjzr6PEvv4I2mnRwzRRvX0khcFWlAK3L25Lfc0gs2piJx21B39udpMVajqC044gOTTtlKdZKt8+zPA/USKn+662URQqDfXdyQxKosbhFIoaNHQMhUCJX41PVSg11JZbO0uVhoaOfyv7WXbOY7Eo8Xs/pkYhaKj4RfU38pGwKXbVKrsyPgHJX4k/w4dOoWBFd4FqV0RuDJcHAD+f7ztu9TsFaBX+9EW/JJKcisINVdJyyXe74RxasEzhlxV9LFggmQM1nkqH0PyzV4VEcU90icLPSvoKVOJAGK8BrghDMuVzOIWXKfywor9AeYWHWO3D6TooTpfAXlGq8GEQdMIJDox2twSGRSn3OZYrDCPJxRrvrY8Dh5QycRVNITwtZU0nwnGGsh7xFMLR3zY0gqQO7X7jeAqBEW1Fg61VtEcc4ykEqVvL1gWQnaDZl/5DRIVgA4U5iQG8IOKtKhEVAs/G7IQBV5b4qFFEhYnYucyjhzh7UpzwEYmoEKzWzMfcxZgmcTeMqlDsiGfjk+J8T32AM6ZCMH4YnxQfJNvE8UVMhUMvhTRHfH6JqRAEfIzT+L0qBCsi4xxwrwrBhGiMm4kPUt+8cbN+aAxKimMp6dLpoS5jqbgOuaf5UIx/m11vce8a9XmNmApP6HrfqV8KMknmssFaMvxsPSCiQpBRNm+QAo/uaasRUSFoepZ7K0AgivZsWESFYNOdQzWIDxTHUwhmQ9sdYTB1SFqPeArB3hWbWeB9QaTLCzGxTHo/EszOWGcAmOCuz11UBsBhSPtFdjAkXJu7qAzAfD7Cmz64vlAxcC/AFDH+S3em3fYOCnf6OaguYjsT3F6M6bmVkkjnn1EvSUY819mK3SOsLHIGl88Th17fFY+tdKYcm9BVdkZSr4WpUC6uRR+SUA6pHet4w3Yq3wrr4impV+AY7x2vgq56JZjLpgPlVuAPRtSxtxB66h3gjqO+fp/9frNNbne5j54kScf6G90cLVB6pvl8aVXJrvT/RjivEnz+F06VeOw5UIbiWuO1WFduWa8xngn5ieZQVy1Z+d8YqcyptcRte7jEOK+6+nYCQy2dkP/edAv24duaJi7/A+/WnGiWdqnORaoDS0JneRb2n7hi0BoTO5Dd4bqF+5eU8clb7ec4wZVOt7dZNKtlsRl27yKKyzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzA6/gHQ4FwL6Izz2AAAAABJRU5ErkJggg==" width={100} typeof="file"/>
          <form onSubmit={handleUpload} enctype="multipart/form-data">
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
          </form>
        </div>

        {/* ---------multer_end--------- */}
      </Box>
      <Box>
        <FriendsList user={user} />
      </Box>

      {/*dialog box for mui */}
      <Box>
        <Dialog
          open={editbtn}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"EDIT YOUR PROFILE INFORMATION"}</DialogTitle>
          <DialogContent>
            <Box className="editprofileinfo">
              <Box>
                <EditProfileData userDetails={userDetails} />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
