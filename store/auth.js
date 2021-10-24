export const state = () => ({
    authenticated: false,
    user: null,
    token: '',
    loadingStatus: false,
});

export const getters = {
    authenticated (state) {
        return state.authenticated
    },
  
    user (state) {
        return state.user
    },

    token (state) {
        return state.token
    },

    loadingStatus (state) {
        return state.loadingStatus
    }

};
export const mutations = {
    SET_AUTHENTICATED (state, value) {
        state.authenticated = value
    },
    SET_USER (state, value) {
        state.user = value
    },
    SET_TOKEN (state, value) {
        state.token = value
    },
    SET_LOADING_STATUS (state, value) {
        state.loadingStatus = value
    }

};

export const actions = {
    async signIn ({dispatch, commit}, credentials) {
        commit('SET_LOADING_STATUS', true);
        await this.$axios.get('/csrf-cookie');
        await this.$axios.post('/login', credentials)
        .then((response) => {
            commit('SET_TOKEN', response.data.access_token);
        })
        .catch((error) => {
            console.log(error);
            commit('SET_LOADING_STATUS', false);
        });

        return dispatch('me');
    },
    
    async signOut ({dispatch, commit}, credentials) {
        await this.$axios.post('/logout')
        commit('SET_AUTHENTICATED', false);
        commit('SET_USER', null);
        commit('SET_TOKEN', null);
    },

    me ({ commit, getters }) {
        return this.$axios.get('/user', { 
                    headers: {'Authorization': 'Bearer: ' + getters.token}
                })
            .then((response) => {
                commit('SET_AUTHENTICATED', true);
                commit('SET_USER', response.data);
                commit('SET_LOADING_STATUS', false);
                redirect('/');
            })
            .catch(() => {
                commit('SET_AUTHENTICATED', false);
                commit('SET_USER', null);
                commit('SET_TOKEN', null);
            })
    },

    closeModal ( {} ) {
        this.$modal.hide('loginForm');
    }


};