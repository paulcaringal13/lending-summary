import { Label } from "../ui/label";

const TextLogo = () => {
  return (
    <Label className="font-brubik text-xl text-center my-3 sm:my-4 md:text-2xl lg:text-3xl xl:my-6 tracking-[-0.5px] leading-none">
      <span className="mr-14">Lending</span>
      <span className="block leading-none text-primary tracking-[-0.5px] ml-10">
        Summary
      </span>
    </Label>
  );
};

export default TextLogo;
