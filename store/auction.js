export const state = () => ({
    recentAuctions: [],
    auction: [],
    loading: false,
});

export const getters = {
    recentAuctions (state) {
        return state.recentAuctions
    },    
    auction (state) {
        return state.auction
    },
    loading (state) {
        return state.loading
    } 
};

export const mutations = {
    SET_RECENT_AUCTIONS (state, value) {
        state.recentAuctions = value
    },

    SET_AUCTION (state, value) {
        state.auction = value
    },

    SET_LOADING (state, value) {
        state.loading = value
    }
 
};

export const actions = {
    async loadAuctions ({dispatch, commit}) {
        commit('SET_LOADING', true);
        await this.$axios.get('/auctions')
        .then((response) => {
            commit('SET_RECENT_AUCTIONS', response.data);
            commit('SET_LOADING', false);
        })
    },

    async loadAuction ({dispatch, commit}, id) {
        commit('SET_LOADING', true);
        await this.$axios.get('/auctions/'+id)
        .then((response) => {
            commit('SET_AUCTION', response.data.data);
            commit('SET_LOADING', false);
            
        })
    }
};