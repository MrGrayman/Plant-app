import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, ScrollView, View, item, TouchableOpacity, FlatList } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Icon, Button } from 'native-base';
import { Card, Badge,  Block, Text } from '../components';
import { theme, mocks } from '../constants';
// import console = require('console');
const { width } = Dimensions.get('window');


class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: '',
      dataSource: []
    };
  }

  state = {
    active: 'Products',
    categories: [],
  }

  

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(
      category => category.tags.includes(tab.toLowerCase())
    );

    this.setState({ active: tab, categories: filtered });
  }

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[
          styles.tab,
          isActive ? styles.active : null
        ]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    )
  }

  // renderItem = ({ item }) => {
  //   return(
  //   <View  style={{ backgroundColor: 'white', padding: 20 }}>
  //       <Text bold>ID: {item.ID}</Text>
  //       <Text bold>Humidity: {item.Humidity}%</Text>
  //       <Text bold>Temp: {item.Temp} ํc</Text>
  //       <Text bold>Moisture: {item.Moisture}%</Text>
  //   </View>
  //   )
  // }

  componentDidMount() {
    this.setState({ categories: this.props.categories });
    
  }


  componentWillMount() {
    
    return fetch('http://192.168.43.129/PlantProject/PlantList.php')
      .then((response) => response.json())
      .then((responseJson) => {
       //  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
        // alert(JSON.stringify(responseJson))
        // let result = responseJson.map(data => data.stat);
        // alert(result)
        // var my_json = JSON.stringify(responseJson)

        // var filtered_json = (JSON.parse(my_json), {stat: 2});
        // let data = JSON.stringify(filtered_json.stat)
        // data2 = responseJson
        // alert(responseJson.book_id)
        // alert(data)
        // if(result == 1){
        //   alert("รอยืนยัน")
        // }else if(result == 2){
        //   alert("ยืนยันแล้ว")
        // }else{
        // }
      })
      .catch((error) => {
        console.error(error);
      });
      
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    // const tabs = ['Products', 'Inspirations', 'Shop', 'Update'];
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>Home</Text>
          <Button onPress={() => navigation.navigate('Settings')}>
            <Image
              source={profile.avatar}
              style={styles.avatar}
            />
          </Button>
        </Block>
        <Block flex={false} row style={styles.tabs}>
          {/* {tabs.map(tab => this.renderTab(tab))} */}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: theme.sizes.base * 2}}
        >
          <Block flex={false} row space="between" style={styles.categories} >
            <View  style={{ backgroundColor: 'white', padding: 20 }}>
            {/* {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                
              > */}
                
                  <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View key={item.ID} style={{ backgroundColor: 'white', padding: 20 }}>
                        <Text bold>ID: {item.ID}</Text>
                        <Text bold>Humidity: {item.Humidity}%</Text>
                        <Text bold>Temp: {item.Temp} ํc</Text>
                        <Text bold>Moisture: {item.Moisture}%</Text>    
                      </View>
                    
                    )}
                        />
                 
                
                
                    

              {/* </TouchableOpacity>
            ))} */}
              
            
            </View>
            
          </Block>
          
        </ScrollView>
        <Footer>
        
          <FooterTab style={{ backgroundColor: '#0AC4BA'}}>
            <Button vertical onPress={() => this.props.navigation.navigate('Browse')}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Edit')}>
              <Icon name="build"  />
              <Text>Edit</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Add')} >
              <Icon active name="add" />
              <Text>Add</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Delete')}>
              <Icon name="trash" />
              <Text>Delete</Text>
            </Button>
          </FooterTab>
        </Footer>
        
      </Block>
    )
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
}

export default Browse;

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
