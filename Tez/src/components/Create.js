import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CheckBox from 'react-native-checkbox';
import { Picker } from '@react-native-community/picker';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { userChange, userCreate } from '../actions';
import Styles from './Styles';

class Create extends Component{

  state = {
    cigarette: false,
    smoke: false,
    dis1: 'none',
    dis2: 'none'
  };
  Date(){
    day = new Date().getDate();
    month = new Date().getMonth() + 1;
    year = new Date().getFullYear();
    this.props.userChange({ props: 'day', value: day })
    this.props.userChange({ props: 'month', value: month })
    this.props.userChange({ props: 'year', value: year })
  }
  
  clickSave() {
    const { isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, day, month, year, sigarasay, sigarapara } = this.props;
    this.props.userCreate({ isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, day, month, year, sigarasay, sigarapara });
    console.log('clickSave');
  }
  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickSave.bind(this)}> Kaydet </Button>;
    }
    return <Spinner size="small" />;
  }
  clickCigarette = () => {
    if (this.state.cigarette) 
      this.setState({ cigarette: false, dis1: 'none' })
    else 
      this.setState({ cigarette: true, dis1: 'flex' })
  }
  clickSmoke = () => {
    if (this.state.smoke) 
      this.setState({ smoke: false, dis2: 'none' }) 
    else 
      this.setState({ smoke: true, dis2: 'flex' }) 
  }
    render() {
       //console.log('gelen data ' + this.props);
       const { inputStyle } = Styles.inputStyle;
       return (
        <ScrollView>
         <Card>
         <CardSection>
         <TextInput
           placeholder="İsim"
           autoCapitalize="words"
           style={inputStyle}
           value={this.props.isim}
           onChangeText={isim => this.props.userChange({ props: 'isim', value: isim })}
         />
         </CardSection>
   
         <CardSection>
         <TextInput
           placeholder="Soyisim"
           autoCapitalize="words"
           style={inputStyle}
           value={this.props.soyisim}
           onChangeText={soyisim => this.props.userChange({ props: 'soyisim', value: soyisim })}
         />
         </CardSection>
        
         <CardSection>
         <TextInput
           placeholder="Tel (örn: 534*******)"
           keyboardType = "numeric"
           style={inputStyle}
           value={this.props.tel}
           onChangeText={tel => this.props.userChange({ props: 'tel', value: tel })}
         />
         </CardSection>

         <CardSection>
         <TextInput
           placeholder="Yaş"
           keyboardType = "numeric"
           style={inputStyle}
           value={this.props.yas}
           onChangeText={yas => this.props.userChange({ props: 'yas', value: yas })}
         />
         </CardSection>

         <CardSection>
         <TextInput
           placeholder="Boy(cm)"
           keyboardType = "numeric"
           style={inputStyle}
           value={this.props.boy}
           onChangeText={boy => this.props.userChange({ props: 'boy', value: boy })}
         />
         </CardSection>

         <CardSection>
         <TextInput
           placeholder="Kilo"
           keyboardType = "numeric"
           style={inputStyle}
           value={this.props.kilo}
           onChangeText={kilo => this.props.userChange({ props: 'kilo', value: kilo })}
         />
         </CardSection>

         <CardSection>
          <Text style={Styles.genderText}>Cinsiyet</Text>
          <Picker
            style={{ flex: 1 }}            
            selectedValue={this.props.cinsiyet}
            onValueChange={cinsiyet => this.props.userChange({ props: 'cinsiyet', value: cinsiyet })}
          >
            <Picker.Item label="Seçiniz"/>
            <Picker.Item label="Kadın" value="kadın" ></Picker.Item>
            <Picker.Item label="Erkek" value="erkek"></Picker.Item>
          </Picker>
         </CardSection>

         <CardSection>
         <TextInput
           placeholder="E-mail"
           autoCompleteType={'email'}
           autoCapitalize="none"
           keyboardType="email-address"
           style={inputStyle}
           value={this.props.email}
           onChangeText={email => this.props.userChange({ props: 'email', value: email })}
         />
         </CardSection>

         <CardSection>
         <TextInput
           placeholder="Parola"
           autoCapitalize="none"
           secureTextEntry
           autoCompleteType={'password'}
           style={inputStyle}
           value={this.props.password}
           onChangeText={password => this.props.userChange({ props: 'password', value: password })}
         />
         </CardSection>

         <CardSection>
           <Text style={{paddingRight: 20}} >Sigara içiyor musunuz?</Text>
            <CheckBox
              checked={this.state.cigarette}
              label={''}
              onChange={this.clickCigarette}
            />            
          </CardSection>
          <View style={{ display: this.state.dis1 }}>
            <CardSection >
              <Text style={{paddingRight: 20}} >Sigarayı bırakmak istiyor musunuz?</Text>
              <CheckBox
                label={''}
                checked={this.state.smoke}
                onChange={this.clickSmoke}
              />                 
            </CardSection>

            <View style={{ display: this.state.dis2 }}>
              <CardSection>
                <Text style={Styles.checkboxStyle} >içilen sigara sayısı(adet): </Text>
                <TextInput
                placeholder="örn: 10"
                keyboardType = "numeric"
                style={inputStyle}
                value={this.props.sigarasay}
                onChangeText={sigarasay => this.props.userChange({ props: 'sigarasay', value: sigarasay })}
                  />
              </CardSection>

              <CardSection>
                  <Text style={Styles.checkboxStyle} >Sigara paketinin fiyatı(TL): </Text>
                <TextInput
                placeholder="örn: 20"
                keyboardType = "numeric"
                style={inputStyle}
                value={this.props.sigarapara}
                onChangeText={sigarapara => this.props.userChange({ props: 'sigarapara', value: sigarapara })}
                  />
              </CardSection>
            </View>
          </View>

         <CardSection>
          {this.Date(),this.renderButton()}
         </CardSection>

         </Card>
        </ScrollView>
       );
     }
   }

const mapToStateProps = ({ userListRespone }) => {
  const { isim, 
    soyisim, 
    tel, 
    yas, 
    boy, 
    kilo, 
    cinsiyet,
    email, 
    password, 
    day, 
    month, 
    year,
    sigarasay, 
    sigarapara,
    loading  } = userListRespone;

  return { isim, 
    soyisim, 
    tel, 
    yas, 
    boy, 
    kilo, 
    cinsiyet,
    email, 
    password,
    day, 
    month, 
    year,
    sigarasay, 
    sigarapara,
    loading  };
};

export default connect(mapToStateProps, { userChange, userCreate })(Create);