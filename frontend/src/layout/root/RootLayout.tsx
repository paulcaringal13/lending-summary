const RootLayout = () => {
  return (
    <div className="h-20 w-20 bg-green-500">
      <header className="flex justify-between w-full h-[10%] px-10  bg-green-500">
        <div className="bg-red-500 h-fit my-auto">
          <p className="text-4xl">LOGO</p>
        </div>
        <nav className="my-auto">
          <ul className="flex gap-2 h-fit bg-yellow-500">
            <li>Home</li>
            <li>Management</li>
            <li>Profile</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default RootLayout;
