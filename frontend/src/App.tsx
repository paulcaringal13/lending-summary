import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<div className="flex min-h-screen w-full">
				{/* ADD SOMETHING ELSE LIKE LOADING STATE, TOAST OR SOMETHING */}
				<Outlet />
			</div>
		</Provider>
	);
}

export default App;
