import { Cart, Category, Find, Home, My } from '@nutui/icons-react-taro';
import { Tabbar } from '@nutui/nutui-react-taro';
import { useContext, useState } from 'react';
import Taro from '@tarojs/taro';
import UserContext from '../UserContext';
import './index.scss';

const CustomTabBar = () => {

  const { selectedTab, setSelectedTab } = useContext(UserContext);

  const iconSize = { width: 12, height: 12 };
  const [tabData, setTabData] = useState({
    list: [
      {
        id: 0,
        icon: <Home {...iconSize} />,
        text: '首页',
        pagePath: '/pages/index/index',
      },
      {
        id: 1,
        icon: <Category {...iconSize} />,
        text: '分类',
        pagePath: '/pages/cate/index',
      },
      {
        id: 2,
        icon: <Find {...iconSize} />,
        text: '发现',
        pagePath: '/pages/hot/index',
      },
      {
        id: 3,
        icon: <Cart {...iconSize} />,
        text: '购物车',
        pagePath: '/pages/cart/index',
      },
      {
        id: 4,
        icon: <My {...iconSize} />,
        text: '我的',
        pagePath: '/pages/my/index',
      },
    ]
  });

  const onSwitch = (e) => {
    setSelectedTab(e)
    Taro.switchTab({
      url: tabData.list[e].pagePath
    })
  }

  return (
    <Tabbar value={selectedTab} onSwitch={onSwitch} >
      {tabData.list.map(item => {
        return (
          <Tabbar.Item title={item.text} key={item.id} icon={item.icon} />
        )
      })}
    </Tabbar>
  )
}

CustomTabBar.options = {
  addGlobalClass: true,
}

export default CustomTabBar;