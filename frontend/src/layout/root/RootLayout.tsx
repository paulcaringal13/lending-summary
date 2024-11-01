import TextLogo from "@/components/common/TextLogo";

const RootLayout = () => {
	return (
		<div className="grow">
			<aside className="flex w-[15em] h-full bg-primary shadow-xl">
				<div className="flex h-[3em] w-full text-center items-center">
					<TextLogo className="text-white" text="treblend" />
				</div>
				{/* <nav className="my-auto">
					<ul className="flex gap-2 h-fit bg-yellow-500">
						<li>Home</li>
						<li>Management</li>
						<li>Profile</li>
					</ul>
				</nav> */}
			</aside>
		</div>
	);
};

export default RootLayout;
