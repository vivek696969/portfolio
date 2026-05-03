# Quick Reference Card

## 🚀 Quick Commands

### Development
```bash
npm install          # Install dependencies
npm run dev         # Start dev server (localhost:3000)
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Check code quality
```

### Git Commands
```bash
git status          # Check changes
git add .           # Stage all changes
git commit -m "msg" # Commit with message
git push            # Push to GitHub
git pull            # Pull from GitHub
git log             # View commit history
```

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Main layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
└── components/
    ├── Navigation.tsx      # Top navbar
    ├── Hero.tsx            # Hero section
    ├── About.tsx           # About me
    ├── Skills.tsx          # Skills grid
    ├── Projects.tsx        # Projects showcase
    ├── Certifications.tsx  # Certs timeline
    ├── Contact.tsx         # Contact form
    └── Footer.tsx          # Footer
```

---

## 🎨 File Locations for Customization

| What to Change | File Location | Section |
|---|---|---|
| Your name | `src/components/Navigation.tsx` | Line ~13 |
| Hero text | `src/components/Hero.tsx` | Line ~13 |
| Bio | `src/components/About.tsx` | Line ~28 |
| Your skills | `src/components/Skills.tsx` | Line ~5 |
| Your projects | `src/components/Projects.tsx` | Line ~5 |
| Certifications | `src/components/Certifications.tsx` | Line ~5 |
| Email/phone | `src/components/Contact.tsx` | Line ~60 |
| Social links | `src/components/Contact.tsx` | Line ~5 |
| Colors | `tailwind.config.ts` | Line ~13 |
| Meta tags | `src/app/layout.tsx` | Line ~4 |

---

## 📋 Customization Checklist

### Must Do
- [ ] Change name everywhere
- [ ] Update bio/description
- [ ] Add your projects
- [ ] Add your certifications
- [ ] Update contact info
- [ ] Add social media links

### Should Do
- [ ] Upload profile photo
- [ ] Update project descriptions
- [ ] Add GitHub links
- [ ] Test on mobile
- [ ] Test contact form
- [ ] Proofread everything

### Nice to Have
- [ ] Customize colors
- [ ] Add testimonials
- [ ] Setup email service
- [ ] Add Google Analytics
- [ ] Custom domain

---

## 🔧 Troubleshooting Quick Fixes

| Problem | Solution |
|---|---|
| Port 3000 in use | `npx kill-port 3000` |
| Build fails | `rm -rf .next node_modules && npm install` |
| Styles missing | Hard refresh: `Ctrl+Shift+R` |
| Git errors | `git status` and check error message |
| Deployment stuck | Check Vercel build logs |
| Mobile looks wrong | Test with Chrome DevTools (F12) |

---

## 📱 Mobile Testing

1. **Chrome DevTools**: Press `F12` → Click device icon
2. **Test different screens**: 
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px+
3. **Check on real phone**: Scan QR code from `npm run dev`

---

## 🌐 Deployment Checklist

### Before Deploying
- [ ] All typos fixed
- [ ] Links working
- [ ] Mobile looks good
- [ ] Contact form working
- [ ] Images optimized
- [ ] No console errors

### Deployment Steps
1. Push to GitHub: `git push`
2. Go to Vercel
3. Should auto-deploy
4. Check deployment status
5. Test live site

---

## 📊 SEO Quick Tips

- ✅ Update meta tags in `src/app/layout.tsx`
- ✅ Use descriptive project titles
- ✅ Include keywords naturally
- ✅ Add alt text to images
- ✅ Submit to Google Search Console
- ✅ Test with PageSpeed Insights

---

## 🔗 Useful Links

| Service | URL | Purpose |
|---|---|---|
| GitHub | github.com | Code hosting |
| Vercel | vercel.com | Deploy site |
| Namecheap | namecheap.com | Buy domain |
| Google Analytics | analytics.google.com | Track visitors |
| Formspree | formspree.io | Email forms |
| Lighthouse | Built in Chrome | Performance |
| Tailwind | tailwindcss.com | CSS framework |
| Next.js | nextjs.org | Framework docs |

---

## 💡 Pro Tips

1. **Save work often**: `git push` after changes
2. **Use branches**: Test before production
3. **Update portfolio**: Add new projects monthly
4. **Monitor stats**: Check Vercel analytics weekly
5. **Keep dependencies updated**: `npm update`
6. **Test locally first**: `npm run dev`
7. **Share portfolio**: LinkedIn + job boards
8. **Collect feedback**: Ask friends to review

---

## 📞 Need Help?

### Check These First:
1. README.md - General info
2. SETUP_GUIDE.md - Customization help
3. DEPLOYMENT_GUIDE.md - Deploy help
4. Troubleshooting section above

### Resources:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Guides](https://guides.github.com)

---

## 🎯 Success Metrics

Track these to measure portfolio effectiveness:

- **Page Load Time**: < 2 seconds ✅
- **Mobile Score**: 90+ ✅
- **Lighthouse Score**: 95+ ✅
- **Contact Inquiries**: 1+ per week (goal)
- **Job Interviews**: 1+ per month (goal)

Use Google Analytics to track visits and engagement.

---

## 📝 Making Updates

### After Making Changes:

```bash
# Check what changed
git status

# Stage changes
git add .

# Commit with message
git commit -m "Update projects section"

# Push to GitHub
git push

# Vercel auto-deploys!
```

### Rollback if Needed:

1. Go to Vercel → Deployments
2. Find previous working version
3. Click "Redeploy"

---

## ✨ Final Checklist Before Sharing

- [ ] Site loads in < 2 seconds
- [ ] No spelling mistakes
- [ ] All links working
- [ ] Mobile looks good
- [ ] Contact form works
- [ ] Social links correct
- [ ] Email is monitored
- [ ] Lighthouse score 90+
- [ ] No console errors
- [ ] Tested on real phone

**Ready to send to HR? Share your URL!** 🚀
