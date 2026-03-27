import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-03-25.dahlia',
});

export async function POST(request: NextRequest) {
  try {
    const { plan } = await request.json();

    let priceId = '';
    let successUrl = `${process.env.NEXTAUTH_URL}/dashboard`;
    let cancelUrl = `${process.env.NEXTAUTH_URL}/pricing`;

    // 根据套餐设置价格 ID
    switch (plan) {
      case '基础版':
        priceId = 'price_12345'; // 实际使用时需要替换为真实的 Stripe 价格 ID
        break;
      case '专业版':
        priceId = 'price_67890'; // 实际使用时需要替换为真实的 Stripe 价格 ID
        break;
      default:
        return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}