import React from 'react';
import { useEffect } from 'react';
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


function DeleteScreen (props) {

    const IrParaIndex = () => {
        props.navigation.navigate('Index');
      }

      useEffect(()=>{
        IrParaIndex();
      }, []);

   return (
        <Pagina >
          <Head>
              <EsquerdaHead>
                <Logo>App ToDo</Logo>
              </EsquerdaHead>
              <DireitaHead></DireitaHead>
          </Head>

          <Body>
              <Titulo>DELETEANDO</Titulo>
          </Body>
        </Pagina>
  );
}

export default DeleteScreen;

const styles = StyleSheet.create({
  btnBg:{
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
  }
});




