import React, { Component } from "react";
import {
  StyleSheet,
  ListView,
  TextInput,
  View,
  NavigatorIOS
} from "react-native";
import { bind } from "../utils/utils";
import EmployeesApi from "../api/mockDataApi";
import EmployeesList from "../components/EmployeesList";

class Search extends Component {
  constructor(props, context) {
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    super(props, context);
    this.state = {
      text: "search here",
      dataSource: ds.cloneWithRows([])
    };

    bind(this)("searchInputOnChange", "getAllEmployeesAndUpdateData");
  }

  componentDidMount() {
    this.getAllEmployeesAndUpdateData();
  }

  getAllEmployeesAndUpdateData() {
    EmployeesApi.getAllEmployees().then(
      function(data) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data),
          isLoading: false
        });
      }.bind(this)
    );
  }

  searchInputOnChange(text) {
    if (text.length < 1) {
      this.getAllEmployeesAndUpdateData();
      this.setState({
        text
      });
    }

    EmployeesApi.searchEmployeeByName(text).then(
      function(res) {
        this.setState({
          text,
          dataSource: this.state.dataSource.cloneWithRows(res)
        });
      }.bind(this)
    );
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
          style={styles.searchInput}
          autoCorrect={false}
          clearTextOnFocus={true}
          value={this.state.text}
          onChangeText={this.searchInputOnChange}
          placeholderTextColor='lightgray'
          keyboardAppearance= 'light'
        />
        <EmployeesList
          dataSource={this.state.dataSource}
          navigator={this.props.navigator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 100
  },
  searchInput: {
    height: 50,
    margin: 15,
    marginBottom: 5,
    marginTop: 0,
    padding: 10,
    borderWidth: 1,
    borderColor: "indianred",
    fontStyle: 'italic',
    maxHeight: 40,
    
  }
});

export default Search;
