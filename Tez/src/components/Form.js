import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from './Styles';

const { width, height } = Dimensions.get('window');

class Form extends Component {

  state = {
    plus: require('../img/plus.png'),
    cup: require('../img/cup.png'),
    cigarette: require('../img/sigara.png'),
    cup1: require('../img/plus.png'),
    cup2: require('../img/plus.png'),
    cup3: require('../img/plus.png'),
    cup4: require('../img/plus.png'),
    cup5: require('../img/plus.png'),
    cup6: require('../img/plus.png'),
    cup7: require('../img/plus.png'),
    cup8: require('../img/plus.png'),
    count:1
    //Healty: 0
  };
  onPress = () => {
    switch(this.state.count) {
      case 1:
        this.setState({
          cup1: this.state.cup,
          count: this.state.count+1
        });
        break;
      
      case 2:
        this.setState({
          cup2: this.state.cup,
          count: this.state.count+1
        });
        break;
 
      case 3:
        this.setState({
          cup3: this.state.cup,
          count: this.state.count+1
        });
        break;
 
      case 4:
        this.setState({
          cup4: this.state.cup,
          count: this.state.count+1
        });
        break;
      case 5:
        this.setState({
          cup5: this.state.cup,
          count: this.state.count+1
        });
        break;
      case 6:
        this.setState({
          cup6: this.state.cup,
          count: this.state.count+1
        });
        break;
      case 7:
        this.setState({
          cup7: this.state.cup,
          count: this.state.count+1
        });
        break;
      case 8:
        this.setState({
          cup8: this.state.cup,
          count: this.state.count+1
        });
        Alert.alert(
          'Tebrikler',
          'Bugün için su içme hedefinize ulaştınız..',
          [
            { text: 'Harika', onPress: () => null }
          ]
        );
        break;

      default:
        Alert.alert(
          'Eyvah',
          'Bir sorun oluştu',
          [
            { text: 'Tamam', onPress: () => null }
          ]
        );    
      }
  };  

  render() {
    return (      
      <ImageBackground 
      source={require('../img/bg.png')}
      style={{ width, height }}>

        <View style= {Styles.viewCigarette}>
          <TouchableOpacity onPress={() => Actions.UserData(//{
            //data: {
            //  Healty:this.state.Healty
            //}
            //}
            )}>
            <Image source={this.state.cigarette}
            style={Styles.imgCigarette}>
            </Image>  
          </TouchableOpacity>
          </View>
        <View>
            <Text style= {Styles.textStep}>
              12.519
            </Text>
            <Text style= {Styles.textStep} >
              Adım
            </Text>
            <Text style= {Styles.textKcal}>
              390 kcal
            </Text>
          </View>       
        <View>
          <Text style={Styles.textTarget}> Hedefe Kalan Adım Sayınız: 1.900 </Text>
          <Text style={Styles.textWater}> Günlük Su Takibi: </Text>
        </View>
        
        <View style={Styles.imgViewWater}>
          <TouchableOpacity disabled={this.state.count===1 ? false : true} onPress={ this.onPress } >
            <Image
            source={ this.state.cup1 }
            style={Styles.imgPlus }></Image>
          </TouchableOpacity>
          
          <TouchableOpacity disabled={this.state.count===2 ? false : true} onPress={ this.onPress } >
            <Image
            source={ this.state.cup2 }
            style={Styles.imgPlus }></Image>
          </TouchableOpacity>

          <TouchableOpacity disabled={this.state.count===3 ? false : true} onPress={ this.onPress } >
            <Image
            source={ this.state.cup3 }
            style={Styles.imgPlus }></Image>
          </TouchableOpacity>

          <TouchableOpacity disabled={this.state.count===4 ? false : true} onPress={ this.onPress } >
            <Image
            source={ this.state.cup4 }
            style={Styles.imgPlus }></Image>
          </TouchableOpacity>
        </View>

        <View style={Styles.imgViewWater}>
          <TouchableOpacity disabled={this.state.count===5 ? false : true} onPress={ this.onPress } >
            <Image
            source={ this.state.cup5 }
            style={Styles.imgPlus }></Image>
          </TouchableOpacity>

          <TouchableOpacity disabled={this.state.count===6 ? false : true} onPress={ this.onPress } >
            <Image
            source={ this.state.cup6 }
            style={Styles.imgPlus }></Image>
          </TouchableOpacity>

          <TouchableOpacity disabled={this.state.count===7 ? false : true} onPress={ this.onPress } >
            <Image
            source={ this.state.cup7 }
            style={Styles.imgPlus }></Image>
          </TouchableOpacity>

          <TouchableOpacity disabled={this.state.count===8 ? false : true} onPress={ this.onPress } >
            <Image
            source={ this.state.cup8 }
            style={Styles.imgPlus }></Image>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
    );
  }
}

export default Form;