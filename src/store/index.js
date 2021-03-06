import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {getters} from './getters'
import {mutations} from './mutations'
import {actions} from './actions'

export function createStore(toast, updateExemptionCount) {
	return new Vuex.Store({
		state: {
			users: [],
			exemptions: [],
			bookmark: '',
			hasMoreItems: false,
			classlistURL: '',
			exemptionsURL: '',
			exemptionUpdateURL: '',
			isLoading: true,
			localId: '',
			queryTerm: ''
		},
		getters,
		mutations,
		actions: {
			...actions,
			toast,
			updateExemptionCount
		}
	})
}