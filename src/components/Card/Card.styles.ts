import styled from 'styled-components';

export const CardImgContainerStyle = styled.div`
  display: block;
  text-align: center;
  width: calc(100% + 2rem);
  margin: 0 -1rem;
  &:hover {
    transform: scale(1.1);
    transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    & .content {
      opacity: 0.9;
    }
  }
`;

export const CardImgStyle = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 150px;
  object-position: bottom;
`;

export const CardBodyStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 0.6rem;
  color: #303030;
  padding: 5px;
  text-align: center;
`;

export const CardTitleStyle = styled.div`
display: -webkit-box;
  text-align: center;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardDescriptionStyle = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardPriceStyle = styled.div`
  color: rgba(177, 33, 217, 0.99);
`;

export const CardAddStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardAddButtonStyle = styled.button`
  background-color: #008CBA;
  border: none;
  border-radius: 4px;
  font-size: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
`;
