import {
  Column,
  Column2,
  Column3,
  Container,
  Div,
  H2,
  Images,
  Images2,
  Img,
  Line,
} from "../payment-list/style";

const PaymentList = () => {
  return (
    <Div>
      <Container>
        <Column>
          <H2>Meios de pagamento</H2>
          <Images>
            <Img><img src="assets/visa.png" alt="" /></Img>
            <Img><img src="assets/mastercard.png" alt="" /></Img>
            <Img><img src="assets/amex.png" alt="" /></Img>
            <Img> <img src="assets/diners.png" alt="" /></Img>
            <Img> <img src="assets/bradesco.png" alt="" /></Img>
            <Img> <img src="assets/itau.png" alt="" /></Img>
            <Img> <img src="assets/hipercard.png" alt="" /></Img>
            <Img> <img src="assets/jcb.png" alt="" /></Img>
            <Img> <img src="assets/boleto.png" alt="" /></Img>
            <Img> <img src="assets/elo.png" alt="" /></Img>
            <Img> <img src="assets/bb.png" alt="" /></Img>
          </Images>
        </Column>
      </Container>
      <Container>
        <Column2>
          <Line />
          <Column>
            <Images2>
              <H2>Site seguro</H2>
              <Img>
                <a target="_blank" href="https://www.compreconfie.com.br/106409"><img src="assets/confi.png" alt=""/></a>
              </Img>
            </Images2>
          </Column>
        </Column2>

        <Column3>
          <Images>
            <Img>
              <a target="_blank" href="https://www.ebit.com.br/3451/selo"><img src="https://newimgebit-a.akamaihd.net/ebitBR/selo/img_3451.png" /></a>
            </Img>
            <Img>
              <a target="_blank" href="https://certificados.trustvox.com.br/drogaraia"><img src="assets/selo-trustvox.png"/></a>
            </Img>
          </Images>
        </Column3>
      </Container>
    </Div>
  );
};

export default PaymentList;
