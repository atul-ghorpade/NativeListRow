'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';

const DISCLOSURE_INDICATOR = require('./ic_arrow_right_grey.png');
const CHECKMARK = require('./ic_tick_golden.png');


//AccessoryView Types
export const AccessoryView = {
    DisclosureIndicator: 1,
    Checkmark: 2,
    None: 3
}
/*

Props Supported- 
item,
titleText,
subTitles,
subTitleText,
accessoryView,
onRowTapped

*/

class ListRow extends Component {


    render() {  
        
        if(this.props.onRowTapped == undefined)
        {
            //No need of touchable opacity if 'onRowTapped' is not defined
            return (
                <View style={styles.listRowContainer}>
                    <View style={styles.textsContainer}>
                        {this.renderTitleText()}                    
                        {this.renderSubTitleText()}                    
                        {this.renderSubTitles()}
                    </View>
                    {this.renderDetailText()}
                    {this.renderAccessoryView()}
                </View>                      
            );

        }
        else
        {
            //Use touchable opacity and handle 'onRowTapped'

            return (
                <TouchableOpacity style={styles.listRowContainer}
                onPress={() => this.props.onRowTapped(this.props.item)}>
                    <View style={styles.textsContainer}>
                        {this.renderTitleText()}                    
                        {this.renderSubTitleText()}                    
                        {this.renderSubTitles()}
                        </View>
                    {this.renderDetailText()}
                    {this.renderAccessoryView()}
                </TouchableOpacity>                      
            );
        }        
    }

    renderTitleText() {
        var titleTextStyle;
        if (this.props.subTitleText !== undefined || this.props.subTitles !== undefined || this.props.dateText !== undefined) {
            titleTextStyle = styles.listRowTitle;
        } else {
            titleTextStyle = styles.listRowTitleWithoutSubTitle;
        }
        return (
            <Text style={titleTextStyle}>{this.props.titleText}</Text>
        );
    }

    renderSubTitleText() {
        if (this.props.subTitleText !== undefined) {
            return (
                <Text style={styles.listRowSingleSubTitle}>{this.props.subTitleText}</Text>
            );
        }
        return null;
    }

    renderSubTitles() {
        if (this.props.subTitles !== undefined) {            
            return this.createSubTitles()            
        }
        return null;
    }

    createSubTitles = () => {
        const subTitles = [];
        for( let i = 0; i < this.props.subTitles.length; i++) 
        {
            var style;
            
            if (i == this.props.subTitles.length - 1)//last text
            {
                style = styles.listRowLastSubTitle;                
            }
            else//regular
            {
                style = styles.listRowSubTitle;             
                
            }
            
            subTitles.push(
                <Text key = {i} style={style}>{this.props.subTitles[i]}</Text>
              )
        }
        return subTitles;
    }

    renderDetailText() {
        if (this.props.detailText !== undefined) {
            return (
                <Text style={styles.listRowDetail}>{this.props.detailText}</Text>
            );
        }
        return null;
    }


    renderAccessoryView() {
        if (this.props.accessoryView !== undefined && this.props.accessoryView != AccessoryView.None) {
            var accessoryViewImage;
            switch (this.props.accessoryView) {
                case AccessoryView.DisclosureIndicator:
                    accessoryViewImage = DISCLOSURE_INDICATOR;
                    break;
                case AccessoryView.Checkmark:
                {
                    if(this.props.item.isSelected)
                        accessoryViewImage = CHECKMARK;
                    else
                        accessoryViewImage = null;
                }
                    break;
            }
            return (              
                <Image source={accessoryViewImage} style={styles.listRowAccessory}></Image>
            );
        }
        return null;
    }
}

const styles = StyleSheet.create({
    textsContainer:{
        flexDirection: 'column',
        flex: 1
    },
    listRowContainer:{
        flex: 1,
        minHeight: 44,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    listRowTitle: {
        fontFamily: "Helvetica",
        fontSize: 15,
        color: 'black',
        textAlign: "left",
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
    },
    listRowSubTitle: {
        fontFamily: "Helvetica",
        fontSize: 14,
        color: '#8f8e94',
        textAlign: "left",
        marginLeft: 15,
        marginTop: 5,
        marginRight: 15,
        // marginBottom: 15,
    },
    listRowSingleSubTitle: {
        fontFamily: "Helvetica",
        fontSize: 14,
        color: '#8f8e94',
        textAlign: "left",
        marginLeft: 15,
        marginTop: 6,
        marginRight: 15,
        marginBottom: 15,
    },
    listRowLastSubTitle: {
        fontFamily: "Helvetica",
        fontSize: 14,
        color: '#8f8e94',
        textAlign: "left",
        marginLeft: 15,
        marginTop: 5,
        marginRight: 15,
        marginBottom: 15
    },
    listRowDetail: {
        fontFamily: "Helvetica",
        fontSize: 14,
        color: '#8f8e94',
        textAlign: "right",
        marginRight: 15,
        minWidth: 75,
        maxWidth: (Dimensions.get('window').width * 2)/3,
        justifyContent:"center",
    },
    listRowTitleWithoutSubTitle: {
        fontFamily: "Helvetica",
        fontSize: 15,
        color: 'black',
        textAlign: "left",
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    listRowAccessory: {
        width: 13,
        height: 13,
        marginRight: 15,
        justifyContent:"center",
            // alignItems: "flex-end",
    }
  });
export default ListRow;