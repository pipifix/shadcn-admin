import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Languages, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function LanguageSwitcher() {
  const [language, setLanguage] = React.useState('Deutsch')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='relative m-0 flex flex-row justify-items-center border-0 p-0'
        >
          <Languages className='b-2 m-2 flex h-6 w-6 text-primary' />
          {language} <ChevronDown className='m-2 h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>
              Wähle eine Sprache aus
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value='Deutsch'>Deutsch</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='English'>
            Englisch
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='Francais'>
            Französisch
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
