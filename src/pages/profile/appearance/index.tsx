import { AppearanceForm } from './appearance-form'
import ContentSection from '../components/content-section'
import { Card } from '@/components/ui/card'

export default function SettingsAppearance() {
  return (
    <Card className='p-5'>
      <ContentSection
        title='Appearance'
        desc='Customize the appearance of the app. Automatically switch between day
          and night themes.'
      >
        <AppearanceForm />
      </ContentSection>
    </Card>
  )
}
