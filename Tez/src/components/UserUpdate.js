import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Picker } from '@react-native-community/picker';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { userChange, userUpdate, userDelete } from '../actions';

class UserUpdate extends Component {
 state = { isim: '', soyisim: '', ogrencinumara: '', sube: '' };
 componentDidMount() {
   const { isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, sigarasay, sigarapara } = this.props.user;

   this.setState({ isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, sigarasay, sigarapara });
 }
  clickUpdate() {
    const { isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, sigarasay, sigarapara } = this.state;

    this.props.userUpdate({ isim, soyisim, tel, yas, boy, kilo, cinsiyet, email, password, 
     sigarasay, sigarapara, uid: this.props.user.uid });
  }
  clickDelete() {
    this.props.userDelete({ uid: this.props.user.uid });
  }
  renderButton() {
    if (!this.props.loadingUpdate) {
      return <Button onPress={this.clickUpdate.bind(this)}> Guncelle </Button>;
    }
    return <Spinner size="small" />;
  }

  renderDeleteButton() {
    if (!this.props.loadingDelete) {
      return <Button onPress={this.clickDelete.bind(this)}> Sil </Button>;
    }
    return <Spinner size="small" />;
  }

   render() {
    return (
      <ScrollView >
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
        <Text style={{ paddingRight:25, paddingTop:15 }}>Cinsiyet</Text>
        <Picker
          style={{ flex: 1 }}
          selectedValue={this.props.cinsiyet}
          onValueChange={cinsiyet => this.props.userChange({ props: 'cinsiyet', value: cinsiyet })}
        >
        <Picker.Item label="Kadın" value="kadın" />
        <Picker.Item label="Erkek" value="erkek" />
        </Picker>
       </CardSection>

       <CardSection>
       <TextInput
         placeholder="E-mail"
         autoCapitalize="none"
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
              checked={false}
              label={''}
              checked={this.state.smoke}
              onChange={this.clickSmoke}
            />                 
          </CardSection>

          <View style={{ display: this.state.dis2 }}>
            <CardSection>
              <Text style={{paddingTop: 15, paddingRight: 10}} >içilen sigara sayısı(adet): </Text>
              <TextInput
              placeholder="örn: 10"
              keyboardType = "numeric"
              style={inputStyle}
              value={this.props.sigarasay}
              onChangeText={sigarasay => this.props.userChange({ props: 'sigarasay', value: sigarasay })}
                />
            </CardSection>

            <CardSection>
                <Text style={{paddingTop: 15, paddingRight: 10}} >Sigara paketinin fiyatı(TL): </Text>
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
        {this.renderButton()}
        </CardSection>

        <CardSection>
        {this.renderDeleteButton()}
        </CardSection>

       </Card>
      </ScrollView>
     );
   }
 }
     
const styles = {

  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1
  }

};

const mapToStateProps = ({ userUpdateResponse }) => {
  const { loadingUpdate, loadingDelete } = userUpdateResponse;

  return {
    loadingUpdate,
    loadingDelete };
};

export default connect(mapToStateProps, { userChange, userUpdate, userDelete })(UserUpdate);