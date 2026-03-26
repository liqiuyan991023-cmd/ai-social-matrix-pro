'use client';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

export default function PricingPage() {
  const { data: session } = useSession();

  const plans = [
    {
      name: "免费版",
      price: "¥0",
      period: "永久",
      features: [
        "AI 文案生成 10 次/月",
        "AI 图片生成 5 张/月",
        "基础数据分析",
        "支持 2 个平台账号",
        "标准功能访问"
      ],
      button: "开始使用",
      popular: false
    },
    {
      name: "基础版",
      price: "¥99",
      period: "月",
      features: [
        "AI 文案生成 100 次/月",
        "AI 图片生成 50 张/月",
        "完整数据分析",
        "支持 5 个平台账号",
        "定时发布功能",
        "优先技术支持"
      ],
      button: "立即购买",
      popular: true
    },
    {
      name: "专业版",
      price: "¥299",
      period: "月",
      features: [
        "AI 文案生成无限次",
        "AI 图片生成无限张",
        "高级数据分析",
        "支持 10 个平台账号",
        "AI 热点挖掘",
        "优先技术支持",
        "专属客户经理"
      ],
      button: "立即购买",
      popular: false
    }
  ];

  const handleSubscribe = (plan: string) => {
    // 这里应该调用 Stripe 支付 API
    console.log(`订阅 ${plan} 套餐`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            选择适合您的套餐
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            无论您是个人创作者还是企业团队，我们都有适合您的方案，帮助您最大化社媒营销效果
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-md ${plan.popular ? 'ring-2 ring-primary' : ''}`}
            >
              <div className={`p-6 ${plan.popular ? 'bg-primary text-white' : 'bg-gray-50 dark:bg-gray-700'}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period !== "永久" && (
                    <span className="ml-2 text-sm opacity-80">/{plan.period}</span>
                  )}
                </div>
                {plan.popular && (
                  <div className="mt-4 inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    最受欢迎
                  </div>
                )}
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`mt-1 ${plan.popular ? 'text-white' : 'text-green-500'}`}>✓</span>
                      <span className={plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan.name)}
                  className={`w-full py-3 rounded-lg font-medium ${plan.popular ? 'bg-white text-primary hover:bg-gray-100' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                >
                  {plan.button}
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 常见问题 */}
        <motion.div 
          className="max-w-3xl mx-auto mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            常见问题
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "如何升级我的套餐？",
                answer: "您可以在个人中心的套餐管理页面直接升级您的套餐，升级后立即生效。"
              },
              {
                question: "套餐额度是如何计算的？",
                answer: "套餐额度按月计算，每月 1 号重置。例如，免费版用户每月可使用 10 次 AI 文案生成。"
              },
              {
                question: "支持哪些支付方式？",
                answer: "我们支持信用卡、支付宝、微信支付等多种支付方式，通过 Stripe 安全处理。"
              },
              {
                question: "可以退款吗？",
                answer: "如果您对服务不满意，可以在购买后 7 天内申请全额退款。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}