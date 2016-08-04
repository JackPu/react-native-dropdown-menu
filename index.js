import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ListView,
  TouchableHighlight,
  Image,
  Text,
}
from 'react-native';

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    right:0,
    top:44,
    width: 160,
    height:300,
    backgroundColor:'rgba(0,0,0,.7)',
    borderWidth:1,
    borderColor: 'rgba(0,0,0,.9)',
    borderTopWidth:0,
    transform: [{'translate':[0,0,10]}]
  },
  triAngle:{
    position:'absolute',
    right:18,
    top:-15,  
    width:15,
    height:15, 
      
  } , 
  row: {
    flex: 1,
    justifyContent: 'center',
    height:40,  
  },
  text:{
    flex:1,
    marginLeft:10,
    marginRight:10,
    color: '#fff',
    textAlign: 'center',
         
  },  
  

});




class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
    this.state = {
      list: ds.cloneWithRows(this.props.dataList)
    }
    this.renderRow = this.renderRow.bind(this);
    this._handlePress = this._handlePress.bind(this);

  }

  _handlePress(group) {
    this.props.groupChange(group);
  }
  
  renderRow(rowData,rowID) {
    return (
      <TouchableHighlight style={styles.row} onPress={() => this._handlePress(rowData)}>
        <Text style={styles.text} numberOfLines={1}>{rowData['groupname']}</Text>
      </TouchableHighlight>
    );
  }
  
  render() {

    var tabView = [];
    
    return ( 
      <View style={styles.dropdown}>
        <Image source={require('../images/arrow-black-opacity-40.png')} style={styles.triAngle} />
        <ListView style={{flex:1,height:300}} dataSource={this.state.list} renderRow={this.renderRow}></ListView>
      </View>
    );

  }

};

module.exports = Dropdown;
