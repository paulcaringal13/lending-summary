import { NavLink } from "react-router-dom";

// SHAD
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPasswordPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-1 sm:gap-4 p-6 mx-6 rounded-lg shadow-lg h-fit bg-white/90 w-[80%] sm:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[25%]">
        <div className="flex flex-col text-center lg:py-2 ">
          <Label className="text-base sm:text-xl lg:text-3xl font-bold">
            Reset Password
          </Label>
          <Label className="text-[.50rem] sm:text-[.60rem] lg:text-xs font-normal leading-3 text-muted-foreground">
            Input your new password and it will be sent to your email.
          </Label>
        </div>
        <div className="flex flex-col sm:gap-1 lg:gap-2">
          <Label className="text-[10px] sm:text-xs lg:text-sm leading-5">
            New Password
          </Label>
          <Input
            placeholder="Type new password here"
            autoFocus
            className="bg-accent border-none"
          />
          <Label className="text-[10px] sm:text-xs lg:text-sm leading-5">
            Confirm Password
          </Label>
          <Input
            placeholder="Confirm your password here"
            type="password"
            className="bg-accent border-none"
          />
        </div>
        <div className="w-full flex flex-col justify-between gap-2 mt-1 lg:mt-0">
          <Button className="drop-shadow-lg hover:bg-primary hover:opacity-90 active:opacity-70 text-sm xl:text-base">
            Send Password Reset
          </Button>
          <NavLink
            to="/login"
            className="hover:underline group w-full text-center "
          >
            <Label className="text-[.6em] sm:text-xs group-hover:cursor-pointer group-hover:text-primary  xl:text-sm">
              Back to Sign in
            </Label>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
