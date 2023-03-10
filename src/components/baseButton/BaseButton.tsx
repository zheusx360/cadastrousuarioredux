import React from "react";
import * as Styled from './BaseButton.styled'

interface Types{
   size?: number;
   bgColor?: String;
   heigth?: number;
   radius?: number;
   text: String;
   txtColor?: String;
   txtSize?: number;
   onPress: ()=> void;
}

export const BaseButton: React.FC<Types> = ({size,bgColor,heigth,radius,text,txtColor,txtSize,onPress}) => {
   return(
     
      <Styled.Buttom onPress={onPress} size={size} color={bgColor} heigth={heigth} radius={radius}>
         <Styled.TextButtom txtcolor={txtColor} txtsize={txtSize}>
               {text}
         </Styled.TextButtom>
      </Styled.Buttom>

   )
}