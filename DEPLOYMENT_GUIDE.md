# Vercel Deployment Guide

## 🚀 Complete Guide to Deploying Your SOC Analyst Portfolio on Vercel

Vercel is the easiest way to deploy Next.js applications. It's free, fast, and perfect for portfolios!

---

## Prerequisites

- GitHub account (create at [github.com](https://github.com))
- Vercel account (free at [vercel.com](https://vercel.com))
- Your portfolio code ready in GitHub

---

## Step 1: Prepare Your Code for GitHub

### 1.1 Initialize Git Repository

Open terminal in your portfolio folder:

```bash
cd d:\portfolio
git init
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

### 1.2 Commit Your Code

```bash
git add .
git commit -m "Initial portfolio commit"
```

### 1.3 Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `soc-portfolio` (or your preference)
3. Description: "Cybersecurity SOC Analyst Portfolio"
4. Choose: Public (so recruiters can see your code)
5. Click "Create repository"

### 1.4 Push Code to GitHub

GitHub will show you commands. Copy and run them:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/soc-portfolio.git
git push -u origin main
```

✅ Your code is now on GitHub!

---

## Step 2: Deploy to Vercel

### 2.1 Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### 2.2 Import Your Project

1. Click "New Project" on Vercel dashboard
2. Click "Import Git Repository"
3. Find and select `soc-portfolio`
4. Click "Import"

### 2.3 Configure Project

**Vercel should auto-detect Next.js** - you'll see:

```
Framework Preset: Next.js
Build Command: next build
Output Directory: .next
Install Command: npm install
```

Leave these as default. Click "Deploy"

⏳ Vercel will build and deploy your site (2-3 minutes)

✅ Your portfolio is LIVE! 🎉

You'll get a URL like: `https://soc-portfolio.vercel.app`

---

## Step 3: Add Custom Domain (Optional but Recommended)

### 3.1 Buy a Domain

Purchase a domain from:
- [Namecheap](https://namecheap.com) - $8.88/year
- [GoDaddy](https://godaddy.com)
- [Google Domains](https://domains.google)
- [Bluehost](https://bluehost.com)

**Recommended domain names:**
- `yourname-soc.dev`
- `yourname-security.dev`
- `yoursoc.dev`
- `yourname.dev`

### 3.2 Connect Domain to Vercel

1. Go to Vercel Project Settings
2. Click "Domains"
3. Enter your domain name
4. Click "Add"

### 3.3 Configure DNS

Vercel will show DNS settings:

**Option A: Change Nameservers** (Easier)
1. Go to domain registrar (Namecheap, GoDaddy, etc.)
2. Find DNS/Nameserver settings
3. Change to Vercel's nameservers shown on screen
4. Wait 24-48 hours for activation

**Option B: Add DNS Records** (If you want to keep current nameservers)
1. Go to domain registrar DNS settings
2. Add the DNS records Vercel shows (usually CNAME records)
3. Should activate within hours

✅ Domain is connected!

---

## Step 4: Update Your Vercel Project

### 4.1 Make Changes Locally

Edit files in your portfolio:

```bash
# Make changes
# Example: src/components/Hero.tsx

git add .
git commit -m "Update hero section"
git push
```

### 4.2 Automatic Deployment

**Push to GitHub → Automatic Vercel Deploy**

Vercel watches your GitHub repo. Every push automatically:
1. Triggers a build
2. Runs tests
3. Deploys to production

You can watch deployment progress in Vercel dashboard.

---

## Step 5: Environment Variables (If Using Email Service)

If you're using contact form with email service:

### 5.1 Add Environment Variables

1. Go to Vercel Project Settings
2. Click "Environment Variables"
3. Add variables like:
   ```
   NEXT_PUBLIC_FORMSPREE_ID = your_id_here
   EMAIL_SERVICE_KEY = your_key_here
   ```

### 5.2 Reference in Code

```typescript
const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
```

### 5.3 Redeploy

Click "Redeploy" to apply environment variables.

---

## Step 6: Monitor Performance

### 6.1 Vercel Analytics

1. Go to Vercel Project
2. Click "Analytics"
3. View:
   - Page load times
   - HTTP requests
   - Core Web Vitals

### 6.2 Add Google Analytics

To track visitor statistics:

1. Create Google Analytics account
2. Get measurement ID: `G-XXXXXXXXXX`
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Update `src/app/layout.tsx` to include GA script

---

## Troubleshooting

### Build Fails

**Check build logs:**
1. Vercel Dashboard → Your Project
2. Click "Deployments"
3. Click failed deployment
4. Check "Build Logs" tab

**Common causes:**
- Missing dependencies: Add to package.json
- Environment variables: Configure in Vercel
- Node version: Ensure 16+

**Solution:**
```bash
# Redeploy after fixing
git push
```

### Site Shows 404

1. Verify deployment succeeded (check Status)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Hard refresh (Ctrl+Shift+R)
4. Wait 5 minutes for global CDN cache

### Custom Domain Not Working

1. Wait 24-48 hours for DNS propagation
2. Check domain DNS records in registrar
3. Verify domain added in Vercel

**Check DNS:**
```bash
nslookup yourdomain.com
# Should show Vercel DNS
```

### Performance Slow

1. Check Vercel Analytics
2. Review build size
3. Optimize images
4. Check for large dependencies

---

## Best Practices

### 1. Keep Code Clean
- Commit meaningful messages
- Use descriptive branch names
- Review changes before pushing

### 2. Monitor Deployments
- Watch build status
- Check error logs
- Test after deployment

### 3. Update Regularly
- Add new projects
- Update certifications
- Refresh skills section

### 4. Use Preview Deployments
- Create branch for changes
- Deploy to preview URL
- Test before production

**Example:**
```bash
git checkout -b add-new-project
# Make changes
git push -u origin add-new-project
# Vercel creates preview deployment
```

### 5. Backup Your Code
- Push to GitHub regularly
- Use version control
- Test locally before pushing

---

## Speed Optimization Tips

### Implemented in Your Portfolio:
✅ Image optimization
✅ Code splitting
✅ CSS minification
✅ Caching headers
✅ Gzip compression

### For Extra Performance:
1. **Image optimization**: Use WebP format
2. **Bundle analysis**: Check dependency sizes
3. **Monitor CWV**: Use PageSpeed Insights
4. **CDN caching**: Vercel handles automatically

---

## Security Features

### Already Configured:
✅ HTTPS (automatic)
✅ Security headers (vercel.json)
✅ XSS protection
✅ CSRF tokens
✅ Secure cookies

### Additional Steps:
1. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

2. **Security audits**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Monitor dependencies**
   - Enable Vercel notifications
   - Review security alerts

---

## SEO Optimization on Vercel

### Google Indexing

1. Create Google Search Console account
2. Add your domain
3. Submit sitemap: `/sitemap.xml`
4. Monitor indexing status

### Schema.org Markup

Your portfolio includes structured data for:
- Person (your profile)
- Article (projects)
- Certificate (certifications)

This helps search engines understand your content.

---

## Continuous Deployment Workflow

### Typical Workflow:

```
1. Make changes locally
2. Test on localhost (npm run dev)
3. Commit changes (git commit)
4. Push to GitHub (git push)
5. Vercel auto-deploys
6. Check production site
7. Share portfolio link
```

### Using Branches (Advanced):

```bash
# Create feature branch
git checkout -b feature-name

# Make changes
# Test locally

# Push branch
git push -u origin feature-name

# Create Pull Request on GitHub
# Vercel creates preview deployment
# Review and test

# Merge to main
# Automatic production deployment
```

---

## Monitoring & Maintenance

### Weekly
- Check analytics
- Review error logs
- Test contact form

### Monthly
- Update projects
- Update certifications
- Review SEO performance

### Quarterly
- Update dependencies
- Security audit
- Performance review

---

## Success Metrics

### Target Performance:
- ⚡ Page Load: < 2 seconds
- 📈 Lighthouse: 90+ score
- 🎯 Core Web Vitals: All green
- 📊 SEO Score: 90+

### Monitor Using:
1. Vercel Analytics
2. Google PageSpeed Insights
3. Google Search Console
4. Lighthouse (Chrome DevTools)

---

## Getting Help

### Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Help](https://docs.github.com)
- Vercel Support: support@vercel.com

### Common Questions:

**Q: How much does Vercel cost?**
A: Free tier is sufficient for portfolios. No credit card needed.

**Q: How fast is deployment?**
A: Usually 2-3 minutes for full build and deploy.

**Q: Can I rollback?**
A: Yes! Go to Deployments and redeploy previous version.

**Q: Is HTTPS included?**
A: Yes! Free SSL certificate provided automatically.

**Q: How many projects can I host?**
A: Unlimited on free tier!

---

## 🎉 You're Ready to Launch!

Your portfolio is now:
✅ Deployed on Vercel
✅ Globally distributed
✅ Automatically updated on every commit
✅ Highly optimized
✅ Ready for recruiters!

### Next Steps:
1. Test on mobile
2. Share with friends
3. Post on LinkedIn
4. Send to HR departments
5. Update regularly

**Good luck with your SOC analyst career! 🚀**
