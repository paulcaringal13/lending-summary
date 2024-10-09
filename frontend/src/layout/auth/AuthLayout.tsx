import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-screen">
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center shadow-md"
        style={{
          backgroundImage: "url('/images/AuthBg4.jpg')",
        }}
      ></div>

      <div className="w-full h-full flex justify-center items-center absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col p-6 mx-6 rounded-lg shadow-lg h-fit w-[80%] bg-white/90 md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
          <div className="flex flex-col my-auto gap-2 xl:gap-2">
            <Label className="text-xl text-center font-extrabold my-3 sm:my-4 md:text-2xl lg:text-3xl xl:my-6 tracking-[-0.5px] leading-none">
              <span className="mr-12">Lending</span>
              <span className="block leading-none text-primary tracking-[-0.5px] ml-12 ">
                Summary
              </span>
            </Label>

            <Label className="text-xs sm:text-sm xl:text-base">Username</Label>
            <Input
              placeholder="Username"
              autoFocus
              className="bg-accent text-primary text-xs sm:text-sm  xl:text-base"
            />
            <Label className="text-xs sm:text-sm xl:text-base">Password</Label>
            <Input
              placeholder="Password"
              type="password"
              className="bg-accent text-primary text-xs sm:text-sm xl:text-base"
            />
            <div className="w-full flex flex-col justify-between gap-2">
              <div className="flex flex-row gap-1 items-center sm:gap-2">
                <Checkbox id="terms" className="h-3 w-3 sm:h-4 sm:w-4" />
                <Label className="text-xs sm:text-sm xl:text-base">
                  Remember Me
                </Label>
              </div>
              <Button className="drop-shadow-lg hover:bg-primary hover:opacity-90 active:opacity-70 text-sm xl:text-base">
                Sign in
              </Button>
              <NavLink
                to="/"
                className="hover:underline group w-full text-center "
              >
                <Label className="text-[.6em] group-hover:cursor-pointer group-hover:text-primary sm:text-xs xl:text-sm">
                  Forgot Password?
                </Label>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
