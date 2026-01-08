#!/bin/bash

# 1. Cek apakah ada pesan commit di argumen pertama
if [ -z "$1" ]
then
    # Kalau lupa kasih pesan, script akan nanya
    echo "⚠️  Ups, lupa pesan commit-nya Bos! Ketik di bawah:"
    read message
else
    # Kalau ada, pakai pesan tersebut
    message="$1"
fi

# 2. Proses Git
echo "🚀 Menambahkan semua file (git add .)..."
git add .

echo "📦 Membungkus commit..."
git commit -m "$message"

# Mengambil nama branch saat ini secara otomatis
current_branch=$(git branch --show-current)

echo "✈️  Mendorong ke branch: $current_branch..."
git push origin $current_branch

echo "✅ Selesai! Data sudah di Github."