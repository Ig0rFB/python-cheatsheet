import VueGtag from 'vue-gtag'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const inProduction = import.meta.env.VITE_IN_PRODUCTION
  console.log('inProduction', inProduction)
  if (inProduction) {
    const gTag = import.meta.env.VITE_GTAG || 'tag'
    app.use(VueGtag, {
      config: { id: gTag },
    })
  }
}
