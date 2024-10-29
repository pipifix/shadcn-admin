import ProfileForm from './profile-form'
import ContentSection from '../components/content-section'
import { Card } from '@/components/ui/card'

export default function SettingsProfile() {
  return (
    <Card className='p-5'>
      <ContentSection
        title='Profile'
        desc='This is how others will see you on the site.'
      >
        <ProfileForm />
      </ContentSection>
    </Card>
  )
}
