# 🧠 AI Prompt Vault

Premium AI Prompt Vault - 1500+ high-quality prompts for Marketing, Programming & Writing.

## 🚀 Quick Start

### One-Command Setup

```bash
# Clone and install dependencies
npm install

# Start development server
npm run dev
```

Then open http://localhost:3000 in your browser.

---

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account (for payments)

### Setup

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd ai-prompt-vault

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Add your Stripe keys to .env.local
# NEXT_PUBLIC_STRIPE_KEY=pk_test_...
# STRIPE_SECRET_KEY=sk_test_...

# 5. Start development server
npm run dev
```

---

## 🔧 Environment Variables

Create `.env.local` in the root directory:

```env
# Stripe (required for payments)
NEXT_PUBLIC_STRIPE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Getting Stripe Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Switch to Test Mode
3. Go to Developers > API keys
4. Copy publishable and secret keys

---

## 🎨 Features

- **📚 1500+ Premium Prompts** across 3 categories
- **💳 Stripe Payment Integration** (test mode)
- **📱 Responsive Design** (Tailwind CSS)
- **⚡ Fast Performance** (Next.js 14)
- **🔒 Secure Payments** (Stripe)
- **📊 SEO Optimized**

### Categories

| Category | Prompts | Use Cases |
|----------|---------|-----------|
| 📊 Marketing | 500+ | Social media, email, ads, SEO |
| 💻 Programming | 500+ | Code generation, debugging, docs |
| ✍️ Writing | 500+ | Blog posts, articles, copy |

---

## 🛠️ Development

### Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Project Structure

```
ai-prompt-vault/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── checkout/     # Stripe checkout API
│   │   ├── catalog/          # Prompt catalog page
│   │   ├── checkout/         # Checkout page
│   │   ├── success/          # Payment success page
│   │   ├── data/
│   │   │   └── prompts.js    # 1500+ prompts database
│   │   ├── globals.css       # Tailwind styles
│   │   ├── layout.js        # Root layout
│   │   └── page.js          # Homepage
│   ├── components/          # Reusable components
│   └── lib/                # Utility functions
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 💳 Stripe Setup

### 1. Create Stripe Products

1. Go to Stripe Dashboard > Products
2. Create product "AI Prompt Vault - All Access"
3. Set price: $39.00 (one-time)
4. Copy price ID

### 2. Update API Route

Edit `src/app/api/checkout/route.js`:

```javascript
const session = await stripe.checkout.sessions.create({
  line_items: [
    {
      price: 'price_YOUR_PRICE_ID',  // Replace with your price ID
      quantity: 1,
    },
  ],
  // ...
})
```

### 3. Test Payments

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Other Platforms

- **Netlify**: Connect your GitHub repo
- **Railway**: Deploy with Docker
- **Fly.io**: Edge deployment

---

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

## 🤝 Support

- Email: support@aipromptvault.com
- Issues: GitHub Issues

---

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Happy prompting! 🚀**