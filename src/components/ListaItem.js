import React, {useState} from 'react';
import { useEffect } from 'react';
import {
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from "@react-native-community/async-storage";
import {useNavigation} from '@react-navigation/native';

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



function ListaItem (props) {
  const navigation = useNavigation();
  const [chave, setChave] = useState([]);

  useEffect(()=>{
    getChave();
    //alert(chave);
  }, []);

  const getChave = async () => {
    setChave(await AsyncStorage.getItem('@chave'));
    //alert("primeira chave: "+ chave);
  }





  const deletar = (id) =>
  {
      const url = 'http://10.0.2.2:54366/api/todo/'+id;
      const params = 
      {
          method:'DELETE',
          headers:
          {
              Accept:'application/json',
              'Content-Type':'application/json',
              chave: chave
          }
      };
      fetch(url, params);
      
  }


    return(
        <QuadradoDoItem>
                <LinhaDeCimaQuadradoDoItem />
                <Item >
                  <QuadradoInternoDoTextoDoItem>
                    <TextoDoItem>
                      {props.data.nome}
                    </TextoDoItem>
                  </QuadradoInternoDoTextoDoItem>

                    <QuadradoInternoDoitem>
                        <BtnEditarItem onPress={()=>alert(props.data.id)}>
                        <Image 
                          source={require('../img/editar.png')}
                        />
                        </BtnEditarItem>

                        <BtnExcluirItem onPress={()=>deletar(props.data.id)}>
                        <Image 
                          source={require('../img/excluir.png')}
                        />
                        </BtnExcluirItem>

                    </QuadradoInternoDoitem>
                </Item>
              </QuadradoDoItem>
    );
}

export default ListaItem;