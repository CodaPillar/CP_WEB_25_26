# Sharing Model document

Below is a **Typora-ready protocol note** you can drop directly into:

```
Knowledge_Vault/01_Protocols/sharing_model.md
```

It is written as:

- **operational** (what to use, when, why)
- **interpretable under stress** (exams / setup / recovery)
- **aligned with your real systems** (Mac, Ubuntu, Windows, course weeks)

No deviation from your architecture.

------

## Sharing Model — Systems, Protocols, and Use Cases

### 0. Naming & Environment Detection

| System              | `uname` / Platform        |
| ------------------- | ------------------------- |
| **Mac**             | `Darwin`                  |
| **Ubuntu / Debian** | `Linux`                   |
| **Windows**         | `Windows_NT` (PowerShell) |

This matters because **tools and friction differ by OS**.

------

## 1. Canonical Workspace Model (Foundation)

### Canonical storage

- **Windows** is the *primary workspace* during the course

- Location:

  ```
  C:\Users\<user>\Documents\CourseWorkSpace\CourseWork
  ```

### Why

- VS Code used daily in class
- Teacher expectations align with Windows paths
- Lowest friction under time pressure

Other systems **connect to it**, they do not compete with it.

------

### 2. SMB (Windows ↔ Ubuntu ↔ Mac)

#### What it is

- Network file sharing at filesystem level

#### When to use

- Daily work
- Course files
- Bidirectional visibility
- “Drop file → instantly visible elsewhere”

#### Direction

- **Windows → shares**
- **Ubuntu / Mac → mounts**

#### Characteristics

- Persistent
- No encryption (LAN only)
- Simple mental model

#### Role in this system

> **Primary shared filesystem for course content**

------

### 3. SSH (Secure Shell)

#### What it is

- Encrypted remote command execution
- Identity-based access

#### When to use

- Administration
- Server control
- Diagnostics
- Learning Linux

#### Direction

- Mac → Ubuntu
- Windows → Ubuntu

#### Characteristics

- Stateless
- Terminal-only
- Foundation for all secure protocols

#### Role in this system

> **Control plane**

------

## 4. SFTP (SSH File Transfer)

### What it is

- File transfer over SSH
- Remote filesystem browsing

### Tools

- **Cyberduck**
- **FileZilla**

### When to use

- Manual file operations
- One-off transfers
- Visual confirmation
- Bookmarking servers

### Characteristics

- Encrypted
- Tabbed / GUI
- No mounting

### Role in this system

> **Visual, intentional file operations**

------

## 5. SSHFS (SSH as Filesystem)

### What it is

- Remote filesystem mounted locally via SSH

### When to use

- Editing Ubuntu files from Mac
- VS Code opening remote paths as local
- No copying / syncing

### Characteristics

- Encrypted
- Feels like a drive
- Requires SSH + FUSE

### Role in this system

> **Advanced convenience, not mandatory**

Used when calm, not under exam pressure.

------

## 6. VS Code — Remote SSH

### What it is

- VS Code connects directly to Ubuntu over SSH
- Editing + terminal + extensions run remotely

### When to use

- Focused Linux work
- Node / Python / nginx configs
- When Windows is not primary

### Characteristics

- Powerful
- Higher cognitive load
- Excellent for projects

### Role in this system

> **Advanced development mode**

Not the default during heavy coursework.

------

## 7. Web Servers (Ubuntu)

### nginx (Ubuntu)

- Purpose: static + production-style serving
- Used for:
  - demos
  - course deliverables
  - understanding real servers

### Python HTTP Server

- Purpose: fast, disposable serving
- Used for:
  - quick demos
  - tablet access
  - teaching tools

### Node.js Server

- Purpose: dynamic logic
- Used for:
  - metalearning apps
  - quizzes
  - interactive tools

### Role

> **Execution layer**

------

## 8. Windows Screen Sharing

### What it is

- Screen / session sharing
- Not file-centric

### When to use

- Demonstration
- Assistance
- Teaching

### Role

> **Visual collaboration only**

Not part of file strategy.

------

## 9. Google Docs / Drive (Selective Use)

### What it is

- Cloud document collaboration

### What it is **not**

- Code workspace
- Source of truth

### Usage rule (strict)

Only sync **specific drop folders** inside weeks:

```
[Wn]_topic/_submissions/Drive_Drop/
```

Used for:

- PDFs
- Written answers
- Teacher-facing docs

### Role

> **External publication surface**

Never the canonical workspace.

------

### 10. Tooling & Metalearning (Tablet Access)

