import React from 'react'
import StyledTwoColumns, {
  ColumnDivider,
  ColumnWrapper,
  PrimaryColumn,
  SecondaryColumn,
} from './styles'
import PropTypes from 'prop-types'

export const TwoColumns = ({ children }) => {
  return (
    <StyledTwoColumns>
      <ColumnWrapper>
        <PrimaryColumn>{children[0]}</PrimaryColumn>
        <ColumnDivider/>
        <SecondaryColumn>{children[1]}</SecondaryColumn>
      </ColumnWrapper>
    </StyledTwoColumns>
  )
}

TwoColumns.propTypes = {
  children: PropTypes.array,
}
