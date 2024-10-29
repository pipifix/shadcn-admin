import ThemeSwitch from '@/components/theme-switch'
import { CompanyDropdown } from './appheader-company-dropdown'
import { LanguageSwitcher } from './language-switcher'
import { LoginButton } from './login-button'
import { UpgradeButton } from '@/components/host-headercomponents/appheader-upgrade-button'
import { ProfileDropdown } from './appheader-profile-dropdown'
import { tempUser } from '@/data/user-context-data/temp-user-1'
/* 
import { TopNav } from '@/components/host-headercomponents/top-nav'
import { topNavLinks } from '@/data/nav-links/top-nav-links' 
*/

import { SidebarTrigger } from '@/components/ui/sidebar'

export default function AppHeader() {
  return (
    <>
      <div className='flex items-center gap-2'>
        <SidebarTrigger className='-ml-1 opacity-55 hover:opacity-90' />
      </div>
      {/*   <div>
        <TopNav links={topNavLinks.links} />
      </div> */}
      <div className='flex items-center space-x-4'>
        <LanguageSwitcher />
        <ThemeSwitch />
        {tempUser.isLoggedIn ? (
          <>
            <ProfileDropdown />
            {tempUser.accountType !== 'Businesskonto' && <UpgradeButton />}
            {tempUser.isAdmin || (tempUser.isOrgaAdmin && <CompanyDropdown />)}
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </>
  )
}
