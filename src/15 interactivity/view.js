import { store, getContext } from "@wordpress/interactivity";

const { state } = store("capitainewp/filter-posts", {
	state: {
		selectedCategory: "all",
	},
	actions: {
		selectCategory: () => {
			const context = getContext();
			state.selectedCategory = context.category;
		},
	},
	callbacks: {
		isSelectedCategory: () => {
			const context = getContext();
			return state.selectedCategory === context.category;
		},
		isPostDisplayed: () => {
			const context = getContext();
			return (
				state.selectedCategory === "all" ||
				state.selectedCategory === context.category
			);
		},
		hasNoCategorySelected: () => {
			return state.selectedCategory === "all";
		},
	},
});
