import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {height, width} = Dimensions.get('screen');

const Transaction = () => {
  return (
    <View
      style={{
        display: 'flex',
        paddingTop: 15,
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 15,
      }}>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: '#FFF',
          height: height / 10,
          padding: 13,
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#CCCC00',
              width: width / 8,
              height: height / 17,
              borderRadius: 50,
            }}></View>
          <Text
            style={{
              textAlign: 'center',
              alignItems: 'center',
              display: 'flex',
              fontSize: 18.0,
              fontWeight: 'bold',
              padding: 10,
            }}>
            Food
          </Text>
        </View>
        <View>
          <Text style={{letterSpacing: 0.8, fontWeight: '300'}}>-$45.00</Text>
          <Text
            style={{
              fontSize: 14.0,
              color: '#909090',
              paddingLeft: 10.0,
              paddingTop: 5.0,
            }}>
            Today
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({});
