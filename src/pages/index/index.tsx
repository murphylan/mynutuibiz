import React, { useState } from "react";
import { View } from "@tarojs/components";
import { Swiper, Image, Grid, Space, ConfigProvider, Collapse, Cell, Ellipsis, Card, Divider } from '@nutui/nutui-react-taro';
import { Dongdong, DownArrow } from '@nutui/icons-react-taro'
import './index.scss'

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
  const content =
    'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
  const state = {
    src:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDescription: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  };
  return (
    <>
      <ConfigProvider
        theme={{
          nutuiSpaceGap: '10rpx',
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
          <Grid columns="4">
            <Grid.Item text="业务范围">
              <Dongdong width={10} height={10} />
            </Grid.Item>
            <Grid.Item text="分析模型">
              <Dongdong color="red" />
            </Grid.Item>
            <Grid.Item text="用户分析">
              <Dongdong width={20} height={20} color="#478EF2" />
            </Grid.Item>
            <Grid.Item text="解决方案">
              <Dongdong color="red" />
            </Grid.Item>
          </Grid>
        </Space>
      </ConfigProvider>
      <Cell>
        <View className="border-left">大数据分析与营销科技解决方案专家</View>
      </Cell>
      <Cell>
        <ConfigProvider
          theme={{
            nutuiSpaceGap: '2rpx',
          }}
        >
          <Space direction="vertical">
            <Card
              src={state.src}
              title={state.title}
              price={state.price}
              vipPrice={state.vipPrice}
              shopDescription={state.shopDescription}
              delivery={state.delivery}
              shopName={state.shopName}
              tag={<div> 自定义店铺介绍 </div>}>
            </Card>
            <Card
              src={state.src}
              title={state.title}
              price={state.price}
              vipPrice={state.vipPrice}
              shopDescription={state.shopDescription}
              delivery={state.delivery}
              shopName={state.shopName}
              tag={<div> 自定义店铺介绍 </div>}>
            </Card>
          </Space>
        </ConfigProvider>
      </Cell>
      <Cell>
        <View className="border-left">大数据分析与营销科技解决方案专家</View>
      </Cell>
      <Cell>
        <ConfigProvider
          theme={{
            nutuiSpaceGap: '2rpx',
          }}
        >
          <Space direction="vertical">
            <Card
              src={state.src}
              title={state.title}
              price={state.price}
              vipPrice={state.vipPrice}
              shopDescription={state.shopDescription}
              delivery={state.delivery}
              shopName={state.shopName}
              tag={<div> 自定义店铺介绍 </div>}>
            </Card>
            <Card
              src={state.src}
              title={state.title}
              price={state.price}
              vipPrice={state.vipPrice}
              shopDescription={state.shopDescription}
              delivery={state.delivery}
              shopName={state.shopName}
              tag={<div> 自定义店铺介绍 </div>}>
            </Card>
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
