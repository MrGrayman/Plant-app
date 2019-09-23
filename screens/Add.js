import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, KeyboardAvoidingView, View, item, TouchableOpacity, FlatList } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Icon } from 'native-base';
import { Card, Badge, Button, Block, Text, Input } from '../components';
import { theme, mocks } from '../constants';
// import console = require('console');
const { width } = Dimensions.get('window');


class Add extends Component {
  constructor(props) {
    super(props)
    
  }


  render() {

    return (
        <View>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Add</Text>
          
        </Block>
        <Block flex={false} row style={styles.tabs}>

        </Block>
        <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2}}
        >
            
            <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
                <Block padding={[0, theme.sizes.base * 2]}>
           <Container>
            <Input
              placeholder=" Enter Plant Name"
              style={[styles.input]}
            />
            <Input
              placeholder=" Enter Plant Type"
              style={[styles.input]}
            />
            <Input
              placeholder=" Enter Plant Status"
              style={[styles.input]}
            />
            <Input
              placeholder=" Enter Time"
              style={[styles.input]}
            />
            <Button gradient >
                <Text bold white center>Add</Text>
              
            </Button>
            </Container>
            </Block>
          </KeyboardAvoidingView>
          
        </ScrollView>
        </View>
        
        
        </View>
    )
  }
}

Add.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
}

export default Add;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
  }
})
