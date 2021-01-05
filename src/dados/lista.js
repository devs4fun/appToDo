
/*
import React, {useState} from 'react';
import { useEffect } from 'react';
import AsyncStorage from "@react-native-community/async-storage";

function IndexScreen (props) {
    var chave;
    
    const [tarefas, setTarefas] = useState([]);

    var TarefaExterna = tarefas;

    useEffect(()=>{
      verificarSeEstaLogado();
    }, []);

    const verificarSeEstaLogado = async () => {
      chave = await AsyncStorage.getItem('@chave');
      getAll();
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
}



export default TarefaExterna;



export default [
    {id: 9, idUsuario: 1, nome: "Estudar c# amanhã!"}
];
*/
/*
for(i = 0; i < json.length; i++){
    listaDeTarefas.push({id: json[i].id, idUsuario: json[i].idUsuario, nome: json[i].nome});
}            
*/