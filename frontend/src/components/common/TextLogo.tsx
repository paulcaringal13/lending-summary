import { forwardRef, HTMLProps, useState } from "react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type TextLogoProps = HTMLProps<HTMLLabelElement> & {
	className?: string;
	text: string;
};

const TextLogo = forwardRef<HTMLLabelElement, TextLogoProps>(
	({ text, className, ...props }, ref) => {
		const isCollapsed = useSelector(
			(state: RootState) => state.sidebar.isCollapsed
		);

		return (
			<Label
				ref={ref}
				className={cn(
					"font-extrabold text-primary text-center w-fit mx-auto leading-6 tracking-widest text text-3xl font-baskerville",
					className
				)}
				{...props}
			>
				<img src="/images/file.png" className="h-10 w-10 inline" />
				{isCollapsed ? null : text}
			</Label>
		);
	}
);

export default TextLogo;
