import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import GoogleFit, { Scopes } from 'react-native-google-fit';
import Styles from './Styles';                                                                                                                        var step = 0;                                                                                                             

const { width, height } = Dimensions.get('window');


class Form extends Component {

  state = {
    plus: require('../img/plus.png'),
    cupimg1: require('../img/cup1.png'),
    cupimg2: require('../img/cup2.png'),
    cupimg3: require('../img/cup3.png'),
    cupimg4: require('../img/cup4.png'),
    cigarette: require('../img/cigarette.png'),
    cup1: require('../img/plus.png'),
    cup2: require('../img/plus.png'),
    cup3: require('../img/plus.png'),
    cup4: require('../img/plus.png'),
    cup5: require('../img/plus.png'),
    cup6: require('../img/plus.png'),
    cup7: require('../img/plus.png'),
    cup8: require('../img/plus.png'),
    count:1,
    count2:0
  };
  componentDidMount() {
         
    GoogleFit.checkIsAuthorized().then(() => {
      console.log(GoogleFit.isAuthorized)
  })
  const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_BODY_WRITE,
    ],
  }
  GoogleFit.authorize(options)
    .then(authResult => {
      if (authResult.success) {
        dispatch("AUTH_SUCCESS");
      } else {
        dispatch("AUTH_DENIED", authResult.message);
      }
    })
    .catch(() => {
      dispatch("AUTH_ERROR");
    })
  
  GoogleFit.startRecording((callback) => {
    const options = {
      startDate: new Date().toDateString(),
      endDate: new Date().toISOString() 
    };
    
    GoogleFit.getDailyStepCountSamples(options, (err, res) => {
      if (err) {     
        throw err;
      }
      step = res;
    });
  });
  }
  onPress = () => {
    switch(this.state.count) {
      case 1:
        this.setState({
          cup1: this.state.cupimg1,
          count: this.state.count+1
        });
        setTimeout(() => {
          this.setState({
            cup1: this.state.cupimg2,
          });
        }, 750);
        setTimeout(() => {
          this.setState({
            cup1: this.state.cupimg3,
          });
        }, 1500);
        setTimeout(() => {
          this.setState({
            cup1: this.state.cupimg4,
          });
        }, 2000);
        break;
      
      case 2:
        this.setState({
          cup2: this.state.cupimg1,
          count: this.state.count+1
        });
        setTimeout(() => {
          this.setState({
            cup2: this.state.cupimg2,
          });
        }, 750);
        setTimeout(() => {
          this.setState({
            cup2: this.state.cupimg3,
          });
        }, 1500);
        setTimeout(() => {
          this.setState({
            cup2: this.state.cupimg4,
          });
        }, 2000);
        break;
 
      case 3:
        this.setState({
          cup3: this.state.cupimg1,
          count: this.state.count+1
        });
        setTimeout(() => {
          this.setState({
            cup3: this.state.cupimg2,
          });
        }, 750);
        setTimeout(() => {
          this.setState({
            cup3: this.state.cupimg3,
          });
        }, 1500);
        setTimeout(() => {
          this.setState({
            cup3: this.state.cupimg4,
          });
        }, 2000);
        break;
 
      case 4:
        this.setState({
          cup4: this.state.cupimg1,
          count: this.state.count+1
        });
        setTimeout(() => {
          this.setState({
            cup4: this.state.cupimg2,
          });
        }, 750);
        setTimeout(() => {
          this.setState({
            cup4: this.state.cupimg3,
          });
        }, 1500);
        setTimeout(() => {
          this.setState({
            cup4: this.state.cupimg4,
          });
        }, 2000);
        break;
      case 5:
        this.setState({
          cup5: this.state.cupimg1,
          count: this.state.count+1
        });
        setTimeout(() => {
          this.setState({
            cup5: this.state.cupimg2,
          });
        }, 750);
        setTimeout(() => {
          this.setState({
            cup5: this.state.cupimg3,
          });
        }, 1500);
        setTimeout(() => {
          this.setState({
            cup5: this.state.cupimg4,
          });
        }, 2000);
        break;
      case 6:
        this.setState({
          cup6: this.state.cupimg1,
          count: this.state.count+1
        });
        setTimeout(() => {
          this.setState({
            cup6: this.state.cupimg2,
          });
        }, 750);
        setTimeout(() => {
          this.setState({
            cup6: this.state.cupimg3,
          });
        }, 1500);
        setTimeout(() => {
          this.setState({
            cup6: this.state.cupimg4,
          });
        }, 2000);
        break;
      case 7:
        this.setState({
          cup7: this.state.cupimg1,
          count: this.state.count+1
        });
        setTimeout(() => {
          this.setState({
            cup7: this.state.cupimg2,
          });
        }, 750);
        setTimeout(() => {
          this.setState({
            cup7: this.state.cupimg3,
          });
        }, 1500);
        setTimeout(() => {
          this.setState({
            cup7: this.state.cupimg4,
          });
        }, 2000);
        break;
      case 8:
        this.setState({
          cup8: this.state.cupimg1,
          count: this.state.count+1
        });
        setTimeout(() => {
          this.setState({
            cup8: this.state.cupimg2,
          });
        }, 750);
        setTimeout(() => {
          this.setState({
            cup8: this.state.cupimg3,
          });
        }, 1500);
        setTimeout(() => {
          this.setState({
            cup8: this.state.cupimg4,
          });
        }, 2000);
        setTimeout(() => {
          Alert.alert(
            'Tebrikler',
            'Bugün için su içme hedefinize ulaştınız..',
            [
              { text: 'Harika', onPress: () => null }
            ]
          );
        }, 2500)
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
  actionPress = () =>{
      Actions.UserData();
  } 

  render() {
    return (      
      <ImageBackground 
      source={require('../img/bg.png')}
      style={{ width, height }}>

        <View style= {Styles.viewCigarette}>
          <TouchableOpacity onPress={this.actionPress}>
            <Image source={this.state.cigarette}
            style={Styles.imgCigarette}>
            </Image>  
          </TouchableOpacity>
          </View>
        <View>
            <Image source={require('../img/walk.png')}
            style={Styles.imgStep}>
            </Image>  
            <Text style= {Styles.textStep}>
              {step}
            </Text>            
            <Text style= {Styles.textKcal}>
            {Math.round(step*0.05)} kcal
            </Text>
          </View>       
        <View>
          <Text style={Styles.textTarget}> Kalan Adım: {10000-step} </Text>
        </View>
        <View>
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