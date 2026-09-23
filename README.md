# VENE Sauna & Massage Website 🌿

Official luxury web application for **VENE Sauna and Massage**, located at **Kicukiro Sonatube, Silverback Mall, Kigali, Rwanda**.

---

## 🚀 How to Host this Website on Spaceship (Spaceship.com)

[Spaceship](https://www.spaceship.com) is a modern domain registrar and hosting platform by Namecheap. Follow these easy steps to host your VENE Sauna & Massage website on Spaceship:

### Method 1: Uploading directly to Spaceship Hosting Manager (cPanel / Web Hosting)

1. **Log in to Spaceship**:
   - Go to [spaceship.com](https://www.spaceship.com) and log into your account.

2. **Access Hosting Manager**:
   - Navigate to your **Launchpad / Dashboard**.
   - Click on **Shared Hosting** or **Hosting Manager** for your website domain.

3. **Open File Manager**:
   - Locate and open **File Manager** (or cPanel File Manager).
   - Double-click the **`public_html`** folder (or the root web folder assigned to your domain).

4. **Upload Website Files**:
   - Upload the following files and folders from your `vene` project directory:
     - `index.html`
     - `styles.css`
     - `app.js`
     - `assets/` (containing `logo.png`, `hero_bg.png`, and `sauna_room.png`)
     - `.nojekyll` (optional)
   - *Tip:* You can compress the `vene` project files into a `.zip` file on your computer, upload `vene.zip` to `public_html` via Spaceship File Manager, and click **Extract**.

5. **Verify Domain DNS**:
   - In Spaceship **Domain Manager**, ensure your domain's DNS is pointing to **Spaceship Web Hosting** (Web Hosting DNS records).
   - Your website will now be live at `https://yourdomain.com`!

---

### Method 2: Hosting on GitHub Pages / Vercel with a Spaceship Custom Domain

If you prefer hosting the site code on **GitHub Pages** or **Vercel** for free while using your domain purchased on **Spaceship**:

1. **Deploy to GitHub Pages or Vercel** (see GitHub Pages steps below).
2. **In Spaceship Domain Manager**:
   - Go to **DNS Manager** for your domain.
   - Add an **A Record** pointing to your host IP, or a **CNAME Record** pointing to `your-username.github.io` / `cname.vercel-dns.com`.
3. **Save DNS Settings**:
   - DNS propagation takes 5 to 15 minutes.

---

## 🚀 How to Host on GitHub Pages (Free)

1. **Create GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and create a public repository named `vene`.

2. **Push Files**:
   ```bash
   git init
   git add .
   git commit -m "Update Authentic Wooden Sauna image and setup"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vene.git
   git push -u origin main
   ```

3. **Enable Pages**:
   - Go to Repository **Settings** -> **Pages** -> Source: **Deploy from branch `main` (`/ root`)** -> Save.

---

## 💻 Local Development & Preview

To preview the website locally on your machine:

```bash
# Start python local server
python3 -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## 📞 Contact & Location
- **Location**: Kicukiro Sonatube, Silverback Mall, Kigali, Rwanda
- **Phone / WhatsApp**: `0788625531` (+250 788 625 531)
