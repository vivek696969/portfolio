# SOC Analyst Portfolio - Personalization Guide

## 🎯 Quick Start Checklist

Before launching your portfolio, complete these steps to make it truly yours:

### Priority 1: Must Complete (30 mins)
- [ ] Update your name and title in all sections
- [ ] Replace placeholder text with your bio
- [ ] Add your email and phone
- [ ] Update your projects (replace sample projects with yours)
- [ ] Add your certifications
- [ ] Add social media links

### Priority 2: Should Complete (1 hour)
- [ ] Upload professional photo/headshot
- [ ] Add GitHub repository links
- [ ] Add project demo links
- [ ] Customize colors to match your brand
- [ ] Update contact form with real email service
- [ ] Test on mobile device

### Priority 3: Nice to Have (optional)
- [ ] Add blog section
- [ ] Add testimonials
- [ ] Create custom domain
- [ ] Add Google Analytics
- [ ] Submit to job boards

---

## 📝 Step-by-Step Customization

### Step 1: Update Basic Information

**File: `src/components/Navigation.tsx`**
```typescript
// Change from "SOC.dev" to your name or brand
<a href="#home" className="gradient-text text-2xl font-bold">
  VIVEK DHAWAN // Update here
</a>
```

**File: `src/components/Hero.tsx`**
```typescript
// Update the hero section
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  Security Operations <span className="gradient-text">Analyst</span>
  // Update as needed
</h1>

<p className="text-xl text-gray-400 max-w-lg">
  Passionate cybersecurity professional... 
  // Replace with your own description
</p>
```

### Step 2: Add Your Projects

**File: `src/components/Projects.tsx`**

Replace the sample projects with your actual projects:

```typescript
const projects = [
  {
    title: 'SIEM Implementation Project',  // Your project title
    description: 'Built and configured Splunk SIEM for...',  // Your description
    tags: ['Splunk', 'SIEM', 'Security', 'Monitoring'],  // Your tech stack
    links: {
      github: 'https://github.com/yourname/project-repo',
      external: 'https://project-demo.com',  // Optional demo link
    },
  },
  // Add more of your projects...
]
```

**What to highlight:**
- Your role and what you accomplished
- Technologies used
- Impact/results
- Links to GitHub and live demo (if available)

### Step 3: Add Your Certifications

**File: `src/components/Certifications.tsx`**

Update with YOUR certifications:

```typescript
const certifications = [
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2024',
    status: 'Achieved',  // or 'Pursuing' or 'Planned'
    description: 'Core IT security certification covering...',
  },
  // Add your certifications
]
```

### Step 4: Update Skills

**File: `src/components/Skills.tsx`**

```typescript
const skillCategories = [
  {
    icon: Shield,
    title: 'Security Tools',
    skills: ['Your Tool 1', 'Your Tool 2', 'Your Tool 3'],
  },
  // Update categories and skills
]
```

### Step 5: Personalize Contact Info

**File: `src/components/Contact.tsx`**

```typescript
const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',  // Update
    color: 'hover:text-blue-400',
  },
  // Update all social links
]

// Update contact info
<p className="text-gray-400">your-email@example.com</p>
<p className="text-gray-400">+1 (123) 456-7890</p>
```

### Step 6: Update Footer

**File: `src/components/Footer.tsx`**

```typescript
// Update social links and copyright year
<p>&copy; 2024 Your Name. All rights reserved.</p>
```

---

## 🎨 Design Customization

### Change Colors

**File: `tailwind.config.ts`**

```typescript
theme: {
  extend: {
    colors: {
      'primary': '#0f172a',      // Dark background
      'secondary': '#1e293b',    // Secondary background
      'accent': '#0ea5e9',       // Accent color (currently cyan)
    },
  },
}
```

**Popular color combinations:**
- **Professional Blue**: `#0ea5e9` (current)
- **Security Red**: `#ef4444` for accent
- **Tech Purple**: `#a855f7` for accent
- **Green Security**: `#10b981` for accent

### Add Your Logo

1. Add logo image to `public/logo.png`
2. Update Navigation component to use it

```typescript
import Image from 'next/image'

<Image 
  src="/logo.png" 
  alt="Logo" 
  width={40} 
  height={40} 
/>
```

### Add Profile Photo

1. Save your professional photo as `public/profile.jpg`
2. Update Hero or About component:

```typescript
import Image from 'next/image'

<Image
  src="/profile.jpg"
  alt="Profile"
  width={300}
  height={300}
  className="rounded-full"
/>
```

