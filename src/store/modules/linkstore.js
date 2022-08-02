import UrlService from "../../services/UrlService";
import { showSnackBar } from "../../utils/helper";

const state = {
	showLoader: false,
	urlService: {},
	urlLink: "",
	linkToCopy: false,
	shortenedLinks: []
};

const getters = {
	getLoaderStatus: state => state.showLoader,
	getInputData: state => state.urlLink,
	linkAvailable: state => state.linkToCopy,
	getShortenedLinks: state => state.shortenedLinks,
	urlService: state => state.urlService
};

const actions = {
	initialiseService({ commit }) {
		commit("setupService", new UrlService());
	},
	async setLoaderStatus({ commit }, value) {
		commit("updateLoaderStatus", value);
	},
	async getFormattedUrl({ commit, getters }, value) {
		try {
			let data = await getters.urlService.getShortenedUrl(value);
			if (data.status === 201) {
				commit('updateLinks', data.data.result);
			} else {
				showSnackBar('Unfortunately we couldn\'t process the link. Try again!');
			}
		} catch (error) {
			showSnackBar('Something went wrong. Try again!');
		}
	},
	clearInput({ commit }) {
		commit('clearData');
	}
};

const mutations = {
	updateLoaderStatus: (state, value) => (state.showLoader = value),
	setupService: (state, value) => (state.urlService = value),
	updateLinks: (state, value) => {
		state.urlLink = value.short_link;
		state.linkToCopy = true;
		state.shortenedLinks.push(value);
	},
	clearData: (state) => {
		state.urlLink = "";
		state.linkToCopy = false;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
