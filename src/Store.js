import Vue from 'vue'
import Vuex from 'vuex'
import {generateWords, asHashTags, asAbbr} from './Generator'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
  state: {
    count: 0,
    title: 'Unicorn Mobile First IoT Ready Cloud Architecture',
    hashTags: ['#loveUMFIOTRCA', '#fantasticUMFIOTRCA', '#stopUMFIOTRCA', '#UMFIOTRCAFirst']
  },
  mutations: {
    increment (state) {
      state.count++
    },
    generate (state) {
      // Generate new buzzwords variant
      let newVariant = generateWords()
      // Update store state
      state.title = newVariant.join(' ')
      state.hashTags = asHashTags(asAbbr(newVariant))
    }
  }
})

