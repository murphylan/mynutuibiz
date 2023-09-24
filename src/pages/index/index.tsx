import { useState } from "react";
import Taro from "@tarojs/taro";
import { Dongdong } from '@nutui/icons-react-taro';
import {
  Card,
  Cell,
  Collapse,
  ConfigProvider,
  Divider,
  Ellipsis,
  Grid,
  Image,
  Space,
  Swiper,
} from '@nutui/nutui-react-taro';
import { View } from "@tarojs/components";
import { content, state } from "../../data/home"; // 导入 contentItems
import './index.scss';

const Index = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ];
  const [activeName, setActiveName] = useState(['1', '2', '3'])
  const onChange = (activeName, name, status) => {
    setActiveName(activeName)
  };

  // 生成多个 Card 组件
  const generateCards = (items) => {
    return items.map((item, index) => (
      <Card
        key={index}
        src={item.src}
        title={item.title}
        price={item.price}
        vipPrice={item.vipPrice}
        shopDescription={item.shopDescription}
        delivery={item.delivery}
        shopName={item.shopName}
        tag={<div>{item.tag}</div>}
        onClick={(e) => {
          handleCardClick(item, e);
        }}
      />
    ));
  };

  const handleCardClick = (item, e) => {
    console.log(item); // 在这里可以访问到点击的卡片的信息
    console.log(e); // 如果需要访问事件对象，也可以在参数中添加

    Taro.navigateTo({
      url: '/pages/model/index',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
      },
      success: function (res) {
        // 通过 eventChannel 向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  };

  return (
    <>
      <ConfigProvider
        theme={{
          nutuiSpaceGap: '7rpx',
        }}
      >
        <Space direction="vertical">
          <Swiper defaultValue={0} indicator={true} loop={true} autoPlay>
            {list.map((item) => {
              return (
                <Swiper.Item key={item}>
                  <Image src={item} width="100%" height="380rpx;" />
                </Swiper.Item>
              )
            })}
          </Swiper>
          <Grid columns="4" onClick={(itme) => {
            console.log(itme);
            Taro.navigateTo({
              url: '/pages/business-scope/index',
              events: {
                // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                acceptDataFromOpenedPage: function (data) {
                  console.log(data)
                },
              },
              success: function (res) {
                // 通过 eventChannel 向被打开页面传送数据
                res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
              }
            })
          }}>
            <Grid.Item text="业务范围">
              <Dongdong width={10} height={10} />
            </Grid.Item>
            <Grid.Item text="优势分析">
              <Dongdong color="red" />
            </Grid.Item>
            <Grid.Item text="自主创新">
              <Dongdong width={20} height={20} color="#478EF2" />
            </Grid.Item>
            <Grid.Item text="成功案例">
              <Dongdong color="red" />
            </Grid.Item>
          </Grid>
        </Space>
      </ConfigProvider>

      <Cell>
        <View className="border-left">大数据分析与数据可视化解决方案专家</View>
      </Cell>
      <Cell>
        <ConfigProvider
          theme={{
            nutuiSpaceGap: '2rpx',
          }}
        >
          <Space direction="vertical">
            {generateCards(state.slice(0, 2))}
          </Space>
        </ConfigProvider>
      </Cell>
      <Cell>
        <View className="border-left">如何成功构建 数字化经营能力</View>
      </Cell>
      <Cell>
        <ConfigProvider
          theme={{
            nutuiSpaceGap: '2rpx',
          }}
        >
          <Space direction="vertical">
            {generateCards(state.slice(2))}
          </Space>
        </ConfigProvider>
      </Cell>
      <Collapse activeName={activeName} onChange={onChange}>
        <Collapse.Item title="标题1" name="1">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </Collapse.Item>
        <Collapse.Item title="标题2" name="2">
          <Ellipsis content={content} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="标题3" name="3">
          <Ellipsis content={content} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
      </Collapse>
      <Cell>
        <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', borderStyle: 'dashed' }}>
          文本
        </Divider>
      </Cell>
    </>
  )
}

export default Index;
