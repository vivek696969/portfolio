# 📍 FILE LOCATIONS - VISUAL GUIDE

## 🎯 ALL FILES YOU NEED TO EDIT - ONE PAGE

### 📂 Your Folder: `d:\portfolio\`

```
d:\portfolio\
│
├── src/
│   └── components/
│       ├── 🔴 Navigation.tsx      ← EDIT: Your name
│       ├── 🔴 Hero.tsx             ← EDIT: Your title & intro
│       ├── 🔴 About.tsx            ← EDIT: Your bio
│       ├── 🔴 Skills.tsx           ← EDIT: Your skills
│       ├── 🔴 Projects.tsx         ← EDIT: Your projects
│       ├── 🔴 Certifications.tsx   ← EDIT: Your certs
│       ├── 🔴 Contact.tsx          ← EDIT: Email, phone, links
│       └── 🔴 Footer.tsx           ← EDIT: Your name
│
└── 📄 SIMPLE_GUIDE.md              ← Read this first!
```

---

## 🔴 FILE 1: Navigation.tsx
**Location:** `src/components/Navigation.tsx`

**What to change:**
```
Line 13: Change "SOC.dev" to "Your Name"
```

**Before:**
```
<a href="#home" className="gradient-text text-2xl font-bold">
  SOC.dev
</a>
```

**After:**
```
<a href="#home" className="gradient-text text-2xl font-bold">
  Your Name
</a>
```

---

## 🔴 FILE 2: Hero.tsx
**Location:** `src/components/Hero.tsx`

**What to change:**

### Change 1 - Your Title
**Line ~13:**
```
Security Operations <span className="gradient-text">Analyst</span>
```

Change to your title:
```
Your Title <span className="gradient-text">Here</span>
```

### Change 2 - Your Intro
**Line ~19:**
```
Passionate cybersecurity professional dedicated to threat detection, incident response, and building secure systems. Ready to protect and defend.
```

Change to your intro:
```
Your description here. What are you passionate about?
```

---

## 🔴 FILE 3: About.tsx
**Location:** `src/components/About.tsx`

**What to change:**

### Line ~28
```
I'm a cybersecurity enthusiast starting my career as a SOC Analyst. With hands-on experience in security monitoring, threat detection, and incident response, I'm committed to protecting organizations from cyber threats.
```

Replace with your bio:
```
Your full bio here. Who are you? What's your background?
```

---

## 🔴 FILE 4: Skills.tsx
**Location:** `src/components/Skills.tsx`

**What to change:**

### Lines 4-20
Replace the skills array with YOUR skills:

```typescript
const skillCategories = [
  {
    icon: Shield,
    title: 'Your Category 1',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
  {
    icon: BarChart3,
    title: 'Your Category 2',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
]
```

---

## 🔴 FILE 5: Projects.tsx ⭐ IMPORTANT
**Location:** `src/components/Projects.tsx`

**What to change:**

### Lines 4-50 - ALL PROJECTS

**Use PROJECTS_TEMPLATE.md for exact format!**

Example:
```typescript
const projects = [
  {
    title: 'My SIEM Project',
    description: 'What I did and what I learned',
    tags: ['Splunk', 'SIEM', 'Security'],
    links: {
      github: 'https://github.com/yourname/project',
      external: '#',
    },
  },
]
```

**Minimum: 1 project**
**Recommended: 3-6 projects**

---

## 🔴 FILE 6: Certifications.tsx
**Location:** `src/components/Certifications.tsx`

**What to change:**

### Lines 5-25 - ALL CERTIFICATIONS

Replace with your certs:

```typescript
const certifications = [
  {
    title: 'Your Cert Name',
    issuer: 'Issuing Org',
    date: '2024',
    status: 'Achieved',  // or 'Pursuing' or 'Planned'
    description: 'What this cert covers',
  },
]
```

---

## 🔴 FILE 7: Contact.tsx
**Location:** `src/components/Contact.tsx`

**What to change:**

### Change 1 - Email (Line ~60)
```
your-email@example.com
```
Change to:
```
your-real-email@gmail.com
```

### Change 2 - Phone (Line ~67)
```
+1 (123) 456-7890
```
Change to:
```
your-real-phone-number
```

### Change 3 - Social Links (Lines 5-22)
```typescript
const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/YOUR-PROFILE',  // ← UPDATE
    color: 'hover:text-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    url: 'https://github.com/YOUR-USERNAME',  // ← UPDATE
    color: 'hover:text-gray-300',
  },
]
```

Update all URLs to YOUR profiles!

---

## 🔴 FILE 8: Footer.tsx
**Location:** `src/components/Footer.tsx`

**What to change:**

### Line ~37
```
<p>&copy; 2024 SOC Analyst Portfolio. All rights reserved.</p>
```

Change to:
```
<p>&copy; 2024 Your Name. All rights reserved.</p>
```

---

## ✅ CHECKLIST - EDIT THESE FILES

- [ ] **Navigation.tsx** - Your name
- [ ] **Hero.tsx** - Your title & intro
- [ ] **About.tsx** - Your bio
- [ ] **Skills.tsx** - Your skills
- [ ] **Projects.tsx** - Your projects ⭐
- [ ] **Certifications.tsx** - Your certs
- [ ] **Contact.tsx** - Email, phone, social links
- [ ] **Footer.tsx** - Your name

**That's it! Only 8 files!**

---

## 🎯 QUICK EDIT GUIDE

### 1. Open File
Example: Right-click `src/components/Hero.tsx` → "Open with Code"

### 2. Find Text
Press: `Ctrl + F`
Type: The text you want to find
Press: Enter to find it

### 3. Replace Text
Highlight the text → Delete → Type new text

### 4. Save
Press: `Ctrl + S`

### 5. Test
Run: `npm run dev`
Go to: http://localhost:3000
Check it looks right!

---

## 📋 FILE EDITING ORDER (Recommended)

1. **Navigation.tsx** - 1 min
2. **Hero.tsx** - 2 min
3. **About.tsx** - 2 min
4. **Skills.tsx** - 3 min
5. **Projects.tsx** - 10 min ⭐ (Takes longest)
6. **Certifications.tsx** - 3 min
7. **Contact.tsx** - 3 min
8. **Footer.tsx** - 1 min

**Total: ~25 minutes**

---

## 🧪 AFTER EDITING - TEST

```powershell
cd d:\portfolio
npm run dev
```

Visit: http://localhost:3000

Check everything looks good!

Press: `Ctrl + C` to stop

---

## 📤 AFTER TESTING - DEPLOY

### Step 1: GitHub

```powershell
cd d:\portfolio
git add .
git commit -m "My portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/soc-portfolio.git
git push -u origin main
```

### Step 2: Vercel

1. Go to: https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select your repo
5. Click "Deploy"
6. Wait 2-3 minutes
7. Get your live URL! ✅

---

## 🎉 YOU'RE DONE!

Once you complete these steps:

✅ Portfolio customized with YOUR info
✅ Code on GitHub
✅ Live website running
✅ Ready to send to recruiters!

---

## 💡 REMEMBER

- **Edit 8 files** - Change YOUR info
- **Test locally** - Make sure it looks good
- **Push to GitHub** - Upload your code
- **Deploy to Vercel** - Make it live
- **Share URL** - Send to recruiters

**Total time: ~40 minutes**

---

## 📞 NEED HELP?

- **Editing help**: See SIMPLE_GUIDE.md
- **Projects help**: See PROJECTS_TEMPLATE.md
- **Deployment help**: See GITHUB_DEPLOYMENT.md
- **Commands help**: See QUICK_REFERENCE.md

**Everything is documented! You've got this! 🚀**
