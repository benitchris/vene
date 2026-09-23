# VENE Sauna & Massage Website 🌿

Official website for **VENE Sauna and Massage** (`venesaunaandmassage.com`), located at **Kicukiro Sonatube, Silverback Mall, Kigali, Rwanda**.

---

## 🌐 Custom Domain Setup: `venesaunaandmassage.com` (Spaceship + GitHub Pages)

This website is hosted for free on **GitHub Pages** with the custom domain **`venesaunaandmassage.com`** registered on **Spaceship.com**.

### Step 1: Push Code & CNAME File to GitHub
The project already includes the required `CNAME` file pointing to `venesaunaandmassage.com`. 

Push the latest code to GitHub:
```bash
git add .
git commit -m "Configure custom domain venesaunaandmassage.com"
git push origin main
```

---

### Step 2: Configure GitHub Pages Settings
1. Open your repository on GitHub: [`https://github.com/benitchris/vene`](https://github.com/benitchris/vene)
2. Go to **Settings** -> **Pages** (under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` | Folder: `/ (root)` -> Click **Save**.
4. Under **Custom domain**:
   - Enter `venesaunaandmassage.com` and click **Save**.
   - Check the **Enforce HTTPS** box (takes a few minutes for SSL certificate generation).

---

### Step 3: Configure DNS Records on Spaceship.com
Log into [Spaceship.com](https://www.spaceship.com) -> Go to **Domain Manager** -> Select **`venesaunaandmassage.com`** -> Open **DNS Manager**:

Add these **4 A Records**:
| Type | Host / Name | Value / Points To | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | Automatic / 300 |
| **A** | `@` | `185.199.109.153` | Automatic / 300 |
| **A** | `@` | `185.199.110.153` | Automatic / 300 |
| **A** | `@` | `185.199.111.153` | Automatic / 300 |

Add **1 CNAME Record**:
| Type | Host / Name | Value / Points To | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `benitchris.github.io.` | Automatic / 300 |

> ⏱️ *DNS propagation usually takes 5-15 minutes (up to 24 hours max). Once propagated, `https://venesaunaandmassage.com` and `https://www.venesaunaandmassage.com` will load your website securely!*

---

## 💻 Local Development

```bash
python3 -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## 📞 Contact & Location
- **Domain**: `venesaunaandmassage.com`
- **Address**: Kicukiro Sonatube, Silverback Mall, Kigali, Rwanda
- **Phone / WhatsApp**: `0788625531` (+250 788 625 531)
