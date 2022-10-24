import styled from "styled-components";

export const NavLogin = styled.div`
  display: flex;
  height: 114px;
  background: var(---color-backgroun4);
  width: 100%;
  
  justify-content: center;
  align-items: center;
  img{
    margin-top: 57px;
  }
  
  
`;

export const NavSingup = styled.div`
  display: flex;
  height: 114px;
  background: var(---color-backgroun4);
  max-width: 100%;
  align-items: center;
  justify-content: center;
  align-items: center;
  img{
  margin-left: 13px;
  margin-right: 110px;
  }
  button{
    margin-right: 13px;
    background: var(---color-background3);
    width: 79px;
    height: 32px;
    border-radius: 4px;
    color: var(---colo-white2);
    font-size: 9.59437px;
  }
  .Link{
    color: var(---colo-white2);
    text-decoration: none;
    
    
  }
`;

export const NavDashboard = styled.div`
  display: flex;
  height: 114px;
  background: var(---color-backgroun4);
  width: 100%;
  border-bottom: 2px solid var(---color-background3);
  
  justify-content: space-around;
  align-items: center;
  img{
  margin-left: 13px;
  }
  button{
    margin-right: 13px;
    background: var(---color-background3);
    width: 79px;
    height: 32px;
    border-radius: 4px;
    color: var(---colo-white2);
    font-size: 9.59437px;
  }
  .Link{
    color: var(---colo-white2);
    text-decoration: none;
  }
  @media (min-width: 530px){
    img{
      margin-right: 140px;
    }
  }


`;
