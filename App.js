


import React, { Component} from 'react';
import {

  View,
  Image,ScrollView,StyleSheet,
  
} from 'react-native';


import {Button,Text, Footer, FooterTab,
   Container,Icon,Accordion,Badge,Content,Card,CardItem,Thumbnail,Left,Body,Right} from "native-base";

import { RNCamera } from 'react-native-camera';
import RNLocation from 'react-native-location';

const dataArray = [
  { title: "Introduction", content: "This is just preview, #continuous improvement" },
  { title: "Info", content: "github (check eror code): https://github.com/juuni26/mobile-app1  " }
  
];


export default class App extends Component {

_showlocation=()=>{

  RNLocation.requestPermission({
    ios: "whenInUse",
    android: {
      detail: "coarse"
    }
  }).then(granted => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
          
        })
      }
    })
  
}

_showcamera=()=>{
<RNCamera 
            ref={ref => {
         this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'Boss we need your permission to use camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
            }  }
        androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'Boss we need your permission to use audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
        }}  />

}







  render() {
  return (
    <Container>
      <ScrollView>
        
    <Button>
      <Text>Welcome to the App ! </Text>
    </Button>
    <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            
          />
   
    
    
    <Content>
    <Text style={{textAlign:"center", marginTop:2,marginBottom:2}}>This is example content</Text>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2Br10JJQHvEnLECRCAIEAAHkoUx49cl7RfHIzxwZO2HSPhJcm'}} />
                <Body>
                  
                  <Text>Invoker</Text>
                  <Text note>Dota2</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUcbg4cdcr-5-ucOJ9YeScA1-cKY8Iz88gbc1ww0KXyxHH3mQg"}} style={{height: 200, width: null,flex:1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>322 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
          </Card>

        
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.flagz.co.nz/wp-content/uploads/2013/08/monaco-flag.png'}} />
                <Body>
                  
                  <Text>Jakarta</Text>
                  <Text note>@Indonesia</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: "https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/259955_Viator_Thinkstock_164257.jpg"}} style={{height: 300, width: null,flex:1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>999 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>99 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>0h ago</Text>
              </Right>
            </CardItem>
          </Card>



        </Content>

        

    {/* <Badge style={{backgroundColor:"blue"}}>
            <Text>2</Text>
    </Badge> */}

        </ScrollView>
     
        <Footer>
          <FooterTab>
            <Button onPress={()=>{alert("you've alreade home.")}} >
              
              <Icon name="home" />
            </Button>
            <Button active onPress={this._showcamera} >

            <Icon active  name="camera" />
              
      
        
            </Button>

            <Button active onPress={this._showlocation}>
              <Icon active name="navigate" />
              
            </Button>
            <Button onPress={()=>{alert("test you've clicked contact,navigate to page 2 belum dibuat.")}}>
              <Icon name="contact" />
            </Button>
          </FooterTab>
        </Footer>


    </Container>
    
    

  );
};
}



const styles = StyleSheet.create({

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});


// source bantuan :
//https://github.com/react-native-community/react-native-camera/blob/master/docs/RNCamera.md
//https://www.toptal.com/react-native/react-native-camera-tutorial
//