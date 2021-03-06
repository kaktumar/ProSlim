import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MapView } from 'expo';


import { set_location, async_fetch_jobs } from './../actions';


const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
};

// pos absolute = does nto try to take space away from others


class MapScreen extends Component {

  static navigationOptions = {
    title: 'Map',
    tabBarIcon: ({ tintColor }) => (
        <Icon
          name="my-location"
          size={30}
          color={tintColor}
        />),
  }


  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
  }


  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onButtonPress = () => {
    const { fetchJobsForLocation } = this.props;
    fetchJobsForLocation();
  }


  onRegionChange = (region) => {
    this.setState({ region });
  }

  onRegionChangeComplete = (region) => {
    const { setLocation } = this.props;
    this.setState({ region });
    setLocation(region.latitude, region.longitude);
  }

  render() {
    if (this.state.mapLoaded === false) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (

        <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={region => this.onRegionChangeComplete(region)}
          onRegionChange={region => this.onRegionChange(region)}
        />
        <View style={styles.buttonContainer}>
        <Button
        large
        title="Search Area For Jobs"
        backgroundColor="#009688"
        icon={{ name: 'search' }}
        onPress={this.onButtonPress}
        />
        </View>
      </View>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setLocation: (lat, lon) => dispatch(set_location({ latitude: lat, longitude: lon })),
  fetchJobsForLocation: () => dispatch(async_fetch_jobs(() => dispatch(NavigationActions.navigate({ routeName: 'deck' })))),
});

export default connect(null, mapDispatchToProps)(MapScreen);
