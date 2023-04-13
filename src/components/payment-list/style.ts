import styled from 'styled-components'

export const Container = styled.div`
  background: rgb(236, 236, 236);
  width: 100%;
  height: 100%;
  display: flex;
  margin: 20px 10px;
  padding: 10px 0;
  justify-content: space-between;
  @media (max-width: 1439px){
    display: none;
  }
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
`

export const Column2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Column3 = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`

export const H1 = styled.p`
 font-size: 8;
 font-weight: bold;
 color: rgb(105, 105, 105);
`

export const Line = styled.div`
  height: 95px;
  margin: 20px 10px;
  border: 1px solid rgb(223, 223, 223);
`

export const H2 = styled.p`
 font-size: 8;
 font-weight: bold;
 text-align: left;
 color: rgb(105, 105, 105);
`

export const H3 = styled.p`
 font-size: 8;
 font-weight: bold;
 text-align: center;
 padding: 45px 0;
 color: rgb(105, 105, 105);
`

export const Images = styled.div`
  display: flex;
`

export const Images2 = styled.div`
  padding: 0 30px;
`

export const Img = styled.p`
`

export const Div = styled.div`
  display: flex;
`