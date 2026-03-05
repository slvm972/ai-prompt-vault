# 🍋 Lemon Squeezy Integration - AI Prompt Vault

## ✅ Що змінено:

**Замінено Stripe на Lemon Squeezy:**
- Кнопка оплати тепер веде прямо на Lemon Squeezy checkout
- Видалено залежність від Stripe SDK
- Спрощено процес оплати

## 🔗 Lemon Squeezy Checkout Link:

```
https://mostovoy-ai.lemonsqueezy.com/checkout/buy/cd5c0d33-6bf5-49f9-a366-1b46f8cf92c7
```

## 📁 Змінені файли:

### 1. `src/app/checkout/page.js`
**Було:** Stripe Elements форма + SDK
**Стало:** Пряме перенаправлення на Lemon Squeezy

```javascript
const lemonSqueezyUrl = 'https://mostovoy-ai.lemonsqueezy.com/checkout/buy/cd5c0d33-6bf5-49f9-a366-1b46f8cf92c7'

const handleCheckout = () => {
  window.location.href = lemonSqueezyUrl
}
```

### 2. `src/app/page.js`
**Зміни:** Текст у pricing section
```javascript
// Було: "Secured by Stripe"
// Стало: "Secured by Lemon Squeezy"
```

### 3. `src/app/layout.js`
**Зміни:** Текст у footer
```javascript
// Було: "Secure via Stripe"
// Стало: "Secured by Lemon Squeezy"
```

### 4. `src/app/api/checkout/route.js`
**Було:** Stripe API integration
**Стало:** Проста заглушка з Lemon Squeezy URL

## 🚀 Як це працює:

1. Користувач натискає "Get Access Now" або "Pay $39"
2. Переходить на `/checkout`
3. Натискає кнопку оплати
4. **Перенаправляється на Lemon Squeezy** для завершення оплати
5. Після успішної оплати повертається на `/success`

## 🎨 Переваги Lemon Squeezy:

✅ **Немає потреби в Stripe SDK** - простіший код
✅ **Готовий checkout UI** - професійний дизайн
✅ **Підтримка податків** - автоматичний VAT/Sales Tax
✅ **Global payments** - підтримка різних країн
✅ **Webhooks** - автоматичні сповіщення про оплату
✅ **Customer management** - вбудована CRM

## 📊 Наступні кроки (опціонально):

### 1. Додати Webhook Handler

Створити `src/app/api/webhook/route.js` для обробки сповіщень від Lemon Squeezy:

```javascript
import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req) {
  const body = await req.text()
  const signature = req.headers.get('X-Signature')
  
  // Verify webhook signature
  const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET
  const hmac = crypto.createHmac('sha256', secret)
  const digest = Buffer.from(hmac.update(body).digest('hex'))
  const buffer = Buffer.from(signature)
  
  if (!crypto.timingSafeEqual(buffer, digest)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }
  
  const event = JSON.parse(body)
  
  // Handle different event types
  if (event.meta.event_name === 'order_created') {
    // Process successful order
    console.log('Order created:', event.data)
  }
  
  return NextResponse.json({ received: true })
}
```

### 2. Налаштувати Webhook в Lemon Squeezy

1. Зайдіть на [Lemon Squeezy Dashboard](https://app.lemonsqueezy.com)
2. Settings → Webhooks
3. Add Endpoint: `https://your-site.com/api/webhook`
4. Events: Order Created, Order Refunded, Subscription Created, etc.

### 3. Оновити Success Page

Додати можливість завантаження файлів після оплати:

```javascript
// src/app/success/page.js
export default function Success() {
  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <a href="/download/prompts.zip" className="btn">
        Download Your Prompts
      </a>
    </div>
  )
}
```

## 🧪 Testing:

1. Відкрийте сайт: `http://localhost:3000`
2. Натисніть "Get Access Now"
3. Перевірте що перенаправлення на Lemon Squeezy працює
4. Після оплати перевірте що повертаєтесь на `/success`

## 📝 Environment Variables:

Оновіть `.env.local`:

```bash
# Lemon Squeezy (не обов'язково для простого redirect)
LEMON_SQUEEZY_STORE_ID=your_store_id
LEMON_SQUEEZY_WEBHOOK_SECRET=your_webhook_secret

# Google Analytics (вже є)
NEXT_PUBLIC_GA_ID=G-MNX387THZJ

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🎉 Готово!

Тепер ваш сайт використовує Lemon Squeezy для оплати. Все працює простіше і надійніше!

## 📞 Support:

**Lemon Squeezy Docs:** https://docs.lemonsqueezy.com
**Dashboard:** https://app.lemonsqueezy.com

---

**Зміни зроблено:** 2026-03-05
**Статус:** ✅ Активно
