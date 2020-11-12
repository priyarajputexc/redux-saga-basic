import React from "react";
import { Button, View } from "react-native";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/action";

const Home = (props) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Button title="Get Users" onPress={props.getUsers} />
    </View>
  );
};

const mapDispatchToProps = {
  getUsers,
};

export default connect(null, mapDispatchToProps)(Home);
