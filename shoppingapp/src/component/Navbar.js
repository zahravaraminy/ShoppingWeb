import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from "@material-ui/icons"
import { Badge } from "@material-ui/core"
import { mobile } from "../responsive";

const Language = styled.span`
font-size: 12px;
cursor: pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border : 0.5px solid lightgray;
display : flex;
align-items: center;
margin-left: 25px;
padding : 5px;
font-family:"Urbanist";
`
const Container = styled.div
    `height: 60px;
    ${mobile({ height: "50px" })}
  
`
const Wrapper = styled.div`
    padding : 0px 20px;
    display : flex;
    align-items: center;
    justify-content : space-between;
    ${mobile({ padding: "10px 0px" })}

`
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`
const Left = styled.div`
flex : 1;
display : flex;
align-items: center;
`
const Center = styled.div`
flex : 1;
text-align:center;
`
const Logo = styled.h1`
font-weight : bold;
`
const Right = styled.div`
flex : 1;
display: flex;
align-items: center;
justify-content: flex-end;
    `
const MenuItem = styled.div
`font-size: 14px;
  cursor: pointer;
 margin-left: 25px;
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left> 
        <Language> EN</Language>
        <SearchContainer> 
          <Input/>
          <Search style={{color:"gray", fontSize:16}}/>
        </SearchContainer>
       </Left>
      <Center><Logo> LAMA.</Logo></Center>
      <Right>
        <MenuItem> REGISTER</MenuItem> 
        <MenuItem> SIGN IN</MenuItem> 
        <MenuItem> <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined/>
          </Badge>
          </MenuItem> 
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
