import { View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { useMemo, useState } from 'react'
import type CustomTabBar from '../../custom-tab-bar'
import './index.scss'

const Index = () => {
  const page = useMemo(() => Taro.getCurrentInstance().page, [])

  useDidShow(() => {
    const tabbar = Taro.getTabBar<CustomTabBar>(page)
    tabbar?.setSelected(0)
  })
  return (
    <View className='index'>
      <View className='header-title'>项目计划</View>
    </View>
  )
}
export default Index;
