import React, { Component } from 'react';
import { View, ImageBackground, Image, Alert, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import Styles from './Styles';

class Login extends Component {
    state ={ email: '', password: '', loading: false };

    clickLogin() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    clickCreate() {
        Actions.Create()
        
    }
    loginSucces() {
        console.log('başarılı');
        this.setState({ loading: false });
    }

    loginFail() {
    console.log('Hatalı');
        this.setState({ loading: false });
        Alert.alert(
        'Mesaj',
        'Kullanıcı adı veya şifreniz hatalı!',
        [
            { text: 'Tamam', onPress: () => null }
        ]
        );
    }

    renderButton() {
        if (!this.props.loading) {
          return (
          <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>
          );
        }
        return <Spinner size="small" />;
      } 

    render(){ 
        return(
            <ImageBackground style={Styles.imgBgStyle}>
                <View>
                <Image source= {require('../img/logo.png')} style={Styles.logoStyle}></Image>
                </View>

                <Card>
                    <CardSection>
                    <TextInput
                        placeholder="E-mail"
                        keyboardType="email-address"
                        style={Styles.inputStyle}
                        value={this.props.email}
                        onChangeText={email => this.props.emailChanged(email)}
                    />
                    </CardSection>

                    <CardSection>
                    <TextInput
                        secureTextEntry
                        placeholder="Şifre"
                        style={Styles.inputStyle}
                        value={this.props.password}
                        onChangeText={password => this.props.passwordChanged(password)}
                    />
                    </CardSection>

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.clickCreate.bind(this)}> KAYIT OL </Button>
                    </CardSection>
                </Card>
            </ImageBackground>
            
        );
    }
   
}

const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
    const { email, password, loading } = kimlikdogrulamaResponse;
    return {
      email: 'musab.bayram@hotmail.com',
      password: '123123',
      loading
    };
  };
  
  export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login);