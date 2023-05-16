import React from 'react'
import StyledSocialLinks, { MiddleRow, StyledRow } from './styles'
// import { IconComponent } from '../../atoms/IconComponent'
// import { socialLinksContent } from './data'

export const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      <StyledRow>
        {/* <IconComponent */}
        {/*   content={socialLinksContent} */}
        {/*   group="top" */}
        {/* /> */}
      </StyledRow>
      <MiddleRow>
        {/* <IconComponent */}
        {/*   content={socialLinksContent} */}
        {/*   group="middle" */}
        {/* /> */}
      </MiddleRow>
      <StyledRow>
        {/* <IconComponent */}
        {/*   content={socialLinksContent} */}
        {/*   group="bottom" */}
        {/* /> */}
      </StyledRow>
    </StyledSocialLinks>
  )
}
