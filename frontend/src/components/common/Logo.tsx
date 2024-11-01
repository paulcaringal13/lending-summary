import { forwardRef, HTMLProps } from "react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type LogoProps = HTMLProps<HTMLLabelElement> & {
	className?: string;
	text: string;
	hasLogo?: boolean;
};

const Logo = forwardRef<HTMLLabelElement, LogoProps>(
	({ text, hasLogo = false, className, ...props }, ref) => {
		const isSidebarCollapsed = useSelector(
			(state: RootState) => state.sidebar.value.isSidebarCollapsed
		);

		return (
			<Label
				ref={ref}
				className={cn(
					"flex gap-2 font-extrabold text-primary text-center w-fit mx-auto leading-6 tracking-widest text text-3xl font-baskerville",
					className
				)}
				{...props}
			>
				{hasLogo ? (
					<img src="/images/file.png" className="h-10 w-10 inline" />
				) : null}
				{isSidebarCollapsed ? null : `${text}`}
			</Label>
		);
	}
);

export default Logo;
