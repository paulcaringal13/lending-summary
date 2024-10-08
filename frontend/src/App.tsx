import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-red-500 flex min-h-screen w-full ">
      {/* ADD SOMETHING ELSE LIKE LOADING STATE, TOAST OR SOMETHING */}

      <Outlet />
    </div>
  );
}

export default App;
