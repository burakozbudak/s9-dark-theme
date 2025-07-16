# Dark Theme

Bir yatırım firması için yapılan bir uygulamada, kullanıcı deneyimini artırmak için `Dark Theme (Karanlık Tema)` eklemek istiyorlar.

UI tarafı ve css'ler projeye eklenmiş durumda. Yapılan ayarın kayıtlı kalması için backend geliştirilmesi yapılıyor. Bununla birlikte, client tarafında da `localStorage` ile ayarların browserda saklanması bekleniyor.

## Amaç

Custom Hook'lar oluşturmak ve kullanmak.

1. `useLocalStorage`

Bu hook,

- 2 argüman almalı: key ve başlangıç değeri.
- eğer localStorage'da bu key'e karşılık kayıtlı bir değer varsa onu, yoksa başlangıç değerini kullanmalı.
- localStorage'da tutulan değeri ve onu güncelleyecek bir metodu dönmeli.

2. `useDarkMode`

Bu hook, useState gibi çalışmalı ve darkMode ayarını useLocalStorage hook'unu kullanarak localStorage üzerinden yönetmeli.

- Custom hookları, kendi adlarını taşıyan dosyaların içine koy ve bunlar `src` klasörünün içinde `hooks` klasörünün içinde olsun.
- useDarkMode hookunu App.jsx dosyasında oluşturup kullandıktan sonra useState importunu ve kullanımını silmelisin.
- Dark theme geçişini sağlayacak button state değerini değiştiriyor ama App.jsx dosyasında `data-testid="app"` elemanına `dark-theme` classını ekleyip çıkarmıyor. Bunu düzelterek projeye başlayabilirsin.

İpucu: Proje içinde TailwindCSS classlarını conditional olarak birlikte kullanmak için kullanılan `clsx` paketinin bazı kullanımlarını bulacaksın. Üstteki maddeyi tamamlarken işine yarayabilir.

## 🚀 Projeye Başlama

### Adım 1: Projeyi Kendi Hesabınıza Kopyalayın

1. Bu sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın
2. Kendi GitHub hesabınızda proje kopyası oluşacak

### Adım 2: Projeyi Bilgisayarınıza İndirin

Görseldeki adımları takip edin ya da terminali kullanabilirsiniz.

```bash
git clone [buraya-kendi-fork-linkinizi-yazın]
cd [proje-klasor-adi]
```

### Adım 3: Gerekli Kurulumları Yapın

Terminal açın ve sırasıyla şu komutları çalıştırın:

```bash
npm install
npm run c2w
```

> **💡 İpucu:** Bu komutlar gerekli paketleri yükler ve test sistemini başlatır.

### Adım 4: Projeyi Çalıştırın ve Browserda Görüntüleyin

Yeni bir terminal tabı açın ve şu komutu çalıştırın:

```bash
npm run dev
```

Bu komut projeyi çalıştıracak ve bir link verecek. Bu linki browserda açın ve yazdıklarınızın çıktısını gözlemleyin.

## 📝 Geliştirme Süreci

### 0. Öğrenci numaranızı `student_id.txt` dosyasına yazın 

### 1. Testleri Takip Edin

- Testlerin çalıştığı trminali açık tutun ve test çıktılarını izleyin
- Başarılı testler ✅, başarısız testler ❌ ile gösterilir

### 2. Adım Adım İlerleyin

- Her küçük ilerleme sonrası değişiklikleri kaydedin
- Testlerin durumunu kontrol edin
- Bir özelliği tamamen bitirdikten sonra commit yapın

### 3. Düzenli Commit Yapın

GitHub Desktop uygulamasını kullanarak ilerlemenizi sıklıkla GitHub'a gönderin.
Ya da terminali kullanabilirsiniz:

```bash
git add .
git commit -m "Anlamlı bir commit mesajı"
git push origin main
```

## 🧪 Otomatik Değerlendirme Sistemi

Bu proje otomatik test sistemi ile gelir. Test sonuçları terminal penceresinde görünür. Kırmızı (❌) testleri yeşile (✅) çevirmeye odaklanın.

## 🆘 Sorun Giderme

### Yaygın Sorunlar:

- **npm komutları çalışmıyor:** Node.js kurulu olduğundan emin olun
- **Testler çalışmıyor:** Terminal penceresini kapatıp `npm run c2w` komutunu tekrar çalıştırın

### Yardım İçin:

1. Terminal hatasını tam olarak okuyun
2. Dosya yollarının doğru olduğunu kontrol edin
3. Değişiklikleri kaydettiğinizden emin olun

## 📋 Çalışma Akışı Özeti

1. ✅ Projeyi fork edin ve clone edin
2. ✅ `npm install` ve `npm run c2w` çalıştırın
3. ✅ `npm run dev` ile projeyi çalıştırın ve size verdiği linki açarak yaptıklarınızı takip edin
4. ✅ Terminal'den test sonuçlarını takip edin
5. ✅ Düzenli olarak commit yapın
6. ✅ İlerleyişinizi GitHub'a push edin

**İyi çalışmalar! 🎨✨**
