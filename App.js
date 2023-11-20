import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const AccountsTable = ({ data }) => {
  const tableHead = ['ID', 'Username', 'Password', 'User Type'];
  const widthArr = [60, 160, 160, 120];

  return (
    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
      <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
      {data.map((rowData, index) => (
        <Row
          key={index}
          data={[rowData.ID.toString(), rowData.username, rowData.password, rowData.usertype]}
          widthArr={widthArr}
          style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
          textStyle={styles.text}
        />
      ))}
    </Table>
  );
};

const UsersTable = ({ data }) => {
  const tableHead = ['ID', 'First Name', 'Last Name', 'Course', 'Year', 'Section'];
  const widthArr = [60, 120, 120, 120, 60, 60];

  return (
    <ScrollView horizontal={true}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
        <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
        {data.map((rowData, index) => (
          <Row
            key={index}
            data={[rowData.ID.toString(), rowData.firstname, rowData.lastname, rowData.course, rowData.year, rowData.section]}
            widthArr={widthArr}
            style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
            textStyle={styles.text}
          />
        ))}
      </Table>
    </ScrollView>
  );
};

const StudentsTable = ({ data }) => (
  <View>
    <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
      <Row
        data={['ID', 'Name', 'Course']}
        widthArr={[60, 120, 120]}
        style={styles.header}
        textStyle={styles.text}
      />
    </Table>
    <FlatList
      data={data}
      keyExtractor={(item) => item.ID.toString()}
      renderItem={({ item }) => (
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row
            data={[item.ID.toString(), item.name, item.course]}
            widthArr={[60, 120, 120]}
            style={[styles.row, { backgroundColor: '#F7F6E7' }]}
            textStyle={styles.text}
          />
        </Table>
      )}
    />
  </View>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountsData: [
        { ID: 1, username: 'Jerry Ale', password: 'jerry1', usertype: 'teacher' },
        { ID: 2, username: 'Nicole Paguican', password: 'ja.cole2', usertype: 'student' },
        { ID: 3, username: 'Earl Sarabia', password: 'earl23', usertype: 'student' },
        { ID: 4, username: 'Fermo Asufra', password: 'asufra4', usertype: 'teacher' },
        { ID: 5, username: 'Arnold', password: 'arnold456', usertype: 'student' },
      ],
      usersData: [
        { ID: 1, firstname: 'Nicole', lastname: 'Paguican', course: 'IT', year: '2021', section: 'A', usertype: 'student' },
        { ID: 2, firstname: 'Earl', lastname: 'Sarabia', course: 'CRIM', year: '2022', section: 'B', usertype: 'student' },
        { ID: 3, firstname: 'Arnold', lastname: 'Felisilda', course: 'COMSCIE', year: '2022', section: 'C', usertype: 'student' },
      ],
      studentsData: [
        { ID: 1, name: 'Nicole', course: 'BSIT' },
        { ID: 2, name: 'Earl', course: 'CRIM' },
        { ID: 3, name: 'Arnold', course: 'COMSCIE' },
        
      ],
    };
  }

  render() {
    const { accountsData, usersData, studentsData } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.tableHeader}>Accounts Table</Text>
          <AccountsTable data={accountsData} />

          <Text style={styles.tableHeader}>Users Table</Text>
          <UsersTable data={usersData} />

          <Text style={styles.tableHeader}>Students Table</Text>
          <StudentsTable data={studentsData} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', alignItems: 'center' },
  header: { height: 60, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  dataWrapper: { marginTop: -1 },
  row: { height: 50, backgroundColor: '#E7E6E1' },
  tableHeader: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  flatListContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  flatListID: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  flatListName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  flatListCourse: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
