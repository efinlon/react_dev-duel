import styled from 'styled-components'

const StyledButton = styled.button`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  border: ${({ b }) => b};
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 5px;
  font-size: 20px;
  margin: ${({ margin }) => margin};
  &:hover {
    background: ${({ hover_bg }) => hover_bg};
    cursor: pointer;
  }
`

const Button = props => <StyledButton {...props}></StyledButton>

export default Button
