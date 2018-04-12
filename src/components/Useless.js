import React, { Component } from 'react'
import styled from 'styled-components'

import { GRAY } from '../utils/const'

export const H = styled.div`
  display: flex;
  align-items: center;
`
export const V = styled.div`
  display: flex;
  flex-direction: column;
`
export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`
export const FlexAuto = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const Separator = props => {
  return <div {...props} />
}
Separator.defaultProps = {
  style: {
    backgroundColor: GRAY,
    height: 0.5,
  },
}
