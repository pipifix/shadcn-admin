import * as React from 'react'

import ProtectrLogo from '../svg/app-logo-small'
import { sidebarLinks } from '@/data/nav-links/sidebar-links' // Importiere die Sidebar-Daten
import { NavMainLinks } from '@/components/host-sidebarcomponents/nav-main-links'
import { NavProfileLinks } from '@/components/host-sidebarcomponents/nav-profile-links'
import { NavFeatureRequestLinks } from '@/components/host-sidebarcomponents/nav-featurerequest-links'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader className='border-color-slate-50 border-box h-16 place-content-center border-b p-3 text-primary transition-all group-data-[collapsible=icon]:p-2'>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className='flex items-center gap-2 text-primary'>
              <ProtectrLogo className='tansition-800ms ml-2 transition-all group-data-[collapsible=icon]:ml-0' />
              <span className='text-xl group-data-[collapsible=icon]:hidden'>
                pro<span className='font-bold'>TECT</span>r
              </span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMainLinks items={sidebarLinks.navMain} />
        <NavProfileLinks items={sidebarLinks.profile} />
        <NavFeatureRequestLinks />
      </SidebarContent>
      <SidebarFooter>Hello</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
