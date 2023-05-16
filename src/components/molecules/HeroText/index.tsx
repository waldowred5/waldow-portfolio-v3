import React from 'react'
import HeroContainer, {
  PrimaryHeadingWrapper,
  PrimaryHeading,
  SecondaryHeading,
  StyledDivider,
  StyledHeroText,
  SuffixHeading,
  SecondaryHeadingWrapper,
  SecondaryHeadingLinkWrapper, SecondaryHeadingLink,
} from './styles'

export const HeroText = () => {
  return (
    <>
      <HeroContainer>
        <StyledDivider/>
        <StyledHeroText>
          <PrimaryHeadingWrapper>
            <PrimaryHeading>WALDOW</PrimaryHeading>
            <SuffixHeading>.the.dev</SuffixHeading>
          </PrimaryHeadingWrapper>
          <SecondaryHeadingWrapper>
            <SecondaryHeading>
              Thrill seeker by day, developer by night
            </SecondaryHeading>
            <SecondaryHeadingLinkWrapper>
              <SecondaryHeadingLink to="/macbook">💻</SecondaryHeadingLink>
            </SecondaryHeadingLinkWrapper>
          </SecondaryHeadingWrapper>
        </StyledHeroText>
      </HeroContainer>
    </>
  )
}
