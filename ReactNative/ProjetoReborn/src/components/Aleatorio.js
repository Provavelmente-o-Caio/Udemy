import React from "react";
import {Text} from "react-native"
import Estilo from "./estilo";

export function Aleatorio(props) {
    
    const {n1, n2} = {props};
    let max;
    let min;
    
    if (n1 >= n2){
        max = Math.ceil(n1);
        min = Math.floor(n2);
    }
    else {
        max = Math.ceil(n2);
        min = Math.floor(n1);
    }
    
    let aleatorio = Math.floor(Math.random() * (max - min)) + min

    return (
        <Text style={Estilo.centro}>{aleatorio} foi o valor aleatório selecionado</Text>
    )
}