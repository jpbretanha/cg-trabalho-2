import styled from 'styled-components'

const Button = styled.button(
  props => `
  background: transparent;
  width: 100px;
  min-height: 40px;
  border: none;
  color: #1d4c8d;
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: center;
  font-size: 14px;
  padding: 10px;
  box-shadow: 2px 2px 10px 2px #1d4c8d;
  border: 1px solid #1d4c8d;
  ${
    props.cancel &&
    `
    box-shadow: 2px 2px 10px 2px red;
    border: 1px solid red;
    color: red;
  `
  }
  outline: none;
  cursor: pointer;
`
)

export default Button
