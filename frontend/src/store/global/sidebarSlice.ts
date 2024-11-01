import { createSlice } from "@reduxjs/toolkit";

export type SidebarState = {
	isCollapsed: boolean;
};

const initialState: SidebarState = {
	isCollapsed: false,
};

export const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		collapseSidebar: (state) => {
			state.isCollapsed = false;
		},
		openSidebar: (state) => {
			state.isCollapsed = true;
		},
	},
});

export const { collapseSidebar, openSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
