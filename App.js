import React from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Transaction from './components/Transaction';

const {height, width} = Dimensions.get('screen');

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={[{...styles.HomeHeader}]}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#CCCC00',
                width: width / 10,
                borderRadius: 40,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: 15,
              }}>
              <Text style={{color: '#909090'}}>Welcome!</Text>
              <Text style={{fontSize: 18.0, fontWeight: 'bold'}}>John Doe</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              width: width / 10,
              borderRadius: 10,
            }}></View>
        </View>
        <Animated.View style={styles.HomeBody}>
          <LinearGradient
            colors={['#4895EF', '#DD9ED5', '#FF9966']}
            style={[{...styles.Box, borderRadius: 20}]}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.titleHeader}>Total Balance</Text>
              <Text style={{fontSize: 44.0, paddingTop: 8, color: '#FFF'}}>
                $ 4800.00
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 30.0,
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: '#FFF',
                    opacity: 0.6,
                    shadowOpacity: 5,
                    width: width / 10,
                    height: height / 20,
                    borderRadius: 40,
                  }}></View>
                <View style={{paddingLeft: 8.0}}>
                  <Text style={{color: '#F0F0F0', fontSize: 16.0}}>Income</Text>
                  <Text
                    style={{fontSize: 16.0, color: '#FFF', fontWeight: 'bold'}}>
                    2,500.000
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: '#FFF',
                    opacity: 0.6,
                    shadowOpacity: 5,
                    width: width / 10,
                    height: height / 20,
                    borderRadius: 40,
                  }}></View>
                <View style={{paddingLeft: 8.0}}>
                  <Text style={{color: '#F0F0F0', fontSize: 16.0}}>
                    Expenses
                  </Text>
                  <Text
                    style={{fontSize: 16.0, color: '#FFF', fontWeight: 'bold'}}>
                    2,500.000
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 22.0, letterSpacing: 1}}>
            Transactions
          </Text>
          <Text style={{color: '#4361EE', fontSize: 16.0}}>View All</Text>
        </View>
        <Transaction />
        <Transaction />
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  HomeBody: {
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
  },
  HomeHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    height: height / 1.2,
  },
  titleHeader: {fontSize: 18, color: '#E9ECEF'},
  Box: {
    width: '100%',
    height: 196,
    borderRadius: 15,
    padding: 22,
    elevation: 5,
  },
});
