import { useMemo } from 'react'
import { View, Text } from '@tarojs/components'
import CustomTabBar from '../../custom-tab-bar';
import './index.scss'
import Taro, { useDidShow } from '@tarojs/taro';


const Index = () => {
  const page = useMemo(() => Taro.getCurrentInstance().page, [])

  useDidShow(() => {
    const tabbar = Taro.getTabBar<CustomTabBar>(page)
    tabbar?.setSelected(3)
  })

  return (
    <View className='index'>
      <Text>我是购物车！</Text>
    </View>
  );
};

export default Index;
