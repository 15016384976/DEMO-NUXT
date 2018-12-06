export const state = () => ({
    user: null
  })
  export const mutations = {
    SET_USER: function (state, user) {
      state.user = user
    }
  }
  export const actions = {
    nuxtServerInit ({ commit }, { req }) {
      if (req.session && req.session.user) {
        commit('SET_USER', req.session.user)
      }
    },
    async nuxtServerSignin({ commit }, { access_token }) {
      return fetch('/nuxtServerSignin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token })
      }).then((res) => {
        return res.json()
      }).then((user) => {
        commit('SET_USER', user)
      })
    },
    async nuxtServerSignout({ commit }) {
      return fetch('/nuxtServerSignout', {
        method: 'POST',
      }).then(() => {
        commit('SET_USER', null)
      })
    }
  }