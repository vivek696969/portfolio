# 🎯 SIMPLE STEP-BY-STEP - EXACTLY WHAT TO DO

## Step 1: Update Your Name (2 minutes)

### File: `src/components/Navigation.tsx`
Look for this line (around line 13):
```
SOC.dev
```

**Change it to your name:**
```
Your Name
```

### File: `src/components/Footer.tsx`
Look for this line (around line 37):
```
<p>&copy; 2024 SOC Analyst Portfolio. All rights reserved.</p>
```

**Change it to:**
```
<p>&copy; 2024 Your Name. All rights reserved.</p>
```

---

## Step 2: Update Your Bio (3 minutes)

### File: `src/components/Hero.tsx`
Find this text (around line 17):
```
Passionate cybersecurity professional dedicated to threat detection, incident response, and building secure systems. Ready to protect and defend.
```

**Replace with YOUR description:**
```
I am a cybersecurity enthusiast with expertise in SOC operations, threat analysis, and security monitoring.
```

Also update this (around line 13):
```
Security Operations <span className="gradient-text">Analyst</span>
```

**Change to your role:**
```
Your Job Title <span className="gradient-text">Cybersecurity</span>
```

---

## Step 3: Update Your Projects (5 minutes)

### File: `src/components/Projects.tsx`
Find the projects array (starts around line 4). You'll see 6 sample projects.

**Replace with YOUR projects. Here's the format:**

```typescript
const projects = [
  {
    title: 'My SIEM Project',
    description: 'I built a Splunk SIEM that detected 50+ threats in a month by analyzing log data and creating custom dashboards.',
    tags: ['Splunk', 'SIEM', 'Security'],
    links: {
      github: 'https://github.com/your-username/project-name',
      external: '#',
    },
  },
  {
    title: 'My Second Project',
    description: 'Describe what you did, the tools you used, and what you learned.',
    tags: ['Tool1', 'Tool2', 'Tool3'],
    links: {
      github: 'https://github.com/your-username/project2',
      external: '#',
    },
  },
]
```

**Just copy and paste your projects in that format!**

---

## Step 4: Update Your Skills (3 minutes)

### File: `src/components/Skills.tsx`
Find this section (around line 4):

```typescript
const skillCategories = [
  {
    icon: Shield,
    title: 'Security Tools',
    skills: ['Splunk', 'ELK Stack', 'Wireshark', 'Suricata'],
  },
```

**Replace with YOUR skills:**
```typescript
const skillCategories = [
  {
    icon: Shield,
    title: 'Security Tools',
    skills: ['Splunk', 'Wireshark', 'Your Tool', 'Another Tool'],
  },
  // Update the other categories too
]
```

---

## Step 5: Update Your Certifications (3 minutes)

### File: `src/components/Certifications.tsx`
Find this section (around line 5):

```typescript
const certifications = [
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2024',
    status: 'Achieved',
    description: 'Covers IT security fundamentals...',
  },
```

**Replace with YOUR certifications:**
```typescript
const certifications = [
  {
    title: 'Your Certification Name',
    issuer: 'Issuing Organization',
    date: '2024',
    status: 'Achieved',  // or 'Pursuing' or 'Planned'
    description: 'Short description of what this cert covers.',
  },
]
```

---

## Step 6: Update Contact Info (2 minutes)

### File: `src/components/Contact.tsx`

Find around line 60:
```
your-email@example.com
```
**Replace with YOUR EMAIL**

Find around line 67:
```
+1 (123) 456-7890
```
**Replace with YOUR PHONE**

Find around line 5 - the socialLinks array:
```typescript
const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://linkedin.com',  // UPDATE THIS
    color: 'hover:text-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com',  // UPDATE THIS
    color: 'hover:text-gray-300',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    url: 'https://twitter.com',  // UPDATE THIS
    color: 'hover:text-blue-400',
  },
]
```

**Put YOUR social links!**

---

## Step 7: Update About Section (3 minutes)

### File: `src/components/About.tsx`

Find around line 28:
```
I'm a cybersecurity enthusiast starting my career as a SOC Analyst...
```

**Replace with YOUR bio**

---

## ✅ CHECKLIST - You've Updated:
- [ ] Your name (Navigation)
- [ ] Your role/title (Hero)
- [ ] Your bio (Hero & About)
- [ ] Your projects (minimum 1)
- [ ] Your skills
- [ ] Your certifications
- [ ] Your email & phone
- [ ] Your social media links

---

## 🧪 TEST LOCALLY

Before going to GitHub, test locally:

```bash
cd d:\portfolio
npm run dev
```

Open: http://localhost:3000

Check that all YOUR information is showing correctly!

---

## 🚀 DEPLOY TO GITHUB & MAKE IT LIVE

### Step 1: Create GitHub Account (If you don't have one)

1. Go to https://github.com
2. Click "Sign up"
3. Fill in your email, password, username
4. Verify email
5. Done!

---

### Step 2: Upload Your Code to GitHub

Open PowerShell and run these commands ONE BY ONE:

```powershell
cd d:\portfolio
```

```powershell
git init
```

```powershell
git config user.name "Your Name"
```

```powershell
git config user.email "your-email@gmail.com"
```

```powershell
git add .
```

```powershell
git commit -m "My portfolio"
```

```powershell
git branch -M main
```

Now go to GitHub and:
1. Click "+" icon → "New repository"
2. Name it: `soc-portfolio`
3. Description: "My SOC Analyst Portfolio"
4. Click "Create repository"
5. You'll see a screen with commands

Copy and run this command (replace YOUR_USERNAME):
```powershell
git remote add origin https://github.com/YOUR_USERNAME/soc-portfolio.git
```

Then run:
```powershell
git push -u origin main
```

✅ Your code is now on GitHub!

---

### Step 3: Make It Live on Vercel (FREE!)

1. Go to https://vercel.com
2. Click "Sign Up"
3. Click "Continue with GitHub"
4. Authorize Vercel
5. Click "New Project"
6. Find `soc-portfolio` and click it
7. Click "Deploy"
8. **WAIT 2-3 MINUTES**
9. You get a live URL like: `https://soc-portfolio.vercel.app`

✅ Your portfolio is now LIVE!

---

## 🔗 Your Live Website

After Vercel deploys, you'll have:
- **Live URL**: `https://soc-portfolio.vercel.app`
- **GitHub Code**: `https://github.com/YOUR_USERNAME/soc-portfolio`
- **Edit Anytime**: Change → Git push → Auto-deploys!

---

## 📱 Share Your Portfolio

Now you can share this URL with HR:
- Email: "Check out my portfolio: https://soc-portfolio.vercel.app"
- LinkedIn: Post the link
- Resume: Add the link

---

## ❓ TROUBLESHOOTING

### "npm is not recognized"
→ Install Node.js from https://nodejs.org

### "git is not recognized"
→ Install Git from https://git-scm.com

### "Deployment failed"
→ Check you saved all files
→ Run `npm run build` locally first
→ Check Vercel build logs

### "Changes not showing"
→ Run: `git add . && git commit -m "update" && git push`
→ Wait 2 minutes for auto-deploy

---

## 💡 THAT'S IT!

You now have:
✅ Custom portfolio with YOUR information
✅ Code on GitHub
✅ Live website on Vercel
✅ Ready to send to HR!

**Next: Edit the files → Save → Test locally → Git push → Done!**
