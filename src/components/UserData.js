import _ from 'lodash';
import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { View, Text, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getUserData } from '../actions';
import Smoke from './Smoke';

class UserData extends Component{
    componentDidMount() {
        this.props.getUserData();        
    }
    renderRow({ item, index }) {
        const { currentUser } = firebase.auth();
        if(currentUser.email===item.email)
        {            
            return <Smoke user={item} />;
        }
    }
    
    render(){
        return(   
            <FlatList
                data={this.props.userArray}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => index.toString()}
            />
            );
    }
}
    const mapStateToProps = ({ userDataResponse }) => {  
        const userArray = _.map(userDataResponse, (val, uid) => {
                return { ...val, uid }; // { isim: 'Ayşe', soyisim: 'asda'...  }                  
        });
        return { userArray };
    };
    
export default connect(mapStateToProps, { getUserData })(UserData);