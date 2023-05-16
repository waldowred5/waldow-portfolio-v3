import React from 'react'
import PropTypes from 'prop-types'
import StyledHeader, { StyledHeading } from './styles'

interface Props {
  label: string
}

export const PageHeader = ({ label }: Props) => (
  <StyledHeader>
    <StyledHeading>{label}</StyledHeading>
  </StyledHeader>
)

PageHeader.propTypes = {
  label: PropTypes.string
}
