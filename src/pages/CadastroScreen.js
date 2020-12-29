import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import styled from 'styled-components/native';
import {NavigationBar, NavigationContainer} from '@react-navigation/native'


const Pagina = styled.SafeAreaView `
  flex:1;
`;


const Head = styled.View `
  backgroundColor:#8B8B8B;
  display:flex;
  flex-direction:row;
  height:80px;
`;

const EsquerdaHead = styled.View `
  height:80px;
  flex:1;
  justify-content:center;
`;

const DireitaHead = styled.View `
  height:80px;
  flex:1;
`;

const Logo = styled.Text `
  color: #FFFFFF;
  padding-left: 25px;
  font-size: 20px;
  font-weight: bold;
`;

const Body = styled.View `
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
`;

const Titulo = styled.Text `
  color: #8B8B8B;
  font-size: 24px;
  padding: 30px 0 30px 0;
`;

const QuadradoInput = styled.View `
  padding: 30px 0 10px 0;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;

`;
const EntradaDeDados = styled.TextInput `
  height: 64px;
  width: 90%;
  border: 1px solid #CBCBCB;
  font-size:18px;
  padding-left: 20px;
  font-weight: bold;
  color:#8B8B8B;
  border-radius: 5px;
`;

const QuadradoBtn = styled.TouchableHighlight `
  display: flex;
  justify-content:center;
  width:90%;
  border: none;
  background-color:#CBCBCB;
  border-radius:5px;
  height:64px;
  margin: 30px 0 10px 0;
`;

const Btn = styled.View`
  display: flex;
  justify-content:center;
  align-items:center;
`;

const BtnTexto = styled.Text`
    color:#FFF;
    font-size:30px;
    font-weight: bold;
`;

const DivCadastrar = styled.TouchableHighlight `
display: flex;
justify-content:center;
align-items:center;
width:100%;
margin-top:40px;
`;

const TextoCadastrar = styled.Text`

`;

const Scroll = styled.ScrollView``;


function CadastroScreen (props) {

    const Login = () => {
        props.navigation.navigate('Login');
      }

      const Cadastrar = () => {
        alert('Realizar cadastro teste!');
        props.navigation.navigate('Login');
      }

   return (
        <Pagina >
          <Head>
              <EsquerdaHead>
                <Logo>App ToDo</Logo>
              </EsquerdaHead>
              <DireitaHead></DireitaHead>
          </Head>
          <Scroll>
          <Body>
              <Titulo>BEM-VINDO A APP TO DO</Titulo>
              <QuadradoInput>
                <EntradaDeDados placeholder="Nome Completo"></EntradaDeDados>
              </QuadradoInput>

              <QuadradoInput>
                <EntradaDeDados placeholder="Username"></EntradaDeDados>
              </QuadradoInput>

              <QuadradoInput>
                <EntradaDeDados placeholder="E-mail"></EntradaDeDados>
              </QuadradoInput>

              <QuadradoInput>
                <EntradaDeDados secureTextEntry={true} placeholder="Senha"></EntradaDeDados>
              </QuadradoInput>

              <QuadradoBtn onPress={(Cadastrar)} underlayColor="transparent">
                <Btn>
                  <BtnTexto>Cadastrar</BtnTexto>
                </Btn>
              </QuadradoBtn>
              
              <DivCadastrar onPress={(Login)} underlayColor="transparent">
                <TextoCadastrar>
                  Já tem Cadastro? Fazer login!
                </TextoCadastrar>
              </DivCadastrar>
          </Body>
          </Scroll>
        </Pagina>
  );
}

export default CadastroScreen;

const styles = StyleSheet.create({
  btnBg:{
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
  }
});




