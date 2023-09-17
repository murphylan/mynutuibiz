import React, { useState } from "react";
import { Swiper, Image, Cell, Collapse, Ellipsis, Divider } from '@nutui/nutui-react-taro';
import { View } from "@tarojs/components";

const Index = () => {

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ];

  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
    current6: 1,
    current7: 1,
    current8: 1,
  });

  const handleStep = (params: string) => {
    if (stepState[params] >= 8) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  };

  const [activeName, setActiveName] = useState(['1', '2', '3'])
  const onChange = (activeName, name, status) => {
    setActiveName(activeName)
  };
  const content = [
    `
    对于企业数字化经营能力的构建与落地而言，除科学的方法论外，还需要成熟的产品体系、落地的方案体系、
    专业的服务体系和丰富的生态体系来支撑。这个软件系统的背后，是我们公司多年来在软件开发和运营方面积累的宝贵经验，
    融合我公司创新的用户行为大数据分析，8大行为分析模块，帮助企业接入和打通全域数据，整合业务经营和用户行为等多种数据源，
    提供全链路经营分析，助力业务决策和提效增值。
    `,
    `
    用户行为分析还可以为商家管理的培训组织提供宝贵的市场洞察。通过了解用户的兴趣和需求，这些组织可以根据市场需求调整产品功能点，
    制定更吸引人的文案，并改进服务。
    `,
  ];

  return (
    <>
      <Swiper defaultValue={0} indicator={true} loop={true} autoPlay>
        {list.map((item) => {
          return (
            <Swiper.Item key={item}>
              <Image src={item} width="100%" height="380rpx;" />
            </Swiper.Item>
          )
        })}
      </Swiper>
      <Cell>
        <View className="border-left">武汉银科达信息技术有限公司</View>
      </Cell>
      <Collapse activeName={activeName} >
        <Collapse.Item title="企业数字化经营能力" name="2">
          <Ellipsis content={content[0]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="大数据分析与营销科技解决方案专家" name="3">
          <Ellipsis content={content[1]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="微信生态数字化运营解决方案" name="3">
          <Ellipsis content={content[1]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
      </Collapse>
      <Cell>
        <View className="border-left">大数据分析与营销科技解决方案专家</View>
      </Cell>
      <Collapse activeName={activeName} >
        <Collapse.Item title="企业数字化经营能力" name="2">
          <Ellipsis content={content[0]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="用户行为分析" name="3">
          <Ellipsis content={content[1]} direction="end" rows="3"
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