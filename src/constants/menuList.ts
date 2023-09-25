import { Calendar, Chart, Dashboard, User } from '../assets/image/images'
import { routes } from './routes'
export const Menus = [
  { title: 'Dashboard', src: Dashboard, route: routes.dashboard },
  { title: 'Calendar', src: Calendar, route: routes.calender },
  { title: 'User ', src: User, route: routes.user },
  { title: 'Chart ', src: Chart, route: routes.chart }
]
