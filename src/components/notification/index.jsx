// App.js
import { Toaster } from "react-hot-toast";

function Notification() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        className: "",
        duration: 5000,
        style: {
          backgroundColor: "#333",
          color: "#fff",
        },
        success: {
          style: {
            border: "1px solid green",
            backgroundColor: "#4CAF50",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#4CAF50",
          },
        },
        error: {
          style: {
            border: "1px solid red",
            backgroundColor: "#F44336",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#F44336",
          },
        },
      }}
    />
  );
}

export default Notification;
