import React, { useState } from "react";
import { View } from "@tarojs/components";
import {
  Swiper, Image, Grid, Space, ConfigProvider, Collapse,
  Cell, Ellipsis, Card, Divider,
} from '@nutui/nutui-react-taro';
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

  const state = [
    {
      src:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '我们善于分析用户行为，通过数据驱动的方法改进产品，确保用户满意度。',
      price: '388',
      vipPrice: '378',
      shopDescription: '自营',
      delivery: '厂商配送',
      shopName: '大数据分析落地应用',
    },
    {
      src:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '基于我们的大数据应用平台，用户可开发企业上层应用，激发数据的潜在价值。',
      price: '388',
      vipPrice: '378',
      shopDescription: '自营',
      delivery: '厂商配送',
      shopName: '数据库可视化、个性化服务',
    },
    {
      src:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '详细了解企业现状，洞察需求，为数字化转型提供明确方向和策略规划。',
      price: '388',
      vipPrice: '378',
      shopDescription: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>',
    },
    {
      src:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '根据用户提出的需求，提供个性化数字化解决方案，精准满足业务挑战和目标。',
      price: '388',
      vipPrice: '378',
      shopDescription: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>',
    },
    {
      src:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '确保解决方案成功实施，提供持续支持，持久陪伴，助力业务增长。',
      price: '388',
      vipPrice: '378',
      shopDescription: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>',
    },
    {
      src:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '关注客户满意度，不断升级数字化能力，实现长期共赢合作。',
      price: '388',
      vipPrice: '378',
      shopDescription: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>',
    }
  ];

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
          <Grid columns="4">
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
            <Card
              src={state[0].src}
              title={state[0].title}
              price={state[0].price}
              vipPrice={state[0].vipPrice}
              shopDescription={state[0].shopDescription}
              delivery={state[0].delivery}
              shopName={state[0].shopName}
              tag={<div> 八大分析模型，灵活组合。 </div>}>
            </Card>
            <Card
              src={state[1].src}
              title={state[1].title}
              price={state[1].price}
              vipPrice={state[1].vipPrice}
              shopDescription={state[1].shopDescription}
              delivery={state[1].delivery}
              shopName={state[1].shopName}
              tag={<div> 丰富UI组件，提升用户体验 </div>}>
            </Card>
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
            <Card
              src={state[2].src}
              title={state[2].title}
              price={state[2].price}
              vipPrice={state[2].vipPrice}
              shopDescription={state[2].shopDescription}
              delivery={state[2].delivery}
              shopName={state[2].shopName}
              tag={<div> 业务全面评估 </div>}>
            </Card>
            <Card
              src={state[3].src}
              title={state[3].title}
              price={state[3].price}
              vipPrice={state[3].vipPrice}
              shopDescription={state[3].shopDescription}
              delivery={state[3].delivery}
              shopName={state[3].shopName}
              tag={<div> 专属解决方案 </div>}>
            </Card>
            <Card
              src={state[4].src}
              title={state[4].title}
              price={state[4].price}
              vipPrice={state[4].vipPrice}
              shopDescription={state[4].shopDescription}
              delivery={state[4].delivery}
              shopName={state[4].shopName}
              tag={<div> 落地与陪跑 </div>}>
            </Card>
            <Card
              src={state[5].src}
              title={state[5].title}
              price={state[5].price}
              vipPrice={state[5].vipPrice}
              shopDescription={state[5].shopDescription}
              delivery={state[5].delivery}
              shopName={state[5].shopName}
              tag={<div> 助力客户持续成功 </div>}>
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
