import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-screen w-full ">
      {/* ADD SOMETHING ELSE LIKE LOADING STATE, TOAST OR SOMETHING */}

      <Outlet />
    </div>
  );
}

export default App;
