import MatchRepository from '~/repositories/MatchRepository'

export default $axios => ({
  matches: MatchRepository($axios),
})
