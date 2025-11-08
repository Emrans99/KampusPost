import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface CustomInputProps extends TextInputProps {
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <TextInput
      style={styles.input} 
      placeholderTextColor="#9A9A9A" 
      {...props} 
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default CustomInput;