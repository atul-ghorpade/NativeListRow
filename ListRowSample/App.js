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

import ListRow,{AccessoryView} from './ListRow/ListRow'


const dataSource = [
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

let ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

var onRowTapped;

export default class App extends Component<{}> {
  render() {

    onRowTapped = this.props.onRowTapped;
    
    appRefToThis = this;

    var listDataSource = ds.cloneWithRows(dataSource);
    
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
          subTitleText = {item.subTitle}
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
    marginTop: 20 + 44 + 15,
  },
  homeListSeparator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ae862d',
    marginLeft: 15
},

});
