import React from 'react'
import HeroContainer, {
  HorizontalSeparator,
  PrimaryHeadingWrapper,
  PrimaryHeading,
  PrefixPrimaryHeading,
  SecondaryHeadingWrapper, SecondaryHeading, SecondaryHeadingGridWrapper, VerticalSeparator,
} from './styles'

export const HeroText = () => {
  return (
    <>
      <HeroContainer>
        <div></div>
        <PrimaryHeadingWrapper>
          <PrefixPrimaryHeading>DANIEL</PrefixPrimaryHeading>
          <PrimaryHeading>WALDOW</PrimaryHeading>
          <HorizontalSeparator/>
        </PrimaryHeadingWrapper>
        <SecondaryHeadingWrapper>
          <SecondaryHeadingGridWrapper>
            <SecondaryHeading>FULL-TIME WEB DEV</SecondaryHeading>
            <VerticalSeparator/>
            <SecondaryHeading>PART-TIME GAME DEV</SecondaryHeading>
          </SecondaryHeadingGridWrapper>
          <SecondaryHeading>CASUAL HUMAN</SecondaryHeading>
          <SecondaryHeading></SecondaryHeading>
        </SecondaryHeadingWrapper>
      </HeroContainer>
    </>
  )
}
