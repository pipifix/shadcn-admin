import { LoaderCircle } from 'lucide-react'

export default function Loader() {
  return (
    <div className='flex h-svh w-full items-center justify-center'>
      <LoaderCircle className='animate-spin' size={32} />
      <span className='sr-only'>loading</span>
    </div>
  )
}
