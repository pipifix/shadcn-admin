import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export function LoginButton() {
  return (
    <Link
      to='/examples/login'
      className={cn(buttonVariants({ variant: 'outline' }))}
    >
      Anmelden
    </Link>
  )
}
