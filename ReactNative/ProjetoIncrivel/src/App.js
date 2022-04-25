import React from 'react'
import {SafeAreaView, Text, StyleSheet} from 'react-native'
import Primeiro from './components/Primeiro'
import Var, { Comp01, Comp02} from './components/Multi'
import { MinMax } from './components/MinMax'

function App() {
    return (
        <SafeAreaView style={Style.Padrao}>
            <MinMax min={10} max={11}/>
        </SafeAreaView>
    )
}

const Style = StyleSheet.create({
    Padrao: {
        //Mesmo que só flex.
        flexGrow: 1,
        backgroundColor: '#F7E0DB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})

export default App