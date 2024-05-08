import { ReactNode, CSSProperties } from 'react';
import { ButtonStyle } from './CustomButton.styles';

interface CustomButtonProps {
  handleClick: () => void;
  children: ReactNode | string;
  style?: CSSProperties;
}

export const CustomButton = ({ handleClick, children, style }: CustomButtonProps) => {
  return (
    <ButtonStyle style={style} onClick={handleClick}>
      {children}
    </ButtonStyle>
  );
};
