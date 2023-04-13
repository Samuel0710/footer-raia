import styled from "styled-components";

export const Container = styled.div`
  background: rgb(236, 236, 236);
  display: flex;
  text-align: center;
  justify-content: center;
  @media (max-width: 1439px){
    padding-bottom: 80px;
  }
`;

export const H3 = styled.p`
 font-size: 8;
 font-weight: bold;
 text-align: center;
 padding: 45px 0;
 color: rgb(105, 105, 105);
 @media (max-width: 1439px){
    width: 50%;
    margin: 20px 25% 15px;
    text-align: left;
  }
`

export const Img2 = styled.img`
padding-left: 10px;
@media (max-width: 1439px){
    padding: 0;
  }
`