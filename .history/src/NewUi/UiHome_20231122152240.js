import React from 'react'

export default function UiHome() {
  const [open, setOpen] = React.useState(false);
  const [acceptedAction, setAction] = useState("accept");
  const token = localStorage.getItem("token");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Decline or reject Request Handler
  const declineRequestHandler = () => {
    axios
      .put(
        `http://localhost:6600/friendrequest/rejectfriendrequest/${user._id}`,
        { status: "rejected" }
      )
      .then((result) => {
        console.log("requst Rejected");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //updating pending request status with the action state
  const requestStatusHandler = (id) => {
    axios
      .put(
        `http://localhost:6600/friendrequest/friendrequest/651fd5dfab759e8607eaf591`,
        {
          action: acceptedAction,
        },
        { headers: { authorization: token } }
      )
      .then((result) => {
        console.log("updatedSuccessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>Home</div>
    </div>
  )
}
