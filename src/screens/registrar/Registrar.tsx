import React, { useState } from "react";
import * as Styled from './Registrar.styled'
import { BaseHeader } from "../../components/baseHeader/BaseHeader";
import { BaseButton } from "../../components/baseButton/BaseButton";

const data = [
   { text: 'Nome', type: '', txtButtom: 'Próximo' },
   { text: 'Idade', type: 'numeric', txtButtom: 'Próximo' },
   { text: 'Telefone', type: 'numeric', txtButtom: 'Próximo' },
   { text: 'E-mail', type: '', txtButtom: 'Próximo' },
   { text: 'Renda Mensal', type: 'numeric', txtButtom: 'Próximo' },
   { text: 'Cidade', type: '', txtButtom: 'Próximo' },
   { text: 'Estado', type: '', txtButtom: 'Próximo' },
   { text: 'Crie uma senha', type: 'numeric', txtButtom: 'Próximo' },
   { text: 'Confirme a Senha', type: 'numeric', txtButtom: 'Salvar' },
]


export const Registrar: React.FC = () => {

   const [indice, setIndice] = useState(0)

   const Next = () => {
      setIndice(indice + 1)
   }

   return (
      <>
         <BaseHeader title={'Registrar'} />
         <Styled.Container>
            <Styled.ItensText>{data[indice].text}</Styled.ItensText>
            <Styled.Input placeholder={data[indice].text} keyboardType={data[indice].type} secureTextEntry={indice >= 7 ? true : false} />
            <BaseButton text={data[indice].txtButtom} onPress={() => Next()} />
         </Styled.Container>
      </>
   )
}