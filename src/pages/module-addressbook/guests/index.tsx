import { Layout } from '@/components/custom/layout'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import DummyContent from '@/components/custom/dummy-content'

import AppHeader from '@/components/host-headercomponents/app-header'

export default function GuestAdressbook() {
  const navigate = useNavigate()
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <AppHeader />
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='font-bold text-2xl tracking-tight'>
            Addressbook - Guest connections
          </h1>
          <div className='flex items-center space-x-2'>
            <Button variant='outline' onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </div>
        </div>
        <DummyContent title='Module is coming soon' />
      </Layout.Body>
    </Layout>
  )
}
