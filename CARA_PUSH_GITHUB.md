# 📝 Panduan Push ke GitHub Pages

Dokumentasi lengkap untuk melakukan perubahan dan deploy ke GitHub Pages.

---

## 🔗 Informasi Repository

- **Repository:** https://github.com/Gacode123/Testing-aja
- **Live Website:** https://gacode123.github.io/Testing-aja/
- **Branch:** main (GitHub Pages auto-deploy dari branch ini)

---

## 📋 Step-by-Step: Push Perubahan ke GitHub

### 1️⃣ Setelah Edit File

Setelah melakukan perubahan pada file (index.html, style.css, script.js, dll), lakukan langkah berikut:

### 2️⃣ Cek Status Perubahan (Optional)

```bash
git status
```

Ini akan menampilkan file mana saja yang sudah diubah.

### 3️⃣ Add File yang Diubah

**Untuk file spesifik:**
```bash
git add index.html
git add style.css
git add script.js
```

**Atau untuk semua file sekaligus:**
```bash
git add .
```

**Atau untuk multiple files sekaligus:**
```bash
git add index.html style.css script.js
```

**Untuk file dengan spasi di nama (seperti MP3):**
```bash
git add "Canon in D.mp3"
```

### 4️⃣ Commit Perubahan

```bash
git commit -m "Deskripsi perubahan yang jelas"
```

**Contoh commit message yang baik:**
- `"Add Canon in D background music"`
- `"Update wedding date to include day name"`
- `"Fix greeting position to top left"`
- `"Change couple names order to Livia & William"`

### 5️⃣ Push ke GitHub

```bash
git push
```

Atau jika perlu specify branch:
```bash
git push origin main
```

### 6️⃣ Tunggu Deployment

- GitHub Pages akan otomatis deploy dalam **1-2 menit**
- Buka website: https://gacode123.github.io/Testing-aja/
- Lakukan **hard refresh** jika perubahan belum muncul:
  - Windows: `Ctrl + Shift + R` atau `Ctrl + F5`
  - Mac: `Cmd + Shift + R`

---

## 🚀 Shortcut: All-in-One Command

Untuk yang sudah familiar, bisa langsung:

```bash
git add . && git commit -m "Your message here" && git push
```

Contoh:
```bash
git add . && git commit -m "Update wedding details" && git push
```

---

## 🎯 Contoh Workflow Lengkap

### Scenario: User minta ubah lokasi gereja

**Step 1: Edit file**
```
Edit index.html → Ubah alamat gereja
```

**Step 2: Git commands**
```bash
git add index.html
git commit -m "Update church address to correct location"
git push
```

**Step 3: Verify**
```
Tunggu 1-2 menit → Refresh browser → Cek perubahan
```

---

## 📁 File-File yang Sering Diubah

| File | Untuk Apa |
|------|-----------|
| `index.html` | Konten, teks, struktur website |
| `style.css` | Styling, warna, layout, animasi |
| `script.js` | Fungsi interaktif, countdown, RSVP |
| `link-generator.html` | Generate link undangan personal |

---

## ⚠️ Tips Penting

### ✅ DO's:
- Selalu tulis commit message yang jelas
- Push setelah setiap perubahan major
- Test di local dulu sebelum push (buka index.html di browser)
- Gunakan `git status` untuk cek file yang berubah

### ❌ DON'T's:
- Jangan push file yang tidak perlu (temp files, .DS_Store, dll)
- Jangan commit dengan message generic seperti "update" atau "fix"
- Jangan langsung edit di GitHub web interface (edit di local aja)

---

## 🔧 Troubleshooting

### Problem: "git push" Ditolak

**Solution:**
```bash
git pull origin main
git push origin main
```

### Problem: File tidak masuk ke commit

**Solution:**
Pastikan file sudah di-add:
```bash
git add nama-file
git commit -m "message"
git push
```

### Problem: Perubahan tidak muncul di website

**Solution:**
1. Tunggu 2-3 menit (deployment butuh waktu)
2. Hard refresh: `Ctrl + Shift + R`
3. Cek di Incognito mode: `Ctrl + Shift + N`
4. Clear browser cache

### Problem: Salah commit

**Solution (jika belum push):**
```bash
git reset HEAD~1
```

Lalu edit ulang dan commit lagi.

---

## 📊 Command Reference Sheet

| Command | Fungsi |
|---------|--------|
| `git status` | Lihat status file yang berubah |
| `git add .` | Add semua file yang berubah |
| `git add nama-file` | Add file spesifik |
| `git commit -m "msg"` | Commit dengan message |
| `git push` | Push ke GitHub |
| `git pull` | Ambil perubahan dari GitHub |
| `git log --oneline` | Lihat history commit |

---

## 🎓 Untuk LLM/AI Assistant

**Workflow Template untuk Setiap Edit:**

```
1. Edit file(s) yang diminta user
2. Jalankan: git add [files]
3. Jalankan: git commit -m "Clear description"
4. Jalankan: git push
5. Konfirmasi ke user: "Perubahan sudah di-push, tunggu 1-2 menit lalu refresh"
```

**Catatan Penting:**
- Selalu gunakan commit message dalam Bahasa Inggris yang deskriptif
- Jika user minta multiple changes, bisa di-batch dalam satu commit
- Selalu informasikan user untuk hard refresh jika ada perubahan CSS/JS
- Jika ada file baru (gambar, mp3), pastikan di-add dengan quotes jika ada spasi

---

## 📞 Quick Reference

**Live Website:**
```
https://gacode123.github.io/Testing-aja/
```

**Sample Link dengan Parameter:**
```
https://gacode123.github.io/Testing-aja/?name=Nama%20Tamu&pax=2
```

**Tool Generate Link:**
```
Buka: link-generator.html di browser
Input: Nama, Pax
Output: Link personal untuk tamu
```

---

**Dokumentasi dibuat:** Oktober 2024  
**Last update:** Push workflow dengan Canon in D.mp3

---

## ✨ Happy Coding & Congratulations on Your Wedding! 💒

