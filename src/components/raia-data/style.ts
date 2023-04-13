import styled from "styled-components";

export const Img = styled.p`
padding: 0 15px;
`

export const Column = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 25px 0 10px;
  padding: 20px 0 10px;
  @media (max-width: 1439px){
    display: none;
  }
`

export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: rgb(230,230,230);
  @media (max-width: 1439px){
    display: none;
  }
`

export const Paragraph = styled.p`
font-size: 12.8px;
text-align: left;
color: #696969;
padding-left: 20px;
margin: 0 0 0 40px;
line-height: 1.0;
`

export const H1 = styled.p`
font-size: 14px;
color: #008095;
font-family: 'Open Sans';
`

export const H2 = styled.p`
font-size: 14px;
color: #696969;
font-family: 'Open Sans';
`