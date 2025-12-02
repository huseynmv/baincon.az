import FactoryFeatures from '@/components/features/Features'
import HeroSlider from '@/components/hero-slider/HeroSlider'
import InnovationSection from '@/components/innovation/Innovation'
import PartnersSection from '@/components/partners/Partners'
import ProjectSlider from '@/components/projects/ProjectSlider'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baincon – Təmir, Tikinti və Neft Avadanlıqları',
  description: 'Baincon bina təmiri, tikinti xidmətləri, neft boruları, yüksək təzyiqli nasoslar və boruların yuyulması üzrə peşəkar xidmətlər göstərir.',
  keywords: 'təmir, tikinti, neft avadanlıqları, boru izolyasiyası, nasos təchizatı, boruların yuyulması',
  alternates: { canonical: 'https://www.baincon.az' },
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div id='about'>
        <FactoryFeatures />
      </div>
      <InnovationSection />
      <PartnersSection />
      <div id="projects">
        <ProjectSlider />
      </div>
    </>
  )
}
