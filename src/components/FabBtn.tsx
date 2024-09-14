import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {colors} from '../styles';

// Define types for component props
interface FabButtonProps {
  onPress: () => void;
  iconName?: string;
  style?: ViewStyle;
}

const FabButton: React.FC<FabButtonProps> = ({
  onPress,
  iconName = 'add',
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.fab, style]} onPress={onPress}>
      <Icon name={iconName} size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 16,
    right: 16, // Position at bottom-right
    elevation: 5, // Shadow for Android
    shadowColor: colors.black, // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default FabButton;
