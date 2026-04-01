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

## 📽️ The "Master Class" Workflow (8-Step Guide)

Follow these steps to master project isolation and version control:

1. **Isolation**: Move your desired project folder out of the default CapCut directory.
2. **Metadata Check**: Verify the `draft_meta.info` file exists in the folder.
3. **Open CapBugger**: Launch the application as Administrator.
4. **Kill CapCut**: Use the **Process Killer** to ensure no instances are running.
5. **Path Selection**: Use the **Project Copier** to move the project to its new permanent home.
6. **Apply Lock**: Navigate to **Version Locker** and lock the project metadata.
7. **Launch CapCut**: Start CapCut and verify the project appears in the list.
8. **Confirmation**: Ensure the version number remains consistent and no auto-update was triggered.

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
