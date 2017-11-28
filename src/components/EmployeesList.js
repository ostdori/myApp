import React, { Component } from "react";
import { StyleSheet, View, ListView, TouchableHighlight, NavigatorIOS, TouchableOpacity } from "react-native";
import { bind } from "../utils/utils";
import Employee from "../components/Employee";
import EmployeeDetails from "../components/EmployeeDetails";
import PropTypes from 'prop-types';

class EmployeesList extends Component {
  // in tozeh constructor hastesh ke dar line zir ham props migire ham context: 
  //constructor EmployeesList(props: any, context: any): EmployeesList
  constructor(props, context) {
    super(props, context);
    bind(this)("renderRow", "rowOnPress");
  }

  static propTypes = {
    dataSource: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  };


  renderRow(rowData, sectionId, rowId, highlightRow) {
    const rowOnPress = () => {
      this.rowOnPress(rowData);
      highlightRow(sectionId, rowId);
    };

    return (
      <TouchableHighlight onPress={rowOnPress}>
        <View style={styles.flex1}>
          <Employee employee={rowData} />
        </View>
      </TouchableHighlight>
    );
  }

  rowOnPress(employee) {
    this.props.navigator.push({
      title: `${employee.name.first.toUpperCase()} ${employee.name.last.toUpperCase()}`,
      component: EmployeeDetails,
      passProps: { employee }
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        renderRow={this.renderRow}
        enableEmptySections
      />
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 10,
    paddingTop: 12,

  }
});

export default EmployeesList;
