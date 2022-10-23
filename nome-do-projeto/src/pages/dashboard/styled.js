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
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 530px) {
    height: 50px;
    justify-content: space-around;
    display: flex;

    p {
      margin-top: 30px;

      display: flex;

      font-size: 18px;
    }
    .Colordif {
      color: var(---colo-white2);
      font-weight: 700;
      margin-bottom: 30px;
      height: 18px;
    }
  }
`;

export const TecList = styled.ul`
  width: 780px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  height: 416px;
  background-color: #212529;
  overflow-y: auto;
  .List {
    width: 95%;
    display: flex;
    justify-content: space-between;
    background-color: #121214;
    align-items: center;
    height: 49px;
    margin-top: 23px;
    margin-left: 23px;
    border-radius: 4px;
    .Divlist {
      display: flex;
      margin-right: 18px;
    }
    .Title {
      margin-left: 10px;
    }
    button {
      margin-left: 10px;
    }
  }
`;

export const DivUl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 416px;

  @media (min-width: 530px) {
    justify-content: space-around;
    display: flex;

    .Colordif {
      color: var(---colo-white2);
      font-weight: 700;
      margin-bottom: 30px;
      height: 18px;
    }
  }
`;

export const DivModal = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(33, 37, 41, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;

  .Modal {
    width: 369px;
    min-height: 292px;
    background-color: black;

    flex-direction: column;
    justify-content: space-around;
  }
  .TitleModal {
    width: 368px;
    height: 50px;
    background-color: gray;
    display: flex;
    justify-content: space-between;
  }
  .PmodalTitle {
    width: 147px;
    height: 50px;
    margin-top: 15px;
    margin-left: 20px;
    font-size: 14px;
  }
  .Registertech {
    width: 324px;
    height: 48px;
    background-color: #ff577f;
    border-radius: 4.06066px;
    margin-left: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(---colo-white2);
    text-decoration: none;
    margin-bottom: 10px;
  }
  .CloseModal {
    width: 11px;
    height: 26px;
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: gray;
    text-decoration: none;
    margin-right: 10px;
  }
  input {
    width: 329px;
    height: 48px;
    margin-left: 22px;
  }
  select {
    width: 329px;
    height: 48px;
    margin-bottom: 20px;
  }
  .Tech {
    margin-left: 22px;
  }
`;
