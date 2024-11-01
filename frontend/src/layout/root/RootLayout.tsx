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

import {
	CalendarIcon,
	EnvelopeClosedIcon,
	FaceIcon,
	GearIcon,
	PersonIcon,
	RocketIcon,
} from "@radix-ui/react-icons";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";

import {
	House,
	SquareUserRound,
	Table,
	ClipboardList,
	ChartNoAxesCombined,
} from "lucide-react";

import { Fragment, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ICONS
import { SlashIcon } from "@radix-ui/react-icons";

type NavGroup = "Management" | "Dashboard" | "Monitoring";

type NavItem = {
	label: string;
	path: string;
	icon: any;
	group: NavGroup;
};

const sideNavItems: NavItem[] = [
	{
		label: "Home",
		path: "/home",
		icon: House,
		group: "Dashboard",
	},
	{
		label: "Accounts",
		path: "/accounts",
		icon: SquareUserRound,
		group: "Management",
	},
	{
		label: "Databases",
		path: "/databases",
		icon: Table,
		group: "Management",
	},
	{
		label: "Tasks",
		path: "/tasks",
		icon: ClipboardList,
		group: "Monitoring",
	},
	{
		label: "Reports",
		path: "/reports",
		icon: ChartNoAxesCombined,
		group: "Monitoring",
	},
];

type GroupedNavItems = {
	[key in NavGroup]?: NavItem[];
};

export const groupedItems = sideNavItems.reduce<GroupedNavItems>(
	(acc, item) => {
		if (!acc[item.group]) {
			acc[item.group] = [];
		}
		acc[item.group]!.push(item);
		return acc;
	},
	{}
);

type PathSegment = {
	link: string;
	label: string;
};

const LOWERCASE_WORDS = [
	"and",
	"or",
	"the",
	"in",
	"on",
	"at",
	"to",
	"for",
	"of",
	"with",
	"by",
	``,
];

const EXCLUDED_SEGMENTS = ["add", "view", "edit"];

const RootLayout = () => {
	const location = useLocation();
	const { isSidebarCollapsed, isSheetCollapsed } = useSelector(
		(state: RootState) => state.sidebar.value
	);

	const dispatch = useDispatch();

	// ? Capitalize the first letter, lowercase the not important words
	const cleanAndCapitalize = (str: string): string => {
		const words = str.replace(/[^a-zA-Z]/g, " ").split(/\s+/);
		return words
			.map((word, index) => {
				if (index === 0 || !LOWERCASE_WORDS.includes(word.toLowerCase())) {
					return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
				}
				return word.toLowerCase();
			})
			.join(" ");
	};

	// ? Function for removing dynamic path segments e.g /view/:id
	const removeDynamicPathSegments = (paths: string[]): string[] => {
		return paths.filter(
			(path, index, array) =>
				!EXCLUDED_SEGMENTS.includes(path) &&
				!EXCLUDED_SEGMENTS.includes(array[index - 1])
		);
	};

	const {
		pathSegmentsArr,
		extraPathsArr,
		showedPathsArr,
		isPathsArrMoreThanThree,
		mainPage,
	} = useMemo(() => {
		// ? Split the url path and remove the "/" first element
		const initialPathArr = location.pathname
			.split("/")
			.filter((segment): segment is string => segment !== "");
		// ? Clean the array, removes the dynamic segments like "add", "edit", "view", etc.
		const noDynamicPathsArr = removeDynamicPathSegments(initialPathArr);

		let currentLink = "";
		// ? Format the path segments to have their link for navigation and also the label for displaying
		const pathSegmentsArr: PathSegment[] = noDynamicPathsArr.map((path) => {
			currentLink += `/${path}`;
			return {
				link: currentLink,
				label: cleanAndCapitalize(path),
			};
		});

		const extraPathsArr = pathSegmentsArr.slice(1, -2);
		const showedPathsArr = pathSegmentsArr.slice(-2);

		return {
			pathSegmentsArr,
			extraPathsArr,
			showedPathsArr,
			isPathsArrMoreThanThree: initialPathArr.length > 3,
			mainPage: pathSegmentsArr[0] ?? "",
		};
	}, [location.pathname]);

	return (
		<div className="grow flex">
			<aside
				className={`hidden xl:flex xl:flex-col h-full bg-primary shadow-xl border-r-[1px] border-zinc-200 transition-all duration-300 ${
					isSidebarCollapsed ? "w-[5em]" : "w-[20em]"
				}`}
			>
				<div className="flex h-[4.6em] w-full text-center items-center">
					<Logo className="text-white" text="treblend" hasLogo />
				</div>
				<Command className="w-full bg-transparent">
					{Object.entries(groupedItems).map(([group, items]) => (
						<div key={group}>
							<CommandSeparator className="my-2" />
							<CommandGroup heading={!isSidebarCollapsed && group}>
								{items.map((item) => (
									<Button
										key={item.path}
										className={`collapsed-nav-button justify-start transition duration-300 mx-4 text-white font-light hover:bg-transparent hover:text-accent ${
											isSidebarCollapsed
												? "p-0 m-0 ml-1 hover:scale-125"
												: "hover:translate-x-6"
										}`}
										// onClick={() => navigate(item.path, { replace: true })}
										variant="ghost"
									>
										<item.icon
											className={`my-1 ${
												isSidebarCollapsed ? "mx-auto h-5 w-5" : "mr-2 h-5 w-5"
											}`}
											strokeWidth={1.75}
											absoluteStrokeWidth
										/>
										{!isSidebarCollapsed && item.label}
									</Button>
								))}
							</CommandGroup>
						</div>
					))}
				</Command>
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
					<Breadcrumb className="max-h-fit h-fit">
						<BreadcrumbList className="w-fit flex flex-row flex-shrink-0">
							<BreadcrumbItem>
								{isPathsArrMoreThanThree ? (
									<>
										{pathSegmentsArr.length < 0 ? (
											<BreadcrumbPage className="">
												{mainPage.label}
											</BreadcrumbPage>
										) : (
											<BreadcrumbLink asChild>
												<Link to={mainPage.link}>{mainPage.label}</Link>
											</BreadcrumbLink>
										)}
									</>
								) : null}
							</BreadcrumbItem>
							{isPathsArrMoreThanThree && pathSegmentsArr.length > 0 && (
								<BreadcrumbSeparator>
									<SlashIcon />
								</BreadcrumbSeparator>
							)}
							{!isPathsArrMoreThanThree ? (
								<Fragment>
									{pathSegmentsArr.map((path, index) => {
										const isLastElement = index == pathSegmentsArr.length - 1;
										return (
											<Fragment key={index}>
												{isLastElement ? (
													<BreadcrumbItem>
														<BreadcrumbPage>{path.label}</BreadcrumbPage>
													</BreadcrumbItem>
												) : (
													<BreadcrumbItem>
														<BreadcrumbLink asChild>
															<Link to={path.link}> {path.label}</Link>
														</BreadcrumbLink>
													</BreadcrumbItem>
												)}
												{isLastElement ? null : (
													<BreadcrumbSeparator>
														<SlashIcon />
													</BreadcrumbSeparator>
												)}
											</Fragment>
										);
									})}
								</Fragment>
							) : (
								<Fragment>
									<BreadcrumbItem>
										<DropdownMenu>
											<DropdownMenuTrigger className="flex items-center gap-1">
												<BreadcrumbEllipsis className="h-4 w-4" />
												<span className="sr-only">Toggle menu</span>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="start">
												{extraPathsArr.map((path, index) => {
													return (
														<DropdownMenuItem key={index}>
															<Link to={path.link}>{path.label}</Link>
														</DropdownMenuItem>
													);
												})}
											</DropdownMenuContent>
										</DropdownMenu>
									</BreadcrumbItem>
									<BreadcrumbSeparator>
										<SlashIcon />
									</BreadcrumbSeparator>
									{showedPathsArr.map((path, index) => {
										const isLastElement = index == showedPathsArr.length - 1;

										return (
											<Fragment key={index}>
												{isLastElement ? (
													<BreadcrumbItem>
														<BreadcrumbPage>{path.label}</BreadcrumbPage>
													</BreadcrumbItem>
												) : (
													<BreadcrumbItem>
														<BreadcrumbLink asChild>
															<Link to={path.link}> {path.label}</Link>
														</BreadcrumbLink>
													</BreadcrumbItem>
												)}
												{isLastElement ? null : (
													<BreadcrumbSeparator>
														<SlashIcon />
													</BreadcrumbSeparator>
												)}
											</Fragment>
										);
									})}
								</Fragment>
							)}
						</BreadcrumbList>
					</Breadcrumb>
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
