import React, { Component } from 'react';

import {Button as Btn} from 'react-native';

import {RNCamera} from 'react-native-camera';


import { Container, Header, Content, ListItem, CheckBox, Text, Body,Left,Button,Right,Icon,Title} from 'native-base';

import Geolocation from '@react-native-community/geolocation';


export default class App extends Component {

  



takeApicture = async()=> {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    console.log(data.uri);
    alert("file saved in"+(data.uri))
  }
}




  render() {
    return (

      <Container>
        
        <Header>
          <Left>

          </Left>
          <Body>
            <Title>Test Aplikasi </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='car' />
            </Button>
          </Right>
        </Header>
        <Content style={{flex:2}}>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>App Basic component and function in general. Ready !</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Camera Ready !</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Finish (not yet)</Text>
            </Body>
          </ListItem>
        </Content>
        <Text style={{textAlign:"right",marginRight:20,fontStyle:"italic",marginTop:10}}>Preview Camera</Text>
        <RNCamera style={{flex: 1 , width:240 }} 
              ref={ref => {
                this.camera = ref;
              }}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.auto}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Okeee',
                buttonNegative: 'Cancel',
              }}
              />

      
        <Btn title="Test Capture"  onPress={this.takeApicture.bind(this)}/>
        <Btn title="Test GeoLocation" onPress={()=>
          Geolocation.getCurrentPosition(info => console.log(info))} 
            />
         
      </Container>

  
    )
  }
}