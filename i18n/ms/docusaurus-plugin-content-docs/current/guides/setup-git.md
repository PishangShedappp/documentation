---
sidebar_position: 1
---

# Sediakan Git untuk projek baharu

Panduan ini merangkumi perkara asas: memasang Git, memulakan repositori, mengkonfigurasi identiti, dan menolak komit pertama ke GitHub.

## 1. Pasang Git

Muat turun Git dari https://git-scm.com/downloads dan ikuti pemasang untuk sistem operasi anda (Windows, Mac, atau Linux).

Sahkan pemasangan:

```bash
git --version
```

## 2. Konfigurasikan identiti

Tetapkan nama dan emel global (digunakan dalam komit) untuk mengesahkan diri anda:

```bash
git config --global user.name "Nama Anda"
git config --global user.email "anda@example.com"
```

Sahkan tetapan anda:

```bash
git config --global --list
```

## 3. Buka projek anda

Buka projek anda di VS Code, atau buka lokasi projek anda di terminal/cmd.

## 4. Cipta repositori baharu di GitHub

Pergi ke [github.com](https://github.com) dan klik butang **New** untuk mencipta repositori baharu.

![New Repository Button](/img/github-setup/add-button.png)

Masukkan nama repositori anda, pilih sama ada ia **Public** atau **Private**, dan klik **Create repository** di bahagian bawah.

![New Repository Form](/img/github-setup/create-new.png)

## 5. Mulakan dan tolak kod anda

Selepas mencipta repositori, GitHub akan menunjukkan set arahan untuk menolak repositori sedia ada dari baris arahan. Ia akan kelihatan seperti ini (tetapi berdasarkan nama repositori dan nama pengguna anda):

![GitHub Commands](/img/github-setup/paste-command.png)

Salin arahan tersebut dan tampalkannya ke dalam terminal/cmd anda. Sebagai contoh:

```bash
echo "# nama-repo-anda" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/NamaPenggunaAnda/nama-repo-anda.git
git push -u origin main
```

## 6. Urus perubahan di VS Code

Setelah repositori anda disediakan, anda boleh mengurus perubahan masa hadapan terus di VS Code:

1. Pergi ke tab **Source Control** di VS Code.
2. Jika terdapat sebarang perubahan yang belum dikomit, masukkan mesej komit.
3. Klik pada **Commit** dan kemudian **Sync Changes**.

![VS Code Source Control](/img/github-setup/source-control-button.png)
![VS Code Generate & Commit](/img/github-setup/generate-and-commit.png)

Itu sahaja! Anda kini boleh memuat semula halaman repositori GitHub anda untuk melihat kod anda.
