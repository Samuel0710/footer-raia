import styled from 'styled-components'

export const Container = styled.div`
  background: rgb(236, 236, 236);
  padding: 40px 0px;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 1439px){
    display: none;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const Bloc2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 10px;
`

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
  text-align: center;
  justify-content: center;
  padding: 0 15px;
  background-color: white;
  border-radius: 15px;
  margin: 18px;
  @media (min-width: 1439px){
    display: none;
  }
`;

export const Bloc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const H1 = styled.p`
 font-size: 8;
 font-weight: 700;
 margin: 0;
 color: #008095;
`

export const H2 = styled.a`
 font-size: 6;
 text-decoration: none;
 color: rgb(105, 105, 105);
 line-height: 1.5;
`

