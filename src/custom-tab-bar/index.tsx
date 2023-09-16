import { Cart, Category, Find, Home, My } from '@nutui/icons-react-taro';
import { Tabbar } from '@nutui/nutui-react-taro';
import { useContext, useState } from 'react';

import UserContext from '../UserContext';
import './index.scss';
import Taro from '@tarojs/taro';

export default function index() {

  const { selectedTab, setSelectedTab } = useContext(UserContext);

  const [tabData, setTabData] = useState({
    list: [
      {
        id: 0,
        icon: <Home width={12} height={12} />,
        text: '首页',
        url: 'pages/index/index',
      },
      {
        id: 1,
        icon: <Category width={12} height={12} />,
        text: '分类',
        url: 'pages/cate/indexe',
      },
      {
        id: 2,
        icon: <Find width={12} height={12} />,
        text: '发现',
        url: 'pages/hot/indexe',
      },
      {
        id: 3,
        icon: <Cart width={12} height={12} />,
        text: '购物车',
        url: 'pages/cart/index',
      },
      {
        id: 4,
        icon: <My width={12} height={12} />,
        text: '我的',
        url: 'pages/my/index',
      },
    ]
  });

  const onSwitch = (e) => {
    setSelectedTab(e)
    if (e == 0) {
      Taro.switchTab({
        url: '/pages/index/index'
      })
    } else if (e == 1) {
      Taro.switchTab({
        url: '/pages/cate/index'
      })
    } else if (e == 2) {
      Taro.switchTab({
        url: '/pages/hot/index'
      })
    } else if (e == 3) {
      Taro.switchTab({
        url: '/pages/cart/index'
      })
    } else if (e == 4) {
      Taro.switchTab({
        url: '/pages/my/index'
      })
    }
  }

  return (
    <>
      <Tabbar value={selectedTab} onSwitch={onSwitch} >
        {tabData.list.map(item => {
          return (
            <Tabbar.Item title={item.text} key={item.id} icon={item.icon} />
          )
        })}
      </Tabbar>
    </>
  )
}