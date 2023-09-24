import { Cell, Collapse, Divider, Ellipsis, Image, Swiper } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import Taro, { useReady } from "@tarojs/taro";
import { useState } from "react";
import { contentItems } from "../../data/contentItems"; // 导入 contentItems
import './index.scss';

function Index() {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ];

  // 对应 onReady
  useReady(() => {
    const page = Taro.getCurrentPages().pop();
    const eventChannel = page?.getOpenerEventChannel();
    // 监听 acceptDataFromOpenerPage 事件，获取上一页面通过 eventChannel 传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', (params) => {
      console.log(params);
    });

    eventChannel.emit('acceptDataFromOpenedPage', { a: 123 });
  });

  const [activeName, setActiveName] = useState(Array.from({ length: 20 }, (_, index) => (index + 1).toString()));

  const onChange = (activeName, name, status) => {
    setActiveName(activeName)
  }

  const generateCollapseItems = (start, end) => {
    return contentItems.slice(start - 1, end).map((item, index) => (
      <Collapse.Item
        title={item.title}
        name={`${start + index}`}
        key={start + index}
      >
        <Ellipsis content={item.content} direction="end" rows={3} expandText="展开" collapseText="收起" />
      </Collapse.Item>
    ));
  };


  return (
    <>
      <Swiper defaultValue={0} indicator={true} loop={true} autoPlay>
        {list.map((item, index) => (
          <Swiper.Item key={index}>
            <Image src={item} width="100%" height="380rpx;" />
          </Swiper.Item>
        ))}
      </Swiper>
      <Cell>
        <View className="border-left">我们善于利用大数据分析有效的解决企业痛点</View>
      </Cell>
      <Collapse activeName={activeName} onChange={onChange}>
        {generateCollapseItems(1, 4)}
      </Collapse>
      <Cell>
        <View className="border-left">借助方法论（八大分析模型）来解决企业痛点</View>
      </Cell>
      <Collapse activeName={activeName} onChange={onChange}>
        {generateCollapseItems(5, 12)}
      </Collapse>
      <Cell>
        <View className="border-left">用户行为分析给企业带来的价值</View>
      </Cell>
      <Collapse activeName={activeName} onChange={onChange}>
        {generateCollapseItems(13, 20)}
      </Collapse>
      <Cell>
        <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', borderStyle: 'dashed' }}>
          到底了
        </Divider>
      </Cell>
    </>
  );
}

export default Index;