### Location

```
Tooling_and_Metalearning/
```

### Served via

- Python or Node server on Ubuntu

### Accessed from

- Android tablet
- Browser

### Purpose

- Learning aids
- Memory tools
- Self-built apps

### Role

> **Learning accelerator**

Not graded, not time-bound.

------

## 11. Decision Matrix (Quick Recall)

| Task                       | Best Tool                |
| -------------------------- | ------------------------ |
| Daily course work          | SMB                      |
| Linux admin                | SSH                      |
| Visual file transfer       | SFTP                     |
| Edit Ubuntu files from Mac | SSHFS                    |
| Serious remote dev         | VS Code Remote SSH       |
| Serve static site          | nginx                    |
| Quick demo                 | Python server            |
| Interactive tools          | Node                     |
| Submissions                | Google Drive (selective) |

------

## 12. Core Rule (print this)

> **One canonical workspace.
>  Multiple intentional bridges.
>  No automatic magic.**

------

If you want, next we can:

- Split this into **one-page exam cheat sheet**
- Add **ASCII diagrams** (very Typora-friendly)
- Create a **second protocol note**:
   *“Which tool to choose when I’m tired”*

Just tell me the next vault file you want to create.

Good catch — GitHub **must** be explicitly placed in the model, because it plays a *different role* from SMB / SSH / Drive.
 Below is an **add-on section** you can paste directly into the same document, or save as:

```
Knowledge_Vault/01_Protocols/github_model.md
```

It is written to **integrate cleanly** with what you already have, not to compete with it.

------

# GitHub Model — Versioning, Backup, and Recovery

## 0. What GitHub is *in this system*

> **GitHub is NOT a sharing tool.
>  GitHub is NOT a live workspace.
>  GitHub IS a versioned safety net and memory of evolution.**

GitHub answers one question only:

> *“Can I always recover a clean, earlier, or known-good state of my work?”*

------

## 1. Canonical Rule (very important)

### Source of truth

- **Local filesystem** (Windows → Documents → CourseWorkSpace)
   is the **authoritative workspace**
- GitHub is **downstream**

Never edit *on* GitHub.
 Always edit locally → commit → push.

------

## 2. What goes into GitHub

### ✅ INCLUDED

- Course content (`[Wn]` folders)
- `_typora` notes (very important for exam memory)
- `README.md` files
- Tooling & metalearning code (Python / Node)
- Configuration files
- Protocol notes from the Knowledge Vault

### ❌ EXCLUDED

- Temporary files
- OS artefacts
- Node `node_modules/`
- Python virtual environments
- Large binaries
- Anything synced via Google Drive

Use `.gitignore` intentionally.

------

## 3. Repository Strategy (simple & robust)

### Option A — One main repository (recommended now)

```
course-workspace/
```

Contains:

- all modules
- Knowledge_Vault
- Tooling_and_Metalearning

This keeps:

- history unified
- context intact
- recovery simple

You can split later if needed.

------

## 4. Commit Philosophy (exam-safe)

### Commit when:

- a week stabilises
- a submission is ready
- notes clarify something important
- infrastructure changes (like today)

### Commit message style:

```
W4 JS loops – exercises + notes
Fix regex validation logic (W3)
Add SSH / SMB sharing protocol
```

Messages should help **future-you**, not impress others.

------

## 5. GitHub vs Other Protocols (clear distinction)

| Tool               | Purpose                    |
| ------------------ | -------------------------- |
| SMB                | Live shared filesystem     |
| SSH / SFTP / SSHFS | Secure access & control    |
| Google Drive       | External document delivery |
| **GitHub**         | Version history & recovery |

GitHub is **time-based**, not session-based.

------

## 6. GitHub and Exams (why it matters)

During revision:

- You can check how you solved something *then*
- You can diff changes
- You can revert mistakes safely

This reduces anxiety and cognitive load.

------

## 7. Golden Rule (copy this)

> **GitHub remembers.
>  Filesystems work.
>  Cloud delivers.**

If something feels ambiguous, this rule resolves it.

------

## 8. Minimal Daily Habit

At the end of a work session:

```v
git status
git add .
git commit -m "Wn – short meaningful message"
git push
```

That’s it.
 No branching complexity required at this stage.

------

If you want, next we can:

- write a **`.gitignore` tailored exactly to your structure**
- add a **GitHub + exams quick checklist**
- or create a **one-page “which protocol to use” cheat sheet**

Just tell me what you want to add next to the Knowledge_Vault.