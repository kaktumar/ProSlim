import React, { Component } from 'react';
import Expo, { AppLoading } from 'expo';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Slides from './../components/Slides';
import { NavigationActions } from 'react-navigation';
import * as actions from './../actions';


const SLIDE_DATA = [
  { text: 'Congratulations on installing ProSlim! Your slimming journey begins here! No starvation, no calorie counting.. ', color: '#03a9f4' },
  { text: 'Basically, you will only and only eat FRESH MEAT, POULTRY, SEAFOOD and EGGS. Calorie free diet drinks are okay. On some days, greens are allowed too!', color: '#009688' },
  { text: 'ProSlim will provide you with meal ideas and recipes suited even for those who have never cooked in their lives. You will not need expensive cooking utensils or gourmet ingredients.', color: '#03a9f4' },
  { text: 'You must NOT eat anything that is not allowed. Or else you will lose at least one week of progress on your way to be slim. No alcohol, no sugars, no junk food, no guilty pleasures.', color: '#f00' },
  { text: 'Enough talking. Let\'s give you a list of what you can eat, what you can cook and get you logging your days.', color: '#009688' },
];


class WelcomeScreen extends Component {


  async componentWillMount() {
    try {
      const { loadToken, loginScreen, mapScreen } = this.props;
      const firstTimeLoading = await AsyncStorage.getItem('firstTimeLoading');
      firstTimeLoading ? mapScreen() : loginScreen();
    } catch (reason) {
      console.error(reason);
    }
  }


  onComplete = () => {
    // CLICKED OK BUTTON, GO TO AUTH;
  }

  render() {
    const { token } = this.props;
    if (!token) {
      return (
        <AppLoading />
      );
    }
    return (
        <Slides data={SLIDE_DATA} onComplete={this.onComplete} />
    );
  }
}


const mapStateToProps = state => ({
  firstTimeLoading: state.auth.firstTimeLoading,
});

const mapDispatchToProps = dispatch => ({

  logout: () => dispatch({ type: 'Logout' }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'auth' })),
  mapScreen: () => dispatch(NavigationActions.navigate({ routeName: 'main' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
