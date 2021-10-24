export const state = () => ({
    recentAuctions: [],
    auction: [],
});

export const getters = {
    recentAuctions (state) {
        return state.recentAuctions
    },    
    auction (state) {
        return state.auction
    } 
};

export const mutations = {
    SET_RECENT_AUCTIONS (state, value) {
        state.recentAuctions = value
    },

    SET_AUCTION (state, value) {
        state.auction = value
    }
 
};

export const actions = {
    async loadAuctions ({dispatch, commit}) {
        await this.$axios.get('/auctions')
        .then((response) => {
            commit('SET_RECENT_AUCTIONS', response.data);
        })
    },

    async loadAuction ({dispatch, commit}, id) {
        await this.$axios.get('/auctions/'+id)
        .then((response) => {
            commit('SET_AUCTION', response.data.data);
        })
    }
};