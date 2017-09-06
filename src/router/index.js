import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event'
import Grid from '@/components/EventListGrid'
import HistoricalEvents from '@/components/EventPages/HistoricalEvents'
import AlarmEvents from '@/components/EventPages/AlarmEvents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/HistoricalEvents',
      name: 'HistoricalEvents',
      component: HistoricalEvents
    },
    {
      path: '/AlarmEvents',
      name: 'AlarmEvents',
      component: AlarmEvents
    }
  ]
})
