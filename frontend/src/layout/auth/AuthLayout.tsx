import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-screen">
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center shadow-md"
        style={{
          backgroundImage: "url('/images/AuthBg4.jpg')",
        }}
      ></div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
