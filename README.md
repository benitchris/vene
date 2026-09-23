# VENE Sauna & Massage Website 🌿

Official website for **VENE Sauna and Massage** (`venesaunaandmassage.com`), located at **Kicukiro Sonatube, Silverback Mall, Kigali, Rwanda**.

---

## 🌐 Custom Domain Setup: `venesaunaandmassage.com` (Spaceship + GitHub Pages)

### ⚠️ Resolving `NotServedByPagesError`

GitHub Pages requires **all 4 A Records** plus a **CNAME Record** for `www` to verify domain ownership.

---

### Step 1: Add All 4 A Records on Spaceship DNS
Log into [Spaceship.com](https://www.spaceship.com) -> **Launchpad / Domain Manager** -> Select **`venesaunaandmassage.com`** -> **Advanced DNS / DNS Manager**.

1. Delete any existing Parking or Default A records.
2. Add these **4 A Records**:
   | Record Type | Host / Name | IP Value | TTL |
   | :--- | :--- | :--- | :--- |
   | **A Record** | `@` | `185.199.108.153` | Automatic |
   | **A Record** | `@` | `185.199.109.153` | Automatic |
   | **A Record** | `@` | `185.199.110.153` | Automatic |
   | **A Record** | `@` | `185.199.111.153` | Automatic |

3. Add **1 CNAME Record**:
   | Record Type | Host / Name | Target Value | TTL |
   | :--- | :--- | :--- | :--- |
   | **CNAME Record** | `www` | `benitchris.github.io` | Automatic |

---

### Step 2: Re-verify Custom Domain on GitHub Pages
1. Open **[github.com/benitchris/vene/settings/pages](https://github.com/benitchris/vene/settings/pages)**.
2. Under **Custom domain**:
   - Clear the text box and click **Save**.
   - Re-enter `venesaunaandmassage.com` and click **Save**.
3. GitHub Pages will perform DNS check and display green checkmark: **"DNS check successful"**.
4. Check **Enforce HTTPS** (takes ~5 minutes to issue SSL certificate).

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
