import { AccountForm } from './account-form'
import ContentSection from '../components/content-section'
import { Card } from '@/components/ui/card'

export default function SettingsAccount() {
  return (
    <Card className='p-5'>
      <ContentSection
        title='Account'
        desc='Update your account settings. Set your preferred language and
          timezone.'
      >
        <AccountForm />
      </ContentSection>
    </Card>
  )
}
