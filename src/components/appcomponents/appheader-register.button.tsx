import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function UpgradeButton() {
  return (
    <Link
      to='./register'
      className={cn(buttonVariants({ variant: 'default' }), 'bg-orange-600')}
    >
      Konto-Upgrade
    </Link>
  )
}
