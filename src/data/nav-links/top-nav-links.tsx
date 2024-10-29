// this data is for the navigation links in the app-header component
import { TopNavItem } from '@/types/nav'
import { LayoutDashboard, Bell } from 'lucide-react'

export const topNavLinks: {
  links: TopNavItem[]
} = {
  links: [
    {
      title: 'Overview',
      href: 'dashboard/overview',
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: 'Aktivities',
      label: '12',
      href: 'dashboard/activities',
      icon: Bell,
      isActive: false,
    },
    {
      title: 'Products',
      href: 'dashboard/products',
      isActive: false,
    },
    {
      title: 'Settings',
      href: 'dashboard/settings',
      isActive: false,
    },
  ],
}
