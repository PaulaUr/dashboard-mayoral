import styled from 'styled-components';


export const DashboardContainerStyle = styled.div`
display: grid;
gap: 1rem;
grid-auto-flow: dense;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 260px));
grid-auto-rows: 22rem;
row-gap: 3rem;
font-size: 16px;
justify-content: space-around;
margin-top: 30px;

@media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(min(100%, 8rem), 1fr));
  }
`;

export const DashboardCardContainerStyle = styled.div`
  display: flex;
  flex-direction: column; 
  background-color: #F5F5F5;
  margin: 8px;
  padding: 18px;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(63, 81, 181, 0.6);

  &:hover {
    opacity: 0.8;
  }
`;

export const DashboardHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
`;

