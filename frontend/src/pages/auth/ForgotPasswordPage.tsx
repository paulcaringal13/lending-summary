import { NavLink } from "react-router-dom";

// SHAD
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// CUSTOMIZED
import TextLogo from "@/components/common/TextLogo";

const ForgotPasswordPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col p-6 mx-6 rounded-lg shadow-lg h-fit w-[80%] bg-white/90 md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
        <div className="flex flex-col my-auto gap-2">
          <TextLogo />

          <div className="flex flex-col text-center">
            <Label className="text-md font-bold">Reset Password</Label>
            <Label className="text-[.50rem] leading-3 text-muted-foreground">
              Input your new password and it will be sent to your email.
            </Label>
          </div>

          <Label className="text-xs sm:text-sm xl:text-base">
            New Password
          </Label>
          <Input
            placeholder="Type new password here"
            autoFocus
            className="bg-accent text-xs sm:text-sm xl:text-base"
          />
          <Label className="text-xs sm:text-sm xl:text-base">
            Confirm Password
          </Label>
          <Input
            placeholder="Confirm your password here"
            type="password"
            className="bg-accent text-xs sm:text-sm xl:text-base"
          />

          <div className="w-full flex flex-col justify-between gap-1 mt-1">
            <Button className="drop-shadow-lg hover:bg-primary hover:opacity-90 active:opacity-70 text-sm xl:text-base">
              Sign in
            </Button>
            <NavLink
              to="/login"
              className="hover:underline group w-full text-center "
            >
              <Label className="text-[.6em] group-hover:cursor-pointer group-hover:text-primary sm:text-xs xl:text-sm">
                Back to Sign in
              </Label>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
