import React from 'react';

import { StyleProvider, Container, Header, Left, Body, Right, Title } from 'native-base';
import { Content, List, ListItem, Text, H1, H2 } from 'native-base';
import { Form, Item, Input, Button } from 'native-base'
import { Footer, FooterTab } from 'native-base'

import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

export default class App extends React.Component {
  // render() {
  //   return (<View style={styles.container}>
  //     <Text> Open up App.js to start working on your app! </Text>
  //     <Text> Changes you make will automatically reload. </Text>
  //     <Text> Shake your phone to open the developer menu. </Text>
  //     <Text> Ciao sono Daniel, Hi i 'm Daniel</Text>
  //   </View>
  //   );
  // }

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header>
            <Left />
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <H1>hello</H1>
            <H2>welcome to react native</H2>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
    );
  }
}