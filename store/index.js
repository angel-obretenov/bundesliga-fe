const resource = "matches/"
const defaultState = () => ({
    allTeams: [],
    currentTeams: [],
    nextMatch: null
});

export const state = () => defaultState();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const actions = {
    async getCurrentGroupData({ commit }) {
        try {
            const res = await this.$axios.get(`${resource}group/`)
            const data = res.data;
            
            commit("setCurrentTeams", data);
            commit("addToAllTeams", data);

        } catch (error) {
            console.log(error);
            
        }
    },
    async requestNextMatch({ commit }) {
        try {
            const res = await this.$axios.get(`${resource}next/`)
            const data = res.data;
            
            commit("setNextMatch", data);

        } catch (error) {
            console.log(error);
            
        }
    },
}

export const mutations = {
    setCurrentTeams(state, value){
        state.currentTeams = value;
    },
    addToAllTeams(state, value){
        state.allTeams.push(value);
    },
    setNextMatch(state, value){
      state.nextMatch = value;
    }
    
}

export const getters = {
    getAllTeams: state => {
        return state.allTeams;
    },
    getCurrentGroupTeams: state => {
        return state.currentTeams;
    },
    getNextMatch: state => {
        return state.nextMatch;
    },

}
