import { createStore } from "vuex";

export default createStore({
	state: {
		certificates: false,
		_scrollY: 0,
	},
	getters: {
		isCertificatesVisible: state => state.certificates,
	},
	mutations: {
		setCertificatesVisibility(state, visible) {
			state.certificates = visible;
		},
		toggleCertificates(state) {
			state.certificates = !state.certificates;
			if (state.certificates) {
				state._scrollY = window.scrollY;
				document.body.classList.add("no-scroll");
				document.documentElement.classList.add("no-scroll");
			} else {
				document.body.classList.remove("no-scroll");
				document.documentElement.classList.remove("no-scroll");
				window.scrollTo(0, state._scrollY || 0);
			}
		},
	},
	actions: {
		showCertificates({ commit }) {
			commit("setCertificatesVisibility", true);
		},
		hideCertificates({ commit }) {
			commit("setCertificatesVisibility", false);
		},
		toggleCertificates({ commit }) {
			commit("toggleCertificates");
		},
	},
});
