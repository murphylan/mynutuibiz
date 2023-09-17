import React, { useState } from "react";
import { Steps, Step, Button, Cell, Collapse, Ellipsis, Divider } from '@nutui/nutui-react-taro';
import { View } from "@tarojs/components";

const Index = () => {
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
    在项目管理上，我们奉行敏捷开发理念，注重客户的实时沟通。每两周我们将定期汇报项目进展，确保客户全程参与和验证。
    同时我们也欢迎客户随时联系项目团队，实时了解项目动态。我们注重以客户为中心，确保交付的产品完全符合客户预期。
    希望通过规范的需求管理和敏捷的项目管理，为客户提供可靠、高质量的软件产品和服务，建立长期合作关系。
    `,
    `
    用户行为分析还可以为商家管理的培训组织提供宝贵的市场洞察。通过了解用户的兴趣和需求，这些组织可以根据市场需求调整产品功能点，
    制定更吸引人的文案，并改进服务。
    `,
  ];

  return (
    <>
      <Cell>
        <View className="border-left">大数据分析与营销科技解决方案专家</View>
      </Cell>
      <View className="steps-wrapper" style={{ height: '450px', padding: '15px 30px' }}>
        <Steps direction="vertical" value={stepState.current1}>
          <Step value={1} title="签订合同" description="与客户签订合同">1</Step>
          <Step value={2} title="项目启动" description="组织产品经理，UI设计师，开发工程师等组建项目团队">2</Step>
          <Step value={3} title="产品原型" description="与客户沟通产品需求，运用方法论对接每个功能点">3</Step>
          <Step value={4} title="视觉图" description="制作产品原型图并与客户确认">4</Step>
          <Step value={5} title="项目研发" description="项目研发进行，由项目经理同程参入，把控进度">5</Step>
          <Step value={6} title="项目测试" description="项目测试，发布测试报告，反馈给工程师进行调整">6</Step>
          <Step value={7} title="项目验收" description="提供最终产品包及源码给用户验收">7</Step>
          <Step value={8} title="项目上线" description="部署发布上线">8</Step>
        </Steps>
        <div className="steps-button" style={{ textAlign: 'right', transform: 'translateY(-30px)' }}>
          <Button type="danger" onClick={() => handleStep('current1')}>
            模拟环节
          </Button>
        </div>
      </View>
      <Cell>
        <View className="border-left">大数据分析与营销科技解决方案专家</View>
      </Cell>
      <Collapse activeName={activeName} >
        <Collapse.Item title="软件需求分析方法论" name="1">
          上图上的第三环节，我们将使用我司自主创新的方法论，积极与客户沟通交流需求，产出 《软件需求详细说明书》。
        </Collapse.Item>
        <Collapse.Item title="敏捷管理" name="2">
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