import { NotificationsForm } from './notifications-form'
import ContentSection from '../components/content-section'
import { Card } from '@/components/ui/card'

export default function SettingsNotifications() {
  return (
    <Card className='p-5'>
      <ContentSection
        title='Notifications'
        desc='Configure how you receive notifications.'
      >
        <NotificationsForm />
      </ContentSection>
    </Card>
  )
}
