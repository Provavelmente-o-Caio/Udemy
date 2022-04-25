import React from "react";
import { Text} from "react-native";
import Estilo from "./estilo";

export function MinMax(props) {
    return (
        <Text style={Estilo.centro}>{props.max} é maior que {props.min}</Text>
    )
} 