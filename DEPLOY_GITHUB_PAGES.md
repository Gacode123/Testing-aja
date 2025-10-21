# 🚀 Deploy Wedding Invitation ke GitHub Pages

## Prerequisites
- Akun GitHub (kalau belum punya, buat di github.com)
- Git terinstall di komputer

---

## Step 1: Install Git (Kalau Belum Ada)

### Windows:
1. Download Git dari: https://git-scm.com/download/win
2. Install dengan default settings
3. Buka Command Prompt atau Git Bash

### Check Git Installed:
```bash
git --version
```

---

## Step 2: Setup Git (First Time Only)

Buka Command Prompt / Git Bash, ketik:

```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
```

---

## Step 3: Buat Repository di GitHub

1. **Login ke GitHub.com**
2. **Klik tombol "+" di kanan atas** → "New repository"
3. **Isi form:**
   - Repository name: `wedding-invitation` (atau nama lain)
   - Description: "Livia & William Wedding Invitation"
   - Public (pilih ini)
   - ❌ **JANGAN** centang "Add README"
4. **Klik "Create repository"**

---

## Step 4: Upload Website ke GitHub

### A. Buka Command Prompt di Folder Wedding

1. Buka folder: `C:\Users\Legion\Dropbox\Python Works\WORKING\Wedding Invivation`
2. Klik address bar di File Explorer
3. Ketik `cmd` lalu Enter
4. Atau Shift + Right Click → "Open PowerShell window here"

### B. Jalankan Commands Berikut:

```bash
# Initialize git
git init

# Add semua files
git add .

# Commit
git commit -m "Initial wedding invitation website"

# Rename branch ke main
git branch -M main

# Connect ke GitHub (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push ke GitHub
git push -u origin main
```

**Contoh:**
Kalau username GitHub kamu `johnsmith` dan nama repo `wedding-invitation`:
```bash
git remote add origin https://github.com/johnsmith/wedding-invitation.git
```

---

## Step 5: Enable GitHub Pages

1. **Buka repository kamu di GitHub**
2. **Klik tab "Settings"** (di kanan atas)
3. **Scroll ke bawah** atau klik **"Pages"** di sidebar kiri
4. **Di "Source" section:**
   - Branch: pilih `main`
   - Folder: pilih `/ (root)`
   - Klik **"Save"**
5. **Tunggu 1-2 menit**, refresh page
6. **URL website muncul:** 
   ```
   https://USERNAME.github.io/REPO_NAME/
   ```

---

## Step 6: Test Website

Buka URL yang muncul di browser:
```
https://username.github.io/wedding-invitation/
```

Website sudah LIVE! 🎉

---

## Kalau Ada Masalah

### Masalah 1: Foto tidak muncul
**Solusi:** Pastikan semua foto ada di folder yang sama dengan index.html

### Masalah 2: Push gagal (authentication)
**Solusi:** GitHub sekarang pakai Personal Access Token

#### Cara buat token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Nama: "Wedding Site Deploy"
4. Centang: `repo` (all)
5. Generate token
6. **COPY TOKEN** (hanya muncul 1x!)

#### Cara pakai token:
Saat push, kalau minta password, paste TOKEN (bukan password GitHub!)

### Masalah 3: Website masih 404
**Tunggu 2-5 menit**, GitHub Pages butuh waktu untuk deploy pertama kali.

---

## Update Website di Kemudian Hari

Kalau kamu edit website dan mau update:

```bash
# Buka folder website di Command Prompt
cd "C:\Users\Legion\Dropbox\Python Works\WORKING\Wedding Invivation"

# Add perubahan
git add .

# Commit
git commit -m "Update wedding details"

# Push
git push
```

Tunggu 1-2 menit, website auto-update! ✨

---

## Custom Domain (Opsional)

Kalau mau pakai domain sendiri (misal: liviawilliam.wedding):

1. Beli domain di Namecheap, GoDaddy, atau Niagahoster
2. Di GitHub Pages settings → Custom domain
3. Masukkan domain kamu
4. Update DNS settings di provider domain:
   ```
   Type: CNAME
   Name: www
   Value: username.github.io
   ```

---

## Tips

✅ **GitHub Pages GRATIS selamanya!**
✅ **Unlimited bandwidth**
✅ **SSL/HTTPS otomatis**
✅ **Perfect untuk wedding invitation**

⚠️ **Repository harus PUBLIC** (untuk gratis)
⚠️ **Max 1GB repo size** (website ini cuma ~10MB)

---

## Link Penting

- GitHub: https://github.com
- GitHub Pages Docs: https://pages.github.com
- Git Download: https://git-scm.com

---

## Troubleshooting Cepat

**Website tidak muncul?**
- Check repository: PUBLIC ✅
- Check GitHub Pages: Enabled ✅
- Check Branch: main ✅
- Tunggu 5 menit lagi

**Error saat push?**
- Check internet connection
- Check username/token benar
- Coba `git push -f origin main` (force push)

**Foto tidak muncul?**
- Nama file foto HARUS sama persis (case-sensitive di server!)
- `Background 1.JPG` ≠ `background 1.jpg`
- Check semua foto ada di repo

---

**Selamat! Website undangan kamu sekarang online! 🎊💒**

Share link-nya ke tamu:
```
https://username.github.io/wedding-invitation/?name=Nama%20Tamu&pax=2
```

