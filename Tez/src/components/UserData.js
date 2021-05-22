import _ from 'lodash';
import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { View, Text, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getDayDiff } from '../actions';
import Styles from './Styles';
import Smoke from './Smoke';

var count = 0; 

class UserData extends Component{
    componentDidMount() {
        this.props.getDayDiff();
    }
    renderRow({ item, index }) {
        const { currentUser } = firebase.auth();
        if(currentUser.email===item.email)
        {            
            count = 1;
            return <Smoke user={item} />;
        }
    }
    
    render(){
        if (count>0) {
            Actions.Smoke();
        }
        return(   
            <FlatList
                data={this.props.userArray}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => index.toString()}
            />
            //Actions.Smoke();
            );
    }
}
    const mapStateToProps = ({ userDataResponse }) => {  
        const userArray = _.map(userDataResponse, (val, uid) => {
                return { ...val, uid }; // { isim: 'Ayşe', syoisim: 'asda', sube: 'asube', uid: 'kq9aasdfdf'  }                  
        });
        return { userArray };
    };
    
export default connect(mapStateToProps, { getDayDiff })(UserData);