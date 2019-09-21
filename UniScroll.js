import React from 'react';
import { View } from 'react-native';
import MarqueeText from 'react-native-marquee';


export default function Unicorn({color}) {
    return (
      <View>
          <MarqueeText
          style={{ fontSize: 24, color}}
          duration={10000}
          marqueeOnStart
          loop
          >
            These unicorns have balloons for horns; but what good is a deflated horn?
            These unicorns have balloons for horns; but what good is a deflated horn?
            These unicorns have balloons for horns; but what good is a deflated horn?
            These unicorns have balloons for horns; but what good is a deflated horn?
            These unicorns have balloons for horns;
          </MarqueeText>
    </View>
  );
}
