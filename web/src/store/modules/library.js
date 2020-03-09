import { set } from '@/utils/vuex'

export default {
  namespaced: true,

  state: {
    installed: [1, 4, 8],
    games: [1, 4, 8],
  },

  getters: {
    games: (state, getters, rootState, rootGetters) => {
      const games = []
      const installed = state.installed

      for (const game of rootGetters['games/parsedGames']) {
        if (!state.games.includes(game.id)) continue

        games.push({
          ...game,
          installed: installed.includes(game.id),
        })
      }

      return games.sort((a, b) => {
        if (!a.installed) return 1
        if (!b.installed) return -1
        return 0
      })
    },
  },

  mutations: {
    setInstalled: set('installed'),
  },
}
