import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";

// Redux
import { toggleSheet, toggleSidebar } from "@/store/global/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

// Icons
import { Columns2Icon, Menu } from "lucide-react";

const RootLayout = () => {
	const { isSidebarCollapsed, isSheetCollapsed } = useSelector(
		(state: RootState) => state.sidebar.value
	);

	const dispatch = useDispatch();

	return (
		<div className="grow flex">
			<aside
				className={`hidden xl:flex h-full bg-primary shadow-xl border-r-[1px] border-zinc-200 transition-all duration-300 ${
					isSidebarCollapsed ? "w-[5em]" : "w-[20em]"
				}`}
			>
				<div className="flex h-[4.6em] w-full text-center items-center">
					<Logo className="text-white" text="treblend" hasLogo />
				</div>
			</aside>

			<Sheet
				open={isSheetCollapsed}
				onOpenChange={() => dispatch(toggleSheet())}
			>
				<SheetContent className="xl:hidden" side="left">
					<SheetHeader>
						<Logo text="treblend" />
					</SheetHeader>
				</SheetContent>
			</Sheet>

			<div className="flex flex-col h-full w-full">
				<header className="flex bg-white h-[5em] w-full px-4 drop-shadow-sm shadow-sm border-b-[1px] border-zinc-200 items-center">
					<Button
						className="hidden xl:flex py-6 px-3 bg-transparent hover:bg-accent"
						onClick={() => dispatch(toggleSidebar())}
					>
						<Columns2Icon className="text-stone-800" />
					</Button>

					<Button
						className="flex xl:hidden py-6 px-3 bg-transparent hover:bg-accent"
						onClick={() => dispatch(toggleSheet())}
					>
						<Menu className="text-stone-800" />
					</Button>
				</header>
				<div className="h-full w-full bg-background p-5">
					<Card>
						<CardHeader>HEADER</CardHeader>
						<CardContent>
							<Label>Contents</Label>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default RootLayout;

{
	/* <nav className="my-auto">
				<ul className="flex gap-2 h-fit bg-yellow-500">
						<li>Home</li>
						<li>Management</li>
						<li>Profile</li>
					</ul>
				</nav> */
}
