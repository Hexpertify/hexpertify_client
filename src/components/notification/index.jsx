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
          backgroundColor: "#ffffff", // White background for a clean look
          color: "#333333", // Dark gray text for readability
          borderRadius: "8px", // Rounded corners
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)", // Subtle shadow for depth
          fontSize: "15px", // Comfortable font size
          padding: "12px 20px", // Adequate padding
        },
        success: {
          style: {
            border: "1px solid #28a745", // Bright green border
            backgroundColor: "#d4edda", // Light green background
            color: "#155724", // Dark green text for contrast
          },
          iconTheme: {
            primary: "#155724", // Dark green icon
            secondary: "#d4edda", // Light green icon background
          },
        },
        error: {
          style: {
            border: "1px solid #dc3545", // Bright red border
            backgroundColor: "#f8d7da", // Light red background
            color: "#721c24", // Dark red text for contrast
          },
          iconTheme: {
            primary: "#721c24", // Dark red icon
            secondary: "#f8d7da", // Light red icon background
          },
        },
      }}
    />
  );
}

export default Notification;
