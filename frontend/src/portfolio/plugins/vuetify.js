import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                secondary: colors.grey.base,
                accent: colors.pink.lighten1,
            }
        }
    }
}

export default new Vuetify(opts)
