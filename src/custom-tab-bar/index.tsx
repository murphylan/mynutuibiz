import { CoverImage, CoverView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useContext, useState } from 'react';
import UserContext from '../UserContext';
import './index.scss';

const CustomTabBar = () => {

  const { selectedTab, setSelectedTab } = useContext(UserContext);

  const [tabData, setTabData] = useState({
    list: [
      {
        pagePath: '/pages/index/index',
        selectedIconPath: '../images/tabbar_home_on.png',
        iconPath: '../images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: '/pages/cate/index',
        selectedIconPath: '../images/tabbar_cate_on.png',
        iconPath: '../images/tabbar_cate.png',
        text: '分类'
      },
      {
        pagePath: '/pages/hot/index',
        selectedIconPath: '../images/hot_selected.png',
        iconPath: '../images/hot.png',
        text: '热门'
      },
      {
        pagePath: '/pages/cart/index',
        selectedIconPath: '../images/tabbar_cart_on.png',
        iconPath: '../images/tabbar_cart.png',
        text: '购物车'
      },
      {
        pagePath: '/pages/my/index',
        selectedIconPath: '../images/tabbar_my_on.png',
        iconPath: '../images/tabbar_my.png',
        text: '个人中心'
      }
    ]
  });

  const onSwitch = (index) => {
    setSelectedTab(index)
    Taro.switchTab({
      url: tabData.list[index].pagePath
    })
  }

  return (
    <CoverView className='tab-bar'>
      {tabData.list.map((item, index) => {
        return (
          <CoverView key={index} className='tab-bar-item'
            style={index === 2 ? { height: '63px' } : {}}
            onClick={onSwitch.bind(this, index)}>
            <CoverImage src={selectedTab === index ? item.selectedIconPath : item.iconPath} />
            <CoverView style={{ color: selectedTab === index ? '#ed6c00' : "666" }}>{item.text}</CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
}

export default CustomTabBar;