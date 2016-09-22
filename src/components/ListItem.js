import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { expanded, library } = this.props;

    if (expanded) {
      return (
        <Text style={{ flex: 1, paddingLeft: 15 }}>{library.description}</Text>
      );
    }
  }

  render() {
    const { textStyle } = styles;
    const { id, title } = this.props.library;

    console.log('props', this.props);
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
        <View>
          <CardSection>
            <Text style={textStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

//ownProps is properties passed to component
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return {
    expanded
  };
};

export default connect(mapStateToProps, actions)(ListItem);
