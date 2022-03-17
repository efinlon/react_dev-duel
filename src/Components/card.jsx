import styled from 'styled-components'

const StyledCard = styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  border: ${({ b }) => b};
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 5px;
  font-size: ${({ fs }) => fs};
  white-space: pre-line;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
`

const Card = props => {
  return <StyledCard {...props}>{props.children}</StyledCard>
}

export default Card
