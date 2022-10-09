import styled from "styled-components";

export const Divdash = styled.div`
  display: flex;
  background: var(---color-backgroun4);
  width: 100%;
  flex-direction: column;

  height: 131px;
  font-size: 18px;
  border-bottom: 2px solid var(---color-background3);
  p {
    margin-left: 52px;
  }
  .Psecond {
    font-size: 12px;
    color: var(---color-gray2);
    margin-top: 10px;
  }
  .Pfirth {
    margin-top: 35px;
  }

  @media (min-width: 530px) {
    flex-direction: row;
    justify-content: space-around;

    .Psecond {
      margin-top: 57px;
    }
    .Pfirth {
      margin-top: 55px;
    }
    p {
    margin-left: 12px;
  }
  }
`;
export const Divdashs = styled.div`
  display: none;

  @media (min-width: 530px) {
    height: 131px;
    justify-content: space-around;
    display: flex;

    p {
      margin-top: 30px;
      margin-left: 130px;
      
      display: flex;
      
      font-size: 18px;
    }
    .Colordif {
      color: var( ---colo-white2);
      font-weight: 700;
      margin-bottom: 0px;
    }
  }
`;
