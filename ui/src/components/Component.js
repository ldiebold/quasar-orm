import { QBadge } from 'quasar'

export default {
  name: 'RemoveMe',

  render (h) {
    return h(QBadge, {
      staticClass: 'RemoveMe',
      props: {
        label: 'RemoveMe'
      }
    })
  }
}
