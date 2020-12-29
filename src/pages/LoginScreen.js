import React, {useState} from 'react';
import { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  AsyncStorageStatic
} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";

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

const InputEmail = () => {
  const navigation = useNavigation();
  const [emailOuUsernameDoApp, setEmailOuUsernameDoApp] = useState('');
  const [senhaDoApp, setSenhaDoApp] = useState('');

  const setLocalStorage = async (chave) => {
    //localStorage.setItem('chave',string)
    if(emailOuUsernameDoApp != '' && senhaDoApp != ''){
     await AsyncStorage.setItem('@chave', chave);
    }
    //alert(await AsyncStorage.getItem('@chave'));
  }



  const FazerLogin = () => {
    //alert(emailOuUsernameDoApp + " " + senhaDoApp);

    var emailOuUserName = emailOuUsernameDoApp;
    var senha = senhaDoApp;

    const url = 'http://10.0.2.2:60904/api/usuario/login';
    const params = 
    {
        method:'POST',
        headers:
        {
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify
        (
            {
                "email":emailOuUserName,
                "username":emailOuUserName,
                "senha": senha
            }
        )
    };
    fetch(url, params)
        .then((r)=>r.json())
        .then((json)=>{
            setLocalStorage(json.chave);
            //console.log(json);
            navigation.navigate('Index');
        });
    
  }

  return(
    <>
      <QuadradoInput>
        <EntradaDeDados placeholder="E-mail ou Username" value={emailOuUsernameDoApp} onChangeText={(t)=> setEmailOuUsernameDoApp(t)}></EntradaDeDados>
      </QuadradoInput>

      <QuadradoInput>
        <EntradaDeDados secureTextEntry={true} placeholder="Digite sua senha..." value={senhaDoApp} onChangeText={(t)=>{setSenhaDoApp(t)}}></EntradaDeDados>
      </QuadradoInput>

      <QuadradoBtn onPress={(FazerLogin)} underlayColor="transparent">
        <Btn>
          <BtnTexto>ENTRAR</BtnTexto>
        </Btn>
      </QuadradoBtn>
    </>
  )
}


function LoginScreen (props) {

  const navigation = useNavigation();

  const verificarSeEstaLogado = async () => {
    chave = await AsyncStorage.getItem('@chave');
    if(chave != null || chave != ""){
        navigation.navigate('Index');
        //console.log(chave);
    }
    //alert(chave);
  }


  useEffect(()=>{
    verificarSeEstaLogado();
  }, []);

    const Cadastrese = () => {
        props.navigation.navigate('Cadastro');
      }



   return (
        <Pagina >
          <Head>
              <EsquerdaHead>
                <Logo>App ToDo</Logo>
              </EsquerdaHead>
              <DireitaHead></DireitaHead>
          </Head>
          <Body>
              <Titulo>BEM-VINDO A APP TO DO</Titulo>
              
              <InputEmail/>

              <DivCadastrar onPress={(Cadastrese)} underlayColor="transparent">
                <TextoCadastrar>
                  Novo por aqui? Cadastre-se!
                </TextoCadastrar>
              </DivCadastrar>
          </Body>
        </Pagina>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  btnBg:{
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
  }
});




