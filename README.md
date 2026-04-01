# CapBugger Beta 1 ⚡

**CapBugger** is the ultimate companion for CapCut PC editors. It solves the most common issues with version management, metadata preservation, and project portability through a sleek, high-performance interface.

![CapBugger Splash](https://img.shields.io/badge/Release-Beta%201-indigo?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Rust%20%7C%20React%20%7C%20Tauri-blue?style=for-the-badge)

## 🌟 Key Features

- **🛡️ Version Locker**: Lock project metadata to prevent CapCut from automatically updating or modifying your legacy projects.
- **📂 Project Copier**: Seamlessly clone and port draft folders between different CapCut installations or backup drives.
- **🛑 Process Killer**: Insta-terminate CapCut processes to clear memory or apply system-level changes to project files.
- **💎 Premium UI**: A futuristic, dark-themed dashboard built for speed and aesthetic excellence.

---

## 📽️ CapBugger Master Class (10-Step Pro Workflow)

Follow these exact steps to ensure 4K export availability and version consistency:

1. **Setup**: If you don't have the CapCut installer, use CapBugger to install it.
2. **Legacy Install**: Navigate to the **Version Locker** page and select **"Install from Legacy"** (contains official CapCut packages).
3. **Version Locking**: Open CapBugger and press **"Lock Current Version"**. This prevents auto-updates and preserves 4K export as a pro feature.
4. **Initialization**: Activate your VPN and then launch CapCut.
5. **Editing**: After completing your edit, select all clips, right-click, and choose **"Create Compound Clip"**.
6. **Reprocessing**: Right-click the selected compound clip and select **"Reprocess"**.
7. **Process Control**: Return to CapBugger and press the **Kill Icon** (located next to the Lock Version button).
8. **File Sync**: Go to the **Copy Files** section, select your CapCut installation folder (Default: C:\), click **Scan**, and then **Copy**.
9. **Asset Replacement**: In CapCut, right-click the compound clip, select **"Replace Footage"**, navigate to the `Downloads/CapCut Files` folder, and select the first file.
10. **Final Export**: Click **Export** and you are done!

---

## 🛠️ Development & Build

### Prerequisites
- [Rust](https://www.rust-lang.org/) (latest stable)
- [Node.js](https://nodejs.org/) (LTS)
- [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) (Windows only)

### Local Development
```bash
# Install dependencies
npm install

# Start in dev mode
npm run tauri dev
```

### Build Production Bundle
```bash
npm run tauri build
```

---

## 📄 License
This project is for personal use and beta testing. All rights reserved by the CapBugger Team.
