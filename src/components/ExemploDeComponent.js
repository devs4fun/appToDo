import React from 'react';
import styled from 'styled-components/native';

const Div = styled.TouchableHighlight`
    display: flex;    
    justify-content:center;
    align-items:center;
    background-color:#CBCBCB;
    height:40px;
    width:70px;
    margin-right:25px;
    
`;

const Texto = styled.Text `
    color:#8B8B8B;
    font-size:20px;
    font-weight: bold;
`;



function ExemploDeComponent () {

    return(
        <Div >
            <Texto>TESTE</Texto>
        </Div>  
    );
}

export default ExemploDeComponent;