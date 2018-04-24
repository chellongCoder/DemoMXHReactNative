import React, { Component } from 'react';
import {View , Animated, Image, Keyboard, StyleSheet,TouchableOpacity, Text,Dimensions} from 'react-native';
import {Container, Card,List, CardItem, Item,Thumbnail, Button, ListItem, Input, Header, Body, Right, Title, Left,Icon, Content} from 'native-base';
import Setting from './../utils/setting';
export interface Props { 
  navigation: any, 
  postBaiDang: Function,
  user: any,
  allPosts : any,
}
export default class infodetailuser extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      status : false,
      width: 0,
      text: "",
    }
  }

  onLayout(event) {
    const {x,y,width, height} = event.nativeEvent.layout;
    if(this.state.width==0) {
      this.setState({width: width});
    }
    // console.log("width" + width ); 
  }

  renderCardStatus(user) {
    
    console.log("status")
    console.log(this.state.status)
    if(this.state.status) {
      return (
        <CardItem style={{borderWidth: 1, borderRadius: 10, flexDirection: 'column', width: '100%'}} 
        onLayout={(e)=>this.onLayout(e)}>
          <Item style={{flex: 1, }}>
          <Input
          multiline={true}
          numberOfLines={3}
          placeholder='Bạn đang nghĩ gì?'
          style={{width: '100%'}}
          onChangeText={(text)=>this.setState({text})}

          // onChangeText={(text) => this.setState({text})}
          // value={this.state.text}/>
          />
          </Item>
          <Item style={{flex: 1, borderBottomWidth: 0, paddingTop: 10}}>
            <Left>
              <Button rounded light>
              <Text style={{padding: 10}}>Image</Text>
              </Button>    
            </Left>
          </Item>
          <Item style={{ flex: 1, width: this.state.width-20, alignItems: 'center', borderBottomWidth: 0, paddingTop: 10}}>
            <Button rounded style={{flex: 1, backgroundColor: '#00903b'}}
              onPress={()=>{
                this.props.postBaiDang(user.sothutu, this.state.text)
                Keyboard.dismiss();
              }} 
            >
              <Text style={{color: 'white'}}>dang bai</Text>
            </Button>
          </Item>
        </CardItem>
      )
    } else {
      return null;
    }
  }
  render() {
    
    var user = this.props.user;
    return (
      <Container>
        <Header searchBar rounded style={{}} backgroundColor='#00903b' androidStatusBarColor='#00903b'>
          <Item style={{flex: 8/10}}>
            <Icon name='ios-search'/>
            <Input placeholder='Search' />
            <Icon name='ios-people'/>
          </Item>
          <Right style={{flex: 2/10}}>
          <Button transparent onPress={()=>{this.setState({status: !this.state.status})}}>
            <Icon android='md-add' ios='md-add' style={{color: 'white'}}/>
          </Button>
          </Right>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: Setting.SERVER_API+user.image}} />
                <Body>
                  <Text style={{color: '#00903b'}}>{user.hoten}</Text>
                  <Text note>{user.ngaysinh}</Text>
                </Body>
              </Left>
            </CardItem>
           {
              this.renderCardStatus(user)
           }
            <CardItem>
              <Body>
               <Item style={{flex: 1, borderBottomWidth: 0}}>
                  <Left>
                    <Text style={{flex: 2/10}}>email</Text>
                  </Left>
                  <Right style={{flex : 8/10}}>
                    <Text>{user.email}</Text>
                  </Right>
               </Item>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon style={{color: '#00903b'}} name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <List>
            {
              this.props.allPosts.map((value, index)=>{
                
              })
            }
          </List>
        </Content>
      </Container>
    )
  }
};
