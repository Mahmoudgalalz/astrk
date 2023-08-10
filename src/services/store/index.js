import { createStore } from "vuex";

// let timer;
export default createStore({
	state: {
		accordion: false,
	},

	mutations: {
		setToggleAccordion(state) {
			state.accordion = !state;
		},
	},

	actions: {},

	modules: {},

	getters: {},
});
