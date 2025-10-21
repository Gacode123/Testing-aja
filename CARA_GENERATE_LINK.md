# 📨 Cara Generate Link Undangan Pribadi

## Format Link Personalized

Gunakan format URL berikut untuk membuat undangan pribadi:

```
index.html?name=NAMA_TAMU&guests=JUMLAH_ORANG
```

### Parameter URL:
- **name** atau **n** = Nama tamu
- **guests** atau **g** atau **quota** = Jumlah orang yang diundang

---

## 🎯 Contoh Link Undangan

### 1. Tamu Tunggal (1 Orang)
```
index.html?name=Budi%20Santoso&guests=1
```
Atau versi pendek:
```
index.html?n=Budi%20Santoso&g=1
```

### 2. Pasangan (2 Orang)
```
index.html?name=Keluarga%20Hartono&guests=2
```

### 3. Keluarga (4 Orang)
```
index.html?name=Bapak%20Suharto%20%26%20Keluarga&guests=4
```

### 4. Tamu Tanpa Kuota (Tidak menampilkan jumlah)
```
index.html?name=Dr.%20Ahmad%20Wijaya
```

---

## 📝 Tips Encode Nama

Spasi dan karakter khusus harus di-encode:
- **Spasi** → `%20`
- **&** → `%26`
- **+** → `%2B`

### Tools Encode Online:
- https://www.urlencoder.org/
- Atau gunakan JavaScript: `encodeURIComponent("Nama Tamu")`

---

## 🚀 Cara Praktis Generate Banyak Link

### Opsi 1: Gunakan Excel/Google Sheets

Buat kolom:
| Nama | Jumlah | Link |
|------|--------|------|
| Budi Santoso | 1 | =CONCATENATE("index.html?name=",ENCODEURL(A2),"&guests=",B2) |

### Opsi 2: Script Generator (JavaScript)

```javascript
const guests = [
    { name: "Budi Santoso", quota: 1 },
    { name: "Keluarga Hartono", quota: 2 },
    { name: "Bapak Ahmad & Keluarga", quota: 4 }
];

guests.forEach(guest => {
    const encodedName = encodeURIComponent(guest.name);
    const link = `index.html?name=${encodedName}&guests=${guest.quota}`;
    console.log(`${guest.name}: ${link}`);
});
```

### Opsi 3: Python Script

```python
import urllib.parse

guests = [
    {"name": "Budi Santoso", "quota": 1},
    {"name": "Keluarga Hartono", "quota": 2},
    {"name": "Bapak Ahmad & Keluarga", "quota": 4}
]

base_url = "https://yourwedding.com/index.html"

for guest in guests:
    encoded_name = urllib.parse.quote(guest["name"])
    link = f"{base_url}?name={encoded_name}&guests={guest['quota']}"
    print(f"{guest['name']}: {link}")
```

---

## 📱 Cara Kirim ke Tamu

### 1. **WhatsApp**
```
🎊 Undangan Pernikahan 🎊

Kepada Yth.
Bapak/Ibu [NAMA]

Kami dengan hormat mengundang Bapak/Ibu untuk menghadiri acara pernikahan kami.

Silakan buka undangan digital: 
[LINK PRIBADI]

Mohon konfirmasi kehadiran melalui link di atas.

Terima kasih 🙏
William & Livia
```

### 2. **Email**
Subject: Undangan Pernikahan William & Livia

Body:
```html
<p>Kepada Yth. [NAMA],</p>
<p>Kami dengan senang hati mengundang Anda...</p>
<a href="[LINK]">Buka Undangan Digital</a>
```

### 3. **Short URL (Recommended)**
Gunakan layanan:
- bit.ly
- tinyurl.com
- s.id (Indonesia)

Contoh:
```
Link asli: https://wedding.com/index.html?name=Budi%20Santoso&guests=2
Short URL: https://bit.ly/william-livia-budi
```

---

## 🔍 Testing Link

### Cara Test:
1. Buka link di browser
2. Cek apakah nama muncul dengan benar
3. Cek apakah kuota muncul
4. Test klik "Ya, Saya Hadir" dan "Maaf, Tidak Bisa Hadir"
5. Test submit form

### Contoh Test Links:
```
# Test 1: Single guest
index.html?name=Test%20User&guests=1

# Test 2: Couple
index.html?name=Mr%20%26%20Mrs%20Smith&guests=2

# Test 3: Nama Indonesia
index.html?name=Bapak%20Budi%20Santoso&guests=1
```

---

## 📊 Template Excel untuk Generate Link

| No | Nama Lengkap | Jumlah Tamu | Nama Encoded | Link Lengkap | Short URL |
|----|--------------|-------------|--------------|--------------|-----------|
| 1  | Budi Santoso | 1 | =ENCODEURL(B2) | =CONCATENATE("index.html?name=",D2,"&guests=",C2) | (manual) |
| 2  | Keluarga Hartono | 2 | =ENCODEURL(B3) | =CONCATENATE("index.html?name=",D3,"&guests=",C3) | (manual) |

---

## ✅ Checklist Sebelum Kirim

- [ ] Test semua link berfungsi
- [ ] Nama muncul dengan benar (tidak ada %20 di display)
- [ ] Kuota sesuai
- [ ] Form submission berfungsi
- [ ] Responsive di mobile
- [ ] Short URL sudah dibuat (opsional)

---

## 🎁 Bonus: QR Code Generator

Buat QR Code untuk setiap link:
1. Kunjungi: https://www.qr-code-generator.com/
2. Paste link pribadi
3. Download QR Code
4. Cetak di kartu undangan fisik

---

## 💡 Tips & Trik

1. **Gunakan Short URL** - Lebih mudah diketik dan dibagikan
2. **Buat Spreadsheet Master** - Simpan semua data tamu dan link-nya
3. **Test di Multiple Device** - HP Android, iPhone, Desktop
4. **Backup Data** - Export data tamu sebelum deploy
5. **Set up Analytics** - Track berapa yang sudah buka undangan

---

## 🔗 Format Link Alternatif

Jika hosting di domain sendiri:
```
https://william-livia.wedding/i/BudiSantoso
https://william-livia.wedding/?id=BS001
```

Requires custom backend routing.

---

## 📞 Support

Jika ada masalah dengan link generation, cek:
1. Encoding nama sudah benar
2. Parameter name & guests ada di URL
3. Console browser untuk error (F12)
4. Network tab untuk cek data submission

---

**Selamat menggunakan! Semoga pernikahan lancar! 💒✨**

