import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { link } from "fs";
import React from "react";
import { NavLink } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen w-screen flex flex-row">
      <div
        className="bg-cover bg-no-repeat bg-center h-screen w-full"
        style={{
          backgroundImage: "url('/images/AuthBg4.jpg')",
        }}
      >
        <div className="bg-transparent relative h-full w-full">
          <Label className="inline-block absolute top-10 right-8 text-gray-800 text-5xl text-end">
            A good lender is a partner <br /> in progress.
          </Label>
        </div>
      </div>

      <div className="w-[65%]">
        <div className="flex flex-col h-full mx-20">
          <Label className="text-2xl mt-6 absolute">Lending Summary</Label>
          <div className="flex flex-col my-auto gap-4">
            <Label className="text-5xl">Sign in</Label>
            <Label>Username</Label>
            <Input
              placeholder="Username"
              autoFocus
              className="bg-accent text-primary "
            />
            <Label> Password</Label>
            <Input placeholder="Password" className="bg-accent text-primary " />
            <div className="w-full flex justify-between ">
              <div className="flex flex-row gap-1 items-center">
                <Checkbox id="terms" className="" />
                <Label className="">Remember Me</Label>
              </div>
              <NavLink to="/" className=" hover:underline group">
                <Label className="group-hover:cursor-pointer group-hover:text-primary">
                  Forgot Password?
                </Label>
              </NavLink>
            </div>
            <Button className="drop-shadow-lg hover:bg-primary hover:opacity-90 active:opacity-70">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
