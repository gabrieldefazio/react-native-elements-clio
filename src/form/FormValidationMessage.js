import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text as NativeText } from 'react-native';
import colors from '../../../react-native-elements-0.19.1/src/config/colors';
import Text from '../../../react-native-elements-0.19.1/src/text/Text';
import normalize from '../../../react-native-elements-0.19.1/src/helpers/normalizeText';
import ViewPropTypes from '../../../react-native-elements-0.19.1/src/config/ViewPropTypes';

const FormValidationMessage = props => {
  const {
    containerStyle,
    labelStyle,
    children,
    fontFamily,
    ...attributes
  } = props;
  return (
    <View
      {...attributes}
      style={[styles.container, containerStyle && containerStyle]}
    >
      <Text
        style={[
          styles.label,
          labelStyle && labelStyle,
          fontFamily && { fontFamily },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

FormValidationMessage.propTypes = {
  containerStyle: ViewPropTypes.style,
  labelStyle: NativeText.propTypes.style,
  children: PropTypes.any,
  fontFamily: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 1,
    color: colors.error,
    fontSize: normalize(12),
  },
});

export default FormValidationMessage;
