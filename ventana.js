import React, { Component } from 'react'
import { Button, Text, TextInput, View, StyleSheet } from 'react-native'

export default class Ventana extends Component {
    state={
        n1:'',
        n2:'',
        res:' ',
        res1:' ',
    }
    render() {
        const botonmas=()=>{
            let _this=this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //document.getElementById("demo").innerHTML = 
            console.log(xhttp.responseText)
            var datos = xhttp.responseText;
            var datosSeparados = datos.split(',');
            _this.setState({res:datosSeparados[2]});
            _this.setState({res1:datosSeparados[1]});
            }
            };
            xhttp.open("GET", "https://cuceimobile.tech/Escuela/datosudeg.php?codigo="+this.state.n1+"&nip="+this.state.n2, true);
            xhttp.send();
            };
        const botonmenos=()=>{
            let _this=this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //document.getElementById("demo").innerHTML = 
            console.log(xhttp.responseText)
            _this.setState({res:xhttp.responseText});
            }
            };
            xhttp.open("GET", "https://dandan2.000webhostapp.com/datos.php?n1="+this.state.n1+"&n2="+this.state.n2+"&operacion=2", true);
            xhttp.send();
        };
        const botonpor=()=>{
            let _this=this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //document.getElementById("demo").innerHTML = 
            console.log(xhttp.responseText)
            _this.setState({res:xhttp.responseText});
            }
            };
            xhttp.open("GET", "https://dandan2.000webhostapp.com/datos.php?n1="+this.state.n1+"&n2="+this.state.n2+"&operacion=3", true);
            xhttp.send();
        };
        const botondiv=()=>{
            let _this=this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            //document.getElementById("demo").innerHTML = 
            console.log(xhttp.responseText)
            _this.setState({res:xhttp.responseText});
            }
            };
            xhttp.open("GET", "https://dandan2.000webhostapp.com/datos.php?n1="+this.state.n1+"&n2="+this.state.n2+"&operacion=4", true);
            xhttp.send();
        };
        return (
            <View>
                <TextInput 
                    placeholder = 'Código' 
                    keyboardType="number-pad"
                    onChangeText={(n1)=> this.setState({n1})}
                    value={this.state.n1}
                />
                <TextInput 
                    placeholder = 'Contraseña'
                    secureTextEntry={true}
                    onChangeText={(n2) => this.setState({n2})}
                    value={this.state.n2}
                />
                <Text>{this.state.res}</Text>
                <Text>{this.state.res1}</Text>

                <View style={[{ width: "10%", marginLeft:25,  marginTop:100 }]}>
                    <Button color="#CA2602" title='+' onPress={botonmas}/>
                </View> 

                <View style={[{ width: "10%", marginLeft:120 , marginTop:-35}]}>
                    <Button color="#CA2602" title='-' onPress={botonmenos}/>
                </View> 

                <View style={[{ width: "10%", marginLeft:200, marginTop:-35}]}>
                    <Button color="#CA2602" title='*' onPress={botonpor}/>
                </View> 

                <View style={[{ width: "10%", marginLeft:300, marginTop:-35}]}>
                    <Button color="#CA2602" title='/' onPress={botondiv}/>
                </View>
           
            </View>
        )
    }
}
const styles = StyleSheet.create({
        ola:{
            color: 'red',
            width: 100,
            height: 100
        }
  });
