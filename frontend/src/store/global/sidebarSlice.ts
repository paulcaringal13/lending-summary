import { createSlice } from "@reduxjs/toolkit";

export type SidebarState = {
	value: {
		isSidebarCollapsed: boolean;
		isSheetCollapsed: boolean;
	};
};

const initialState: SidebarState = {
	value: {
		isSidebarCollapsed: false,
		isSheetCollapsed: false,
	},
};

export const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		collapseSidebar: (state) => {
			state.value.isSidebarCollapsed = false;
		},
		openSidebar: (state) => {
			state.value.isSidebarCollapsed = true;
		},
		toggleSidebar: (state) => {
			state.value.isSidebarCollapsed = !state.value.isSidebarCollapsed;
		},
		toggleSheet: (state) => {
			state.value.isSheetCollapsed = !state.value.isSheetCollapsed;
		},
	},
});

export const { collapseSidebar, openSidebar, toggleSidebar, toggleSheet } =
	sidebarSlice.actions;

export default sidebarSlice.reducer;
