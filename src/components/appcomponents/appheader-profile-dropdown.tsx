import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/appcomponents/login-button'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { tempUser } from '@/data/temp-context-data/temp-user-1'

export function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative m-0 border-0 p-0'>
          <Avatar className='mr-1 h-10 w-10 rounded-full'>
            <AvatarImage
              src='/avatars/01.png'
              aria-hidden
              alt='Profile Image od User'
            />
            <AvatarFallback
              aria-hidden
              className='dark:blue-300 bg-blue-500 text-white dark:text-gray-500'
            >
              SC
            </AvatarFallback>
          </Avatar>
          Thomas Apfelbacher
          <ChevronDown className='my-3 h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='font-medium text-sm leading-none'>
              {tempUser.accountType && <span>{tempUser.accountType}</span>}
              {tempUser.isAdmin && <span> - Admin</span>}
            </p>
            <p className='text-xs leading-none text-muted-foreground'>
              {tempUser.email ? (
                <>
                  {tempUser.accountType !== 'Businesskonto' ? (
                    <span>{tempUser.email}</span>
                  ) : (
                    <span>{tempUser.companyEmail}</span>
                  )}
                </>
              ) : (
                <LoginButton />
              )}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to='/dashboard/profile/'>Profileinstellungen </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Konto und Sicherheit</DropdownMenuItem>
          <DropdownMenuItem>
            <Link to='/dashboard/adressbook/owncontacts'>Adressbuch </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
