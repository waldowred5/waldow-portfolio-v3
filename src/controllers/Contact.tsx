import React from 'react'
import { PageHeader } from '../components/atoms/PageHeader'
import { SocialLinks } from '../components/molecules/SocialLinks'

export const ContactController = () => {
  return (
    <>
      <PageHeader label='Contact' />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SocialLinks />
      </div>
    </>
  )
}
