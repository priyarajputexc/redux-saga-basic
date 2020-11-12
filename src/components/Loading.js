import React from "react";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";

const Loading = (props) => {
  return <View>{props.isLoading && <ActivityIndicator size="large" />}</View>;
};

const mapStateToProps = (state) => ({
  isLoading: state.loading,
});

export default connect(mapStateToProps, null)(Loading);
