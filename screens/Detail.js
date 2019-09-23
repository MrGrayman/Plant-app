import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, View, item, TouchableOpacity, FlatList } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Icon } from 'native-base';
import { Card, Badge, Button, Block, Text } from '../components';
import { theme, mocks } from '../constants';
// import console = require('console');
const { width } = Dimensions.get('window');


class Detail extends Component {
  constructor(props) {
    super(props)
    
  }


  render() {

    return (
      <View>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Detail</Text>
          
        </Block>
        <Block flex={false} row style={styles.tabs}>

        </Block>
        <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2}}
        >
            <Container>

            <View  style={{ backgroundColor: 'white', padding: 20 }}>
            <Image
                source={require('../assets/images/CactusOn.jpg')}
                style={{width: '60%', height: '60%', alignSelf: 'center'}}
            />
            <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
                <Text bold>ID: 1</Text>
                <Text bold>Humidity: 80%</Text>
                <Text bold>Temp: 28 ํc</Text>
                <Text bold>Moisture: 0%</Text>
        </View>
            
            </View>
            

          </Container>
        </ScrollView>
        </View>
        
        
        </View>
    )
  }
}

Detail.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
}

export default Detail;

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


