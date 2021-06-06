import _ from 'lodash';
import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import { Actions } from 'react-native-router-flux';

var Healty = 0;
class Smoke extends Component{
    state= {
        imgLungs: ""
    }
    
    Date = () => {
        const { currentUser } = firebase.auth();
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        const firstDay = new Date(currentUser.metadata.creationTime);
        const toDay = new Date(month+'/'+day+'/'+year);
        function getDifferenceInDays(firstDay, toDay) {
            const diffInMs = Math.abs(toDay - firstDay);
            return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        }
    return getDifferenceInDays(firstDay, toDay);
    }
    
    componentDidMount(){        
        const {  isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, sigara, day, month, year, sigarasay, sigarapara } = this.props.user;
        if (sigara === "Evet" && sigarasay === "" ) {
            Healty = 0
        }
        else if (sigarasay === "" || sigarasay === "0") {
            Healty = 100
        }
        else if (this.Date()<21) {      
            Healty = Math.round( this.Date() /2 )
        }
        else if (this.Date()<60) {
            Healty = Math.round( this.Date() /3+3 )
        }
        else {
            Healty = Math.round( this.Date() /4+8 )
        }
        if(Healty>=90){            
            this.setState({
                imgLungs: require('../img/lungs9.png')
            })
        }
        else if(Healty>=75){
            this.setState({
                imgLungs: require('../img/lungs8.png')
            })
        }
        else if(Healty>=58){
            this.setState({
                imgLungs: require('../img/lungs7.png')
            })
        }
        else if(Healty>=45){
            this.setState({
                imgLungs: require('../img/lungs6.png')
            })
        }
        else if(Healty>=30){
            this.setState({
                imgLungs: require('../img/lungs5.png')
            })
        }
        else if(Healty>=22){
            this.setState({
                imgLungs: require('../img/lungs4.png')
            })
        }
        else if(Healty>=15){
            this.setState({
                imgLungs: require('../img/lungs3.png')
            })

        }
        else if(Healty>=7){
            this.setState({
                imgLungs: require('../img/lungs2.png')
            })
        }
        else {
            this.setState({
                imgLungs: require('../img/lungs1.png')
            })            
        }
     }
     onPress = () => {
        Actions.pop();
      };
    
    render(){                  
        const {  isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, sigara, day, month, year, sigarasay, sigarapara } = this.props.user;
        return(             
            <ImageBackground style={Styles.imgBgStyle}>         
                <View style={Styles.headView}>                
                    <TouchableOpacity onPress={ this.onPress }>
                        <Image source={require('../img/backicon.png')} style={{margin: 10}}></Image>
                    </TouchableOpacity>
                    <View style={{alignItems:'center', marginTop: -85}}>                        
                        <Image source={this.state.imgLungs}
                        style={Styles.imgLungs}
                        >
                        </Image> 
                    </View>
                    <View style={Styles.valView}>
                        <Text style={Styles.smokeText}> Kazanılan Akciğer Sağlığı:  </Text>
                        <Text style={Styles.valText}><Text>%</Text>{Healty}</Text>
                    </View>

                    <View style={Styles.valView}>
                        <Text style={{fontSize: 25, paddingTop: 8, paddingEnd:82}}> Cepte Kalan Para:   </Text>
                        <Text style={Styles.valText}>{sigarasay*sigarapara}</Text>
                    </View>

                    <View style={Styles.valView}>
                        <Text style={{fontSize: 25, paddingTop: 8, paddingEnd:50}}> İçilmeyen Gün Sayısı:  </Text>
                        <Text style={Styles.valText}>{ this.Date() }</Text>
                    </View>

                    <View style={Styles.valView}>
                        <Text style={{fontSize: 25, paddingTop: 8, paddingEnd:43}}> Kurtarılan Zaman(dk):  </Text>
                        <Text style={Styles.valText}>{sigarasay*this.Date()*4}</Text>
                    </View>

                    <View style={Styles.valView}>
                        <Text style={{fontSize: 25, paddingTop: 8, paddingEnd:24}}> İçilmeyen Sigara Sayısı:  </Text>
                        <Text style={Styles.valText}>{sigarasay*this.Date()}</Text>
                    </View>                
                </View>
            </ImageBackground>  
        );
    }
}

export default Smoke;