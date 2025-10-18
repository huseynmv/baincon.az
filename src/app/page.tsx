import FactoryFeatures from '@/components/features/Features'
import HeroSlider from '@/components/hero-slider/HeroSlider'
import InnovationSection from '@/components/innovation/Innovation'
import ProjectSlider from '@/components/projects/ProjectSlider'
import React from 'react'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FactoryFeatures />
      <InnovationSection />
      <ProjectSlider />
    </>
  )
}
