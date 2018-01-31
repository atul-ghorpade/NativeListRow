/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

//Use this after npm install 
// import {AccessoryView, ListRow} from 'react-native-list-row';

//TEMP - USE ABOVE IMPORT AFTER npm install
import ListRow from './ListRow/ListRow' 
//TEMP - USE ABOVE IMPORT AFTER npm install
import {AccessoryView} from './ListRow/AccessoryView'

const dataSourceOnlyTitles = [
  {
    key : 0,
    title : "First Row Title",
  }, {
    key : 1,
    title : "Second Row Title",
  }, {
    key : 2,
    title : "Third Row Title",
  }, {
    key : 3,
    title : "Fourth Row Title",
  }
];

const dataSourceCheckmark = [
  {
    key : 0,
    title : "First Row Title",
    subTitle : "First Row SubTitle",
    //To be used when accessoryView is Checkmark
    isSelected: true     
  }, {
    key : 1,
    title : "Second Row Title",
    subTitle : "Second Row SubTitle",
  }, {
    key : 2,
    title : "Third Row Title",
    subTitle : "Third Row SubTitle",
  }, {
    key : 3,
    title : "Fourth Row Title",
    subTitle : "Fourth Row SubTitle",
    //To be used when accessoryView is Checkmark
    isSelected: true   
  }
];

const dataSourceDisclosureIndicator = [
  {
    key : 0,
    title : "First Row Title",
    subTitle : "First Row SubTitle",
  }, {
    key : 1,
    title : "Second Row Title",
    subTitle : "Second Row SubTitle",
  }, {
    key : 2,
    title : "Third Row Title",
    subTitle : "Third Row SubTitle",
  }, {
    key : 3,
    title : "Fourth Row Title",
    subTitle : "Fourth Row SubTitle",
  }
];

const dataSourceMultipleSubTitles = [
  {
    key : 0,
    title : "First Row Title",
    subTitles : ["First Row First SubTitle", "First Row Second SubTitle", "First Row Third SubTitle"]
  }, {
    key : 1,
    title : "Second Row Title",
    subTitles : ["Second Row First SubTitle", "Second Row Second SubTitle", "Second Row Third SubTitle"],
  }, {
    key : 2,
    title : "Third Row Title",
    subTitles : ["Third Row SubTitle"],
  }, {
    key : 3,
    title : "Fourth Row Title",
    subTitles : ["Fourth Row SubTitle"],
  }
];
const dataSourceTitleWithDetail = [
  {
    key : 0,
    title : "First Row Title",
    detailText : "First Detail",
  }, {
    key : 1,
    title : "Second Row Title",
    detailText : "Second Detail",
  }, {
    key : 2,
    title : "Third Row Title",
    detailText : "Third Detail",
  }, {
    key : 3,
    title : "Fourth Row Title",
    detailText : "Fourth Detail",
  }
];


let ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

var onRowTapped;

export default class App extends Component<{}> {
  render() {

    onRowTapped = this.props.onRowTapped;
    
    appRefToThis = this;

    //Change data source here as per names
    var listDataSource = ds.cloneWithRows(dataSourceTitleWithDetail);
    
    return (
      <ListView
          style={styles.genericList}
          dataSource={listDataSource}
          renderRow={this.renderItem}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.homeListSeparator}/>}
          removeClippedSubviews={false}/>
    );
  }
  renderItem(item)
  {
      return (<ListRow
          item={item}
          titleText={item.title}
          detailText = {item.detailText}
          accessoryView={AccessoryView.DisclosureIndicator}
          onRowTapped={appRefToThis
          .onRowTapped
          .bind(appRefToThis)}/>);
  }

//#region Event handling methods
  onRowTapped(item)
  {
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  genericList:{
    backgroundColor: '#efeff4',
    marginTop: 20,
  },
  homeListSeparator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ae862d',
    marginLeft: 15
},

});
