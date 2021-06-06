import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  textTarget: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: height/7,
    fontSize:18 
  },
  textWater: { 
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10, 
    fontSize: 18
  },
  imgPlus: {
    width: width/11, 
    height: height/11, 
    resizeMode : 'contain', 
    marginLeft: 40, 
    padding: 25,
  },
  imgViewWater: { 
    flexDirection: 'row',
    marginTop: 30 
  },
  imgCigarette: {
    width: 80, 
    height: 80
  },
  viewCigarette: {
    alignItems: 'flex-end',
    padding: 4
  },
  imgStep: {
    width:40, 
    height:80, 
    marginLeft: width/2-10,
    marginTop: -15
  },
  textStep: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5 
  },
  textKcal: {
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 30,
    fontSize: 25,
    fontWeight: 'bold'
  },
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1
  },
  checkboxStyle: {
    paddingTop: 15,
    paddingRight: 10
  },
  genderText: { 
    paddingRight:25, 
    paddingTop:15 
  },
  logoStyle: { 
    width: width/1, 
    height: height/3
  },
  imgBgStyle: { 
    width, 
    height, 
    backgroundColor: 'white'
},
  headView:{
    flex:1, 
    backgroundColor: '#FFFFFF'
  },
  imgLungs: {
      width: width/2.5, 
      height: height/4, 
      alignItems:'center',  
      marginTop: height/11
  },
  valView: {
      flexDirection: 'row',
      paddingTop: 20
  },
  valText:{
      fontSize: 25,
      textAlign:'center',
      borderColor: 'black',
      borderWidth: 2,
      paddingVertical: 8,
      borderRadius: 3,
      width: 90
  },
  smokeText: {
    fontSize: 25, 
    paddingTop: 8
  }
});