---

## 🚀 Deployment Steps

### 1. Setup GitHub Repository

```bash
cd soc-portfolio
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/soc-portfolio.git
git push -u origin main
```

### 2. Deploy to Vercel

**Best Option** - Most optimized for Next.js

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub (connect your repo)
4. Click "Deploy"
5. Your portfolio is now live! 🎉

**Custom Domain:**
- Project Settings → Domains
- Add your domain
- Update DNS records

### 3. Alternative: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

### 4. Alternative: GitHub Pages

Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
}
```

Then:
```bash
npm run build
git add .
git commit -m "Deploy"
git push
```

---

## 📧 Email Form Setup

To make the contact form work:

### Option 1: Using Formspree (Free)

1. Go to [formspree.io](https://formspree.io)
2. Create an account
3. Add new form with your email
4. Update the contact form:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    // Success message
  }
}
```

### Option 2: Using SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Setup backend endpoint
4. Update form handler

### Option 3: Using EmailJS

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  
  emailjs.send('service_id', 'template_id', formData)
    .then(response => console.log('Sent!'))
}
```

---

## 🔍 SEO Optimization

### Update Meta Tags

**File: `src/app/layout.tsx`**

```typescript
export const metadata: Metadata = {
  title: 'Your Name | SOC Analyst Portfolio',  // Update
  description: 'Cybersecurity SOC Analyst with expertise in...',  // Update
  keywords: ['SOC Analyst', 'Cybersecurity', 'Your Expertise'],  // Update
  authors: [{ name: 'Your Name' }],  // Update
}
```

### Google Analytics (Optional)

Add to `src/app/layout.tsx`:
```typescript
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
></script>
```

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

### Content Check
- [ ] All typos corrected
- [ ] Links are working
- [ ] Contact info is current
- [ ] Projects are accurately described
- [ ] Certifications are current

### Mobile Check
- [ ] Navigation works on mobile
- [ ] Forms are usable on mobile
- [ ] Images load properly
- [ ] No horizontal scrolling
- [ ] Buttons are properly sized

### Performance Check
- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Test on slow 3G (Chrome DevTools)
- [ ] Check load time (< 2 seconds)
- [ ] Verify all images load

### SEO Check
- [ ] Meta description present
- [ ] Keywords optimized
- [ ] Open Graph tags present
- [ ] Mobile viewport set
- [ ] robots.txt configured

### Security Check
- [ ] No sensitive information exposed
- [ ] HTTPS enabled
- [ ] Security headers present
- [ ] Form validation working
- [ ] No hardcoded credentials

---

## 📱 Sharing Your Portfolio

### With HR Professionals

1. **Email**: 
```
Hi [HR Name],

I'd like to share my cybersecurity portfolio: [YOUR_PORTFOLIO_URL]

It showcases my SOC analyst skills, projects, and certifications.

Best regards,
Your Name
```

2. **LinkedIn**: Add portfolio URL to your profile
   - Settings → Profile → URL section

3. **Job Applications**: Include portfolio link in applications

### On Social Media

- **LinkedIn**: "Check out my SOC analyst portfolio: [URL]"
- **Twitter**: "Just launched my cybersecurity portfolio! [URL]"
- **GitHub**: Add portfolio URL to bio

---

## 🆘 Troubleshooting

### Issue: Port 3000 already in use
```bash
npx kill-port 3000
npm run dev
```

### Issue: Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Deployment fails
1. Check Node.js version: `node -v` (should be 16+)
2. Check build locally: `npm run build`
3. Check environment variables are set
4. Review Vercel build logs

### Issue: Styles not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Clear Next.js cache: `rm -rf .next`

---

## 📊 Performance Tips

1. **Optimize images**: Use WebP format
2. **Enable caching**: Already configured
3. **Minify code**: Already automatic
4. **Use CDN**: Vercel handles this
5. **Monitor performance**: Use Google Analytics

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [React Best Practices](https://react.dev)
- [Web Performance Guide](https://web.dev/performance/)
- [SEO Best Practices](https://developers.google.com/search/docs)

---

## 🎉 You're Ready!

Your portfolio is professionally designed and optimized. Now:

1. ✅ Customize with YOUR information
2. ✅ Test thoroughly (mobile + desktop)
3. ✅ Deploy to Vercel (free!)
4. ✅ Share with recruiters and HR
5. ✅ Update regularly with new projects

**Questions?** Refer to the README.md for more detailed information.

Good luck landing that SOC analyst role! 🚀
