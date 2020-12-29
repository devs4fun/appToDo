import React, {useState} from 'react';
import { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  Image,
  StyleSheet,
  View
} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from "@react-native-community/async-storage";
import ListaItem from "../components/ListaItem";

import lista from "../dados/lista";
import { cos } from 'react-native-reanimated';


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
  justify-content:center;
  align-items:flex-end;
  margin-right: 25px;
`;

const Logo = styled.Text `
  color: #FFFFFF;
  padding-left: 25px;
  font-size: 20px;
  font-weight: bold;
`;

const DivSair = styled.TouchableHighlight `
  justify-content:center;
  align-items:center;
  background-color:#CBCBCB;
  height:40px;
  width:70px;
`;

const TextoSair = styled.Text `
  color:#8B8B8B;
  font-size:20px;
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

const QuadradoDoItem = styled.View `
  width:100%;
  height: 40px;
  display:flex;
  justify-content:center;
  margin-bottom:50px;
`;

const LinhaDeCimaQuadradoDoItem = styled.View `
  width:100%;
  height: 1px;
  background-color:#8B8B8B;
  margin-bottom:10px;

`;


const Item = styled.View `
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  width: 90%;
  height:64px;
  
  
`;

const QuadradoInternoDoitem = styled.View `
  
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  flex:1;
  
`;

const QuadradoInternoDoTextoDoItem = styled.View `
  
  display: flex;
  flex-direction:row;
  padding-left: 20px;
  align-items:center;
  flex:3;
  
`;

const TextoDoItem = styled.Text`
  
`;

const BtnEditarItem = styled.TouchableHighlight`
  height:50px;
  width:50px;
  justify-content:center;
  align-items:center;
`;

const BtnExcluirItem = styled.TouchableHighlight`
height:50px;
width:50px;
justify-content:center;
align-items:center;
`;

const Listagem = styled.FlatList``;


function IndexScreen (props) {
    var chave;

    const [tarefas, setTarefas] = useState([]);

    useEffect(()=>{
      verificarSeEstaLogado();
    }, []);

    const navigation = useNavigation();

    const verificarSeEstaLogado = async () => {
      chave = await AsyncStorage.getItem('@chave');
      if(chave == null || chave == ""){
          navigation.navigate('Login');
      }
      //alert("chave do verificarSeEstalogado: "+chave);
      getAll();
    }

    const Logout = async () => {
      await AsyncStorage.setItem('@chave', '');
      props.navigation.navigate('Login');
    }


    function getAll()
    {
        const url = 'http://10.0.2.2:54366/api/todo';
        const params = 
        {
            method:'GET',
            headers:
            {
                Accept:'application/json',
                'Content-Type':'application/json',
                chave: chave
            }
        };
        fetch(url, params)
            .then((r)=>r.json())
            .then((json)=>{
              
              if(json){
                
                setTarefas(json);
                //console.log(tarefas);
              }
            }
        );
    }

    const deletar = (item) =>
    {
        verificarSeEstaLogado();
        const url = 'http://10.0.2.2:54366/api/todo/'+item.id;
        console.log(url);
        const params = 
        {
            method:'DELETE',
            headers:
            {
                Accept:'application/json',
                'Content-Type':'application/json',
                chave: "c9cb756c64d5664cb899857fe4abacb1"
            }
        };
        fetch(url, params);
        //alert("chave do deletar: "+chave);
        var PosicaoParaExcluir = tarefas.indexOf(item);
        tarefas.splice(parseInt(PosicaoParaExcluir),1);
        console.log("PosicaoParaExcluir: "+PosicaoParaExcluir);
        console.log(tarefas);
    }

   return (
        <Pagina >
          <Head>
              <EsquerdaHead>
                <Logo>App ToDo</Logo>
              </EsquerdaHead>
              <DireitaHead>
                <DivSair onPress={(Logout)}>
                  <TextoSair>Sair</TextoSair>
                </DivSair>
              </DireitaHead>
          </Head>
          <Body>

              <Titulo>TAREFAS</Titulo>
              
              <Listagem
                data={tarefas}
                renderItem={({item})=>
                <QuadradoDoItem>
                <LinhaDeCimaQuadradoDoItem />
                <Item >
                  <QuadradoInternoDoTextoDoItem>
                    <TextoDoItem>
                      {item.nome}
                    </TextoDoItem>
                  </QuadradoInternoDoTextoDoItem>

                    <QuadradoInternoDoitem>
                        <BtnEditarItem onPress={()=>alert(item.id)}>
                        <Image 
                          source={require('../img/editar.png')}
                        />
                        </BtnEditarItem>

                        <BtnExcluirItem onPress={()=>deletar(item)}>
                        <Image 
                          source={require('../img/excluir.png')}
                        />
                        </BtnExcluirItem>

                    </QuadradoInternoDoitem>
                </Item>
              </QuadradoDoItem>
                }
                keyExtractor={(item)=>item.id.toString()}              
              />

              <Button title="Quantidade de itens?" onPress={()=>{alert(tarefas.length)}} />
              
          </Body>
        </Pagina>
  );
}

export default IndexScreen;

const styles = StyleSheet.create({
  btnBg:{
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
  }
});




