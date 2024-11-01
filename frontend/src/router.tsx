import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import App from "./App";

// AUTH
import AuthLayout from "./layout/auth/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

// ROOT
import RootLayout from "./layout/root/RootLayout";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route element={<AuthLayout />}>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />
			</Route>
			<Route element={<RootLayout />}>
				<Route path="/management" element={<div>Management</div>} />
				<Route path="/dashboard" element={<div>Dashboard</div>} />
				<Route path="parent" element={<div>HELLOWWORLD</div>}>
					<Route path="child" element={<div>HELLOWWORLD</div>}>
						<Route
							path="grandchildren-of-the-parent"
							element={<div>HELLOWWORLD</div>}
						>
							<Route path="apo-sa-tuhod" element={<div>asd</div>}>
								<Route
									path="anak-ng-apo-sa-tuhod/:id"
									element={<div>asd</div>}
								></Route>
							</Route>
						</Route>
					</Route>
				</Route>
			</Route>
		</Route>
	)
);
