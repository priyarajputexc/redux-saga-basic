import React from "react";
import { FlatList, Text } from "react-native";
import { connect } from "react-redux";

const Users = (props) => {
  const renderItem = ({ item }) => (
    <Text style={{ textAlign: "center", marginBottom: 10 }}>
      {item.name} - {item.email}
    </Text>
  );

  return (
    <FlatList
      data={props.users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, null)(Users);
