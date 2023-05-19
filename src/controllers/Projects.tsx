import React from 'react'
import { PageHeader } from '../components/atoms/PageHeader'
import { TwoColumns } from '../layouts/TwoColumns'
import { Bio } from '../components/organisms/Bio'
import { Skills } from '../components/organisms/Skills'

export const ProjectsController = () => (
  <>
    <PageHeader label='Projects' />
    <TwoColumns>
      <Bio />
      <Skills />
    </TwoColumns>
  </>
)
