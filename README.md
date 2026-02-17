# 🏋️ 9-Day Fitness Challenge — UI

A pixel-perfect, responsive fitness challenge page built with **React** and **Tailwind CSS**. Supports **automatic light/dark theme** based on your system preferences.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

## 🌙 How to Test Dark / Light Theme

The app **automatically switches** between light and dark themes based on your system or browser settings. Here are 3 easy ways to test it:

---

### ✅ Method 1: Using Windows Settings (Easiest)

1. Press `Windows + I` to open **Settings**
2. Click **Personalization** from the left sidebar
3. Click **Colors**
4. Under **"Choose your mode"**, select:
   - **Light** → App will show the bright, white theme
   - **Dark** → App will switch to the dark theme
5. The app updates **instantly** — no need to refresh!

---

### ✅ Method 2: Using Chrome DevTools (Best for Quick Testing)

This method lets you quickly toggle between themes **without changing your Windows settings**.

1. Open the app in **Google Chrome** at [http://localhost:3000](http://localhost:3000)
2. Press `F12` (or `Ctrl + Shift + I`) to open **DevTools**
3. Press `Ctrl + Shift + P` to open the **Command Menu** (a search bar appears at the top)
4. Type **"rendering"** and click **"Show Rendering"**
5. Scroll down in the Rendering panel until you find **"Emulate CSS media feature prefers-color-scheme"**
6. Change the dropdown to:
   - **`prefers-color-scheme: light`** → Light theme
   - **`prefers-color-scheme: dark`** → Dark theme
7. The app updates **instantly** in the browser!

> 💡 **Tip:** This only affects the current browser tab. Your system theme stays unchanged.

---

### ✅ Method 3: Using the Rendering Tab Shortcut (Chrome)

1. Open the app in Chrome
2. Press `F12` to open DevTools
3. Click the **three dots menu (⋮)** in the top-right of DevTools
4. Go to **More tools** → **Rendering**
5. Find **"Emulate CSS media feature prefers-color-scheme"**
6. Select `dark` or `light` from the dropdown

---

## 📸 Theme Preview

| Light Mode                     | Dark Mode                                |
| ------------------------------ | ---------------------------------------- |
| White backgrounds, dark text   | Dark backgrounds (`#1a1a1a`), light text |
| Light sidebar with blur effect | Dark sidebar with blur effect            |
| Green "Your Submission" header | Darker green submission header           |
| White post cards               | Dark gray (`#2a2a2a`) post cards         |

---

## 📁 Project Structure

```
src/
├── App.js                  # Main layout (responsive desktop + mobile)
├── App.css                 # Custom scrollbar + font import
├── components/
│   ├── Header.js           # Desktop top nav bar
│   ├── SubHeader.js        # Desktop breadcrumb navigation
│   ├── MobileHeader.js     # Mobile nav + day tabs (with blur bg)
│   ├── Sidebar.js          # Desktop day list sidebar
│   ├── DayItem.js          # Single day row (with concave curves)
│   ├── SubmissionCard.js   # User's challenge submission post
│   ├── ReactionBar.js      # Emoji reactions + comment count
│   ├── PostCard.js         # Community post placeholder
│   └── CommunitySection.js # Community posts wrapper
```

---

## 🛠️ Tech Stack

- **React** — UI library
- **Tailwind CSS v3** — Utility-first styling with `dark:` variants
- **Create React App** — Project bootstrapping
