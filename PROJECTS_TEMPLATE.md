# 📋 YOUR PROJECTS TEMPLATE

## Copy-Paste Your Projects Here

Open: `src/components/Projects.tsx`

Find the `const projects = [` section and replace ALL projects with YOUR projects.

---

## Example: How to Format Your Projects

### Project Format:
```typescript
{
  title: 'Project Name',
  description: 'What you did and what you learned',
  tags: ['Tool1', 'Tool2', 'Tool3'],
  links: {
    github: 'link to your GitHub repo',
    external: 'link to demo or details',
  },
}
```

---

## EXAMPLE 1: SIEM Project

```typescript
{
  title: 'Splunk SIEM Implementation',
  description: 'Deployed and configured Splunk SIEM from scratch. Created 15+ custom dashboards for threat monitoring. Tuned detection rules to reduce false positives by 40%. Monitored 50+ log sources and detected 30+ security incidents in the first month.',
  tags: ['Splunk', 'SIEM', 'Log Analysis', 'Threat Detection'],
  links: {
    github: 'https://github.com/yourname/splunk-siem-lab',
    external: '#',
  },
}
```

---

## EXAMPLE 2: Network Analysis Project

```typescript
{
  title: 'Network Traffic Analysis with Wireshark',
  description: 'Analyzed network traffic using Wireshark to identify suspicious activities. Found and documented command & control (C2) communications. Created IDS signatures using Suricata to block malicious traffic. Documented findings in incident report.',
  tags: ['Wireshark', 'Suricata', 'Network Security', 'IDS/IPS'],
  links: {
    github: 'https://github.com/yourname/network-analysis',
    external: '#',
  },
}
```

---

## EXAMPLE 3: Python Automation Project

```typescript
{
  title: 'Security Automation with Python',
  description: 'Developed Python scripts to automate log parsing from multiple sources. Created API integration to pull threat intelligence feeds. Built automated alerting system that reduced incident response time by 50%. Deployed on Linux cron jobs for continuous monitoring.',
  tags: ['Python', 'Automation', 'Scripting', 'Linux'],
  links: {
    github: 'https://github.com/yourname/security-automation',
    external: '#',
  },
}
```

---

## EXAMPLE 4: Lab/Training Project

```typescript
{
  title: 'Active Directory & Group Policy Lab',
  description: 'Built a lab environment with Active Directory, created user policies, configured security group policies. Tested privilege escalation scenarios. Documented best practices for Windows security hardening.',
  tags: ['Active Directory', 'Windows', 'Group Policy', 'Security'],
  links: {
    github: 'https://github.com/yourname/ad-lab',
    external: '#',
  },
}
```

---

## EXAMPLE 5: Incident Response Project

```typescript
{
  title: 'Incident Response Playbook Development',
  description: 'Created comprehensive incident response playbooks for ransomware, malware, and data exfiltration scenarios. Documented step-by-step procedures for detection, containment, and recovery. Tested playbooks with tabletop exercises.',
  tags: ['Incident Response', 'Documentation', 'Playbooks', 'Best Practices'],
  links: {
    github: 'https://github.com/yourname/ir-playbooks',
    external: '#',
  },
}
```

---

## EXAMPLE 6: Vulnerability Management Project

```typescript
{
  title: 'Vulnerability Management Program',
  description: 'Conducted vulnerability assessments using Nessus and OpenVAS. Prioritized findings using CVSS scoring. Tracked remediation efforts with detailed reports. Reduced vulnerabilities by 60% in 3 months.',
  tags: ['Nessus', 'OpenVAS', 'CVSS', 'Remediation'],
  links: {
    github: 'https://github.com/yourname/vuln-management',
    external: '#',
  },
}
```

---

## YOUR PROJECTS - COPY AND PASTE

Replace the projects in `src/components/Projects.tsx` with:

```typescript
const projects = [
  {
    title: 'YOUR PROJECT 1 NAME',
    description: 'Describe what you did in 1-2 sentences. What tools did you use? What did you learn?',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    links: {
      github: 'YOUR_GITHUB_LINK',
      external: '#',
    },
  },
  {
    title: 'YOUR PROJECT 2 NAME',
    description: 'Another project description.',
    tags: ['Tag1', 'Tag2'],
    links: {
      github: 'YOUR_GITHUB_LINK',
      external: '#',
    },
  },
  {
    title: 'YOUR PROJECT 3 NAME',
    description: 'Third project.',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    links: {
      github: 'YOUR_GITHUB_LINK',
      external: '#',
    },
  },
]
```

---

## 💡 TIPS FOR GOOD PROJECT DESCRIPTIONS

✅ **DO:**
- Be specific (not: "I did security stuff")
- Use numbers (not: "improved performance")
- Show results (not: "tested things")
- Mention tools used
- Explain what you learned

❌ **DON'T:**
- Be too vague
- Over-complicate
- Use fancy words
- Make up projects
- Hide what you actually did

---

## 📝 TEMPLATE YOU CAN USE

```
I [ACTION] using [TOOLS]. This resulted in [RESULT]. 
I learned [SKILL].
```

### Examples:

"I **built a SIEM lab** using **Splunk and Docker**. This resulted in **detecting 50+ security alerts**. I learned **how to correlate logs from multiple sources**."

"I **analyzed network traffic** using **Wireshark**. This resulted in **identifying a botnet infection**. I learned **how to recognize C2 communications**."

---

## 🔗 HOW TO GET GITHUB LINKS

### For YOUR GitHub Projects:

1. Create GitHub account (github.com)
2. Create new repository
3. Upload your project files
4. Copy the repository URL
5. Paste in `github:` field

Example: `https://github.com/yourname/project-name`

### If You Don't Have Code Yet:

Use: `#` as placeholder

Once you create the GitHub project, update it.

---

## ✅ QUICK CHECKLIST

Before you save:
- [ ] Updated project title
- [ ] Updated description (1-2 sentences)
- [ ] Added relevant tags (3-5)
- [ ] Added GitHub link (or #)
- [ ] All 3-6 projects are filled

---

**Now:** Copy a project example above → Edit with YOUR info → Save!
