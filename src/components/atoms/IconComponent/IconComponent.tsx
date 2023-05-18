import React from 'react'
import StyledIconComponent, {
  CustomIcon,
  CustomSvg,
  IconLabel,
  StyledIconContainer,
  StyledLink,
} from './styles'

interface IconContainerProps {
  color: string
  colorWrapper: string
  hasLink: boolean
  icon: string
  iconFamily: string
  shadowSize: number
  size: number
  sizeWrapper: number
  svgRef: string
}

const IconContainer = (
  {
    color,
    colorWrapper,
    hasLink,
    icon,
    iconFamily,
    shadowSize = 18,
    size,
    sizeWrapper,
    svgRef = '',
  }: IconContainerProps) => {
  return (
    <StyledIconContainer
      colorWrapper={colorWrapper}
      hasLink={hasLink}
      sizeWrapper={sizeWrapper}
      shadowSize={shadowSize}
    >
      {
        svgRef !== ''
          ? <CustomSvg
            color={color}
            hasLink={hasLink}
            svgRef={svgRef}
          />
          : <CustomIcon
            color={color}
            hasLink={hasLink}
            icon={icon}
            iconFamily={iconFamily}
            size={size}
          />
      }
    </StyledIconContainer>
  )
}

interface IconComponentProps {
  content: object
  group: string
}

export const IconComponent = ({
  content,
  group,
}: IconComponentProps) => {
  return (
    <>
      {
        content[group].map(({
          color = '',
          colorWrapper = '',
          icon = '',
          iconFamily = '',
          sizeWrapper = 82,
          label = '',
          link = '',
          shadowSize = 18,
          size = 0,
          svgRef = '',
        }) => {
          return (
            <StyledIconComponent key={icon}>
              {
                link !== ''
                  ? <StyledLink
                    href={link}
                    shadowSize={shadowSize}
                    target="_blank"
                  >
                    <IconContainer
                      color={color}
                      colorWrapper={colorWrapper}
                      hasLink={link !== ''}
                      icon={icon}
                      iconFamily={iconFamily}
                      sizeWrapper={sizeWrapper}
                      shadowSize={shadowSize}
                      size={size}
                      svgRef={svgRef}
                    />
                  </StyledLink>
                  : <IconContainer
                    color={color}
                    colorWrapper={colorWrapper}
                    hasLink={link !== ''}
                    icon={icon}
                    iconFamily={iconFamily}
                    sizeWrapper={sizeWrapper}
                    shadowSize={shadowSize}
                    size={size}
                    svgRef={svgRef}
                  />
              }
              {label !== '' && <IconLabel>{label}</IconLabel>}
            </StyledIconComponent>
          )
        })
      }
    </>
  )
}
