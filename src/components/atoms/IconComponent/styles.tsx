import React from 'react'
import styled from 'styled-components'
import { fontPx } from '../../../utils/layout'
import * as Ai from 'react-icons/ai'
import * as Fa from 'react-icons/fa'
import * as Go from 'react-icons/go'
import * as Si from 'react-icons/si'
import { CSharp } from '../Svgs/CSharp/CSharp'
import { Github } from '../Svgs/Github/Github'

const iconFamilyMap = {
  Ai,
  Fa,
  Go,
  Si,
}

const svgMap = {
  CSharp,
  Github,
}

const StyledIconComponent = styled.div`
  // Display
  display: flex;
  flex-direction: column;
  align-items: center;

  // Sizing
  row-gap: 16px;
`

export const IconLabel = styled.h5`
  // Display
  align-items: center;
  display: flex;

  // Color
  color: #FFFFFF;

  // Font
  font-size: ${fontPx(24)};
  text-align: center;

  // Sizing
  margin: 0;
`

interface IconProps {
  colorWrapper: string
  hasLink: boolean
  sizeWrapper: number
  shadowSize: number
}

export const StyledIconContainer = styled.div`
  // Animation
  transition: all 0.25s ease-in-out;

  // Color
  background: ${({ colorWrapper }: IconProps) => colorWrapper !== '' ? `${colorWrapper}26` : '#C56CEF26'};
  box-shadow: ${({ colorWrapper, shadowSize }: IconProps) => colorWrapper !== ''
          ? `0 0 ${shadowSize}px ${shadowSize}px ${colorWrapper}26`
          : `0 0 ${shadowSize}px ${shadowSize}px #C56CEF26`
  };

  // Display
  align-items: center;
  display: flex;
  justify-content: center;

  // Shape
  border-radius: 100%;

  // Sizing
  height: ${({ sizeWrapper }: IconProps) => `${sizeWrapper}px`};
  width: ${({ sizeWrapper }: IconProps) => `${sizeWrapper}px`};
`

export const StyledLink = styled.a`
  // Display
  display: flex;

  // Shape
  border-radius: 100%;

  ${StyledIconContainer}:hover {
    // Color
    background: #07B8ED26;
    box-shadow: ${({ shadowSize }: IconProps) => `0 0 ${shadowSize}px ${shadowSize}px #07B8ED26`};
  }
`

const StyledCustomIcon = styled(({
  iconFamily,
  icon,
  color,
  size,
}) =>
  React.createElement(iconFamilyMap[iconFamily][icon], {
    color,
    size,
  }),
)`
  // Animation
  transition: all 0.25s ease-in-out;

  // Color
  color: ${({ color }) => color};

  // Sizing
  width: ${({ size }) => size}px;
`

const StyledCustomIconLink = styled(({
  iconFamily,
  icon,
  color,
  size,
}) =>
  React.createElement(iconFamilyMap[iconFamily][icon], {
    color,
    size,
  }),
)`
  // Animation
  transition: all 0.25s ease-in-out;

  // Color
  color: ${({ color }) => color};

  // Sizing
  width: ${({ size }) => size}px;

  ${StyledIconContainer}:hover & {
    fill: #07B8ED;
  }
`

interface CustomIconProps {
  color: string
  hasLink: boolean
  icon: string
  iconFamily: string
  size: number
}

export const CustomIcon = ({
  color,
  hasLink,
  icon,
  iconFamily,
  size,
}: CustomIconProps) => {
  return (
    hasLink
      ? <StyledCustomIconLink {...{
        color,
        icon,
        iconFamily,
        size,
      }} />
      : <StyledCustomIcon {...{
        color,
        icon,
        iconFamily,
        size,
      }} />
  )
}

interface StyledCustomSvgProps {
  color: string
  hasLink: boolean
  svgRef: string
}

const StyledCustomSvg = styled(({
  svgRef,
  ...props
}) =>
  React.createElement(svgMap[svgRef], props),
)``

const StyledCustomSvgLink = styled(Github)``

export const CustomSvg = ({
  color,
  hasLink,
  svgRef,
}: StyledCustomSvgProps) => {
  return (
    hasLink
      ? <StyledCustomSvgLink {...{
        color,
        svgRef,
      }} />
      : <StyledCustomSvg {...{
        color,
        svgRef,
      }} />
  )
}

export default StyledIconComponent
