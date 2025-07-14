import { RouterProvider } from "react-router-dom";

import QueryProvider from "./lib/tanstackQuery";
import { router } from "./routes";
import AuthProvider from "./contexts/AuthContext ";
import Notification from "./components/notification";

function App() {
  return (
    <AuthProvider>
      <QueryProvider>
        <Notification />
        <RouterProvider router={router} />
      </QueryProvider>
    </AuthProvider>
  );
}

export default App;
