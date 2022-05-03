import React from 'react'
import {SafeAreaView, Text, StyleSheet} from 'react-native'
import Primeiro from './components/Primeiro'
import Var, { Comp01, Comp02} from './components/Multi'
import { MinMax } from './components/MinMax'
import {Aleatorio} from './components/Aleatorio'

function App() {
    return (
        <SafeAreaView style={Style.Padrao}>
            <Aleatorio n1={1} n2={100}/>
        </SafeAreaView>
    )
}

const Style = StyleSheet.create({
    Padrao: {
        //Mesmo que só flex.
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})

export default App