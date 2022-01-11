const resource = "matches/"
export default $axios => ({
    getCurrentGroupMatches() {
        debugger;
        return $axios.get(`${resource}/group/`)
    },
    getNextMatch() {
        return $axios.get(`${resource}/next/`)
    },
    getSeasonMatches() {
        return $axios.get(`${resource}`)
    },
});