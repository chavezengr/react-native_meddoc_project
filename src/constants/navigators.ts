import {
  ForgotPassword,
  Home,
  Login,
  Registration,
  Welcome,
} from '../pages/main'
import {
  ConsultationClinics,
  Forums,
  MedicineShops,
  Notifications,
  Settings,
} from '../pages'

type authRouterParams = {
  id: any
  name: string
  component: any
  options?: object
}

export const authRouter: authRouterParams[] = [
  {
    id: 1,
    name: 'Welcome',
    component: Welcome,
    options: { headerShown: false },
  },
  { id: 2, name: 'Login', component: Login },
  { id: 3, name: 'Registration', component: Registration },
  { id: 4, name: 'ForgotPassword', component: ForgotPassword },
  { id: 5, name: 'Home', component: Home, options: { headerShown: false } },
]

export const drawerRouter: authRouterParams[] = [
  {
    id: 1,
    name: 'MedicineShops',
    component: MedicineShops,
    options: { headerTitle: 'Medicines', drawerLabel: 'Medicine Shops' },
  },
  {
    id: 2,
    name: 'ConsultationClinics',
    component: ConsultationClinics,
    options: {
      headerTitle: 'Consultations',
      drawerLabel: 'Consultation Clinics',
    },
  },
  {
    id: 3,
    name: 'Notifications',
    component: Notifications,
    options: { headerTitle: 'Notifications' },
  },
  {
    id: 4,
    name: 'Forums',
    component: Forums,
    options: { headerTitle: 'Forums' },
  },
  {
    id: 5,
    name: 'Settings',
    component: Settings,
    options: { headerTitle: 'Settings' },
  },
]
