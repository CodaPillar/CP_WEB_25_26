## ✅ Protocol Rule: PowerShell + Brackets `[ ]` (Typora-friendly)

> **Golden Rule**
>  If a folder/file name contains **`[` or `]`**, PowerShell may treat it as a wildcard.
>  **Always use `-LiteralPath`** (or create paths via `Join-Path`) to force PowerShell to treat the name **exactly as text**.
>
> 

------

### 1) Safe navigation (`cd`)

```shell
Set-Location -LiteralPath '[W4]_topic'
Set-Location -LiteralPath '..'
```

------

### 2) Safe listing (`dir` / `ls`)

```shell
Get-ChildItem -LiteralPath '[W4]_topic'
Get-ChildItem -LiteralPath '[W4]_topic\_typora'
```

------

### 3) Safe folder creation

#### Create one folder safely

```
New-Item -ItemType Directory -Name '[W4]_topic' -Force
```

### 4)Script creating folders and subfolders.

#### **The fix: use -LiteralPath (this makes brackets safe forever)**

PowerShell provides a literal-path mode that says:

> “Do not interpret wildcard characters. Treat this path exactly as written.”

That’s exactly what you need.

------

## 1) Confirm the folders exist (PowerShell can *list* them)

From inside a module folder:

```shell
Get-ChildItem -Directory
```

If you can *see* `[W4]_topic` in the list, the folder exists; PowerShell just won’t *cd* into it without literal path handling.

------

## 2) Navigate into a `[Wn]` folder safely

**Use this, always:**

```shell
Set-Location -LiteralPath '[W4]_topic'
```

To go back:

```shell
Set-Location -LiteralPath '..'
```

This is the “golden move” for bracket paths.

------

## 3) Create W4–W8 + internal folders (works even with brackets)

Run this **inside each module folder** (CSS/HTML/JS/RGEX/SysADm):

```shell
foreach ($w in 4..8) {
  $week = "[W$w]_topic"

  # Create the week folder (literal name, no wildcard interpretation)
  New-Item -ItemType Directory -Name $week -Force | Out-Null

  # Create internal folders using literal paths
  $weekPath = Join-Path -Path $PWD -ChildPath $week

  foreach ($sub in '_drafts','_typora','_submissions') {
    New-Item -ItemType Directory -Path (Join-Path $weekPath $sub) -Force | Out-Null
  }
}
```

### Why your previous script failed

- If you used **single quotes** around strings containing `$($_.FullName)` then PowerShell **does not expand variables** inside single quotes, so it literally tries to create a folder named `$($_.FullName)\_drafts`, which fails.
- And if you used wildcard patterns like `[W4]*` without `-LiteralPath`, PowerShell can misinterpret them.

The block above avoids both problems.

------

## 4) Verify (no guessing)

```
Get-ChildItem -Directory | Where-Object Name -Like '[W4]*'
Get-ChildItem -LiteralPath '[W4]_topic' -Directory
```

You should see `_drafts`, `_typora`, `_submissions`.

------

# Protocol rule (copy this — it prevents future pain)

> **PowerShell + paths containing `[` `]` → always use `-LiteralPath`**
>
> - `Set-Location -LiteralPath '…'`
> - `Get-ChildItem -LiteralPath '…'`
> - `New-Item -Path '…'` with paths built using `Join-Path`

This makes your bracket naming scheme **fully safe**.

------

## Does this affect sharing / Ubuntu / Mac?

No. Not at all.

- Windows filesystem stores these names normally.
- SMB shares them normally.
- Ubuntu mounts and accesses them normally.
- macOS sees them normally.
- Only PowerShell’s wildcard parsing needed the `-LiteralPath` correction.

------

If you tell me which module you’re in **right now** (CSS/HTML/JS/RGEX/SysADm), I’ll give you the **exact one-liner** to run next (still using `-LiteralPath`) to create W4–W8 there, then we’ll loop it across the remaining modules.











#### Create subfolders safely (recommended pattern)

```shell
$weekPath = Join-Path $PWD '[W4]_topic'
New-Item -ItemType Directory -Path (Join-Path $weekPath '_drafts') -Force
New-Item -ItemType Directory -Path (Join-Path $weekPath '_typora') -Force
New-Item -ItemType Directory -Path (Join-Path $weekPath '_submissions') -Force
```

------

### 4) Safe delete (only when you *really* mean it)

```shell
Remove-Item -LiteralPath '[W4]_topic' -Recurse -Force
```

------

### ✅ One-line takeaway (print this)

> **Brackets in names? Use `-LiteralPath` for access, and `Join-Path` for building paths.**