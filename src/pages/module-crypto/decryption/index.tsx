import { Layout } from '@/components/custom/layout'
import { Button } from '@/components/ui/button'
import DummyContent from '@/components/custom/dummy-content'

import AppHeader from '@/components/host-headercomponents/app-header'

export default function Decryption() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <AppHeader />
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='font-bold text-2xl tracking-tight'>Decryption</h1>
          <div className='flex items-center space-x-2'>
            <Button>Download</Button>
          </div>
        </div>
        <DummyContent title='Module is coming soon' />
      </Layout.Body>
    </Layout>
  )
}
