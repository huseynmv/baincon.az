import FactoryFeatures from '@/components/features/Features'
import HeroSlider from '@/components/hero-slider/HeroSlider'
import InnovationSection from '@/components/innovation/Innovation'
import PartnersSection from '@/components/partners/Partners'
import ProjectSlider from '@/components/projects/ProjectSlider'
import React from 'react'

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
