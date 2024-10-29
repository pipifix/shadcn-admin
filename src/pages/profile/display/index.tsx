import { DisplayForm } from './display-form'
import ContentSection from '../components/content-section'
import { Card } from '@/components/ui/card'

export default function SettingsDisplay() {
  return (
    <Card className='p-5'>
      <ContentSection
        title='Display'
        desc="Turn items on or off to control what's displayed in the app."
      >
        <DisplayForm />
      </ContentSection>
    </Card>
  )
}
