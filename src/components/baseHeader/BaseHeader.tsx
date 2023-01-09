import React from "react";
import * as Styled from './BaseHeader.styled'
import { useNavigation } from "@react-navigation/native";

interface Types {
   title: string;
}

export const BaseHeader: React.FC<Types> = ({title}) => {

   const { goBack } = useNavigation()

   return(
      <Styled.Container>
         <Styled.BackButton onPress={()=> goBack()}>
            <Styled.Icones/>
         </Styled.BackButton>
         <Styled.Title>
            {title}
         </Styled.Title>
      </Styled.Container>
   )
}