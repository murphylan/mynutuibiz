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
    缺少实时的用户行为分析能力，使得产品功能改版的效果无法 量化衡量，核心流程优化点更多靠拍脑袋，
    bug问题的定位后知后觉造成长时间的 损失。 我们提供漏斗分析，帮助企业提升用户在产品上的转化，
    对企业核心转化 流程(如支付、注册、开户等)进行监控，洞察流失问题。同时，我们提供留存分 析，
    帮助企业提高用户留存，用数据验证用户最受欢迎的产品功能，提供用户行为 路径分析，合理分发站内流量，
    微调产品布局和交互，提升用户体验。
    `,
    `
    市场营销成本居高不下，投放拉新的效果追踪出现断层，无法追踪 各渠道实际转化率，难以准确分析 ROI 。 
    我们提供渠道追踪功能，追踪新用户的 渠道来源，用数据直观评估渠道拉新能力。同时，能分析注册转化和付费转化，
    端到端衡量渠道拉新质量，不断调整渠道影响策略。我们还为市场人员提供全站追踪 用户行为，优化站内浏览体验和内容交互，
    提高注册线索转化率。
    `,
    `
    “千人一面”的全量用户营销，投入产出难以把控，不精准的粗 犷方式难以真正提升存量用户的长期活跃度。 
    我们帮助企业锁定具有相似特征的 用户群体，定向推送“投其所好”的营销内容，提升不同用户群体的粘性。
    对长期 未登录即将流失的用户群体，及时推送消息和优惠券召回挽救。同时，我们建立用户标签体系和用户画像，
    将用户行为结合运营数据交叉分析，洞察核心用户特点， 勾勒精准用户画像。
    `,
    `
    有运营的 BI 系统，但运营指标监控不及时，未形成核 心的指标预警机制，决策滞后。 我们为管理人员提供实时、跨部门、各业务线的
    核心指标，管理人员邮箱可定时定期接收已订阅的报表自动推送，同时提供自定义的指标预警能力，帮助各个业务部门实时监控核心指标变化，
    对突发异动迅速察觉、分析，真正实现实时的数据驱动业务决策。
    `,
    `
    Session 分析是基于会话的分析，将用户单点发生的行为串联成整体进行分析。通过 Session 分析，可统计用户在产品中的整体访问深度、以及某些特殊节点的访问情况等。
    `,
    `
    漏斗分析主要用于分析一个多步骤过程中每一步的转化和流失情况。将流程(如查询-报 名-完善资料-结束)设置为一个漏斗，分析整体的转化情况，以及每一步具体的转化率和 转化中位时间。
    `,
    `
    留存分析是一种用来分析用户参与情况/活跃程度的分析模型，考查进行初始行为后的用 户中，有多少人会进行后续行为。这是衡量产品对用户价值高低的重要指标。
    `,
    `
    分布分析不但可以告诉你用户有多依赖你的产品，还可以告诉你某个事件指标的用户分布 情况。比如，查看订单金额在 100 元以下、100 元至 200 元、200 元以上三个区间的用户 分布情况。
    `,
    `
    用户调研后将收集到的信息进行整理和分析并归类，创建用户角色框架（更全面地反映出用户的状态），同时结合用户规模、用户价值和使用频率来划分，确定主要用户、次要用户和潜在用户。
    `,
    `
    用户生命周期价值(Life Time Value，LTV)，即用户在生命周期中贡献的商业价值。 LTV 分析是一种分析用户商业价值的分析模型，可分析特定日期访问的用户群体，在一 定时长内所贡献的人均价值。
    `,
    `
    用户路径分析主要用于分析用户在使用产品时的路径分布情况。 例如，在访问了某个电 商产品首页的用户后，有多大比例的用户进行了搜索，有多大比例的用户访问了分类页， 有多大比例的用户直接访问的商品详情页。
    `,
    `
    网页热力分析主要用来分析用户在网页上的点击、触达深度等情况，并以直观的效果展示 给使用者。
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
        <View className="border-left">用户行为分析是为了解决以下业务痛点</View>
      </Cell>
      <Collapse activeName={activeName} >
        <Collapse.Item title="产品迭代无法量化" name="1">
          <Ellipsis content={content[0]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="营销分析断层" name="2">
          <Ellipsis content={content[1]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="用户运营不精准" name="3">
          <Ellipsis content={content[2]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="全局运营指标监控不实时" name="3">
          <Ellipsis content={content[3]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
      </Collapse>
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
        <View className="border-left">八大分析模型</View>
      </Cell>
      <Collapse activeName={activeName} >
        <Collapse.Item title="Session 分析" name="1">
          <Ellipsis content={content[4]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="漏斗分析" name="2">
          <Ellipsis content={content[5]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="留存分析" name="3">
          <Ellipsis content={content[6]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="分布分析" name="3">
          <Ellipsis content={content[7]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="用户分析" name="3">
          <Ellipsis content={content[8]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="LTV分析" name="3">
          <Ellipsis content={content[9]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="用户路径分析" name="3">
          <Ellipsis content={content[10]} direction="end" rows="3"
            expandText="展开" collapseText="收起" />
        </Collapse.Item>
        <Collapse.Item title="网页热力分析" name="3">
          <Ellipsis content={content[11]} direction="end" rows="3"
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