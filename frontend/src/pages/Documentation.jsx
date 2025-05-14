import { useState } from "react";
import "./Documentation.css";

/**
 * CodeBlock – reusable component that shows a preformatted code snippet with a copy‑to‑clipboard button.
 * Uses only browser APIs, no third‑party dependencies.
 */
function CodeBlock({ children }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(children.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silently fail if clipboard access is denied
      console.error("Clipboard copy failed", err);
    }
  }

  return (
    <div className="code-wrapper">
      <pre className="code-block">
        <code>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="copy-btn"
        aria-label="Copy to clipboard"
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
    </div>
  );
}

/**
 * Documentation – single‑page in‑depth docs for the Smart Mirror project.
 * No external UI frameworks; styles live in Documentation.css.
 */
export default function Documentation() {
  return (
    <div className="documentation-page">
      <h1 className="documentation-title">Smart Mirror Documentation</h1>

      {/* ───────────────────────── Getting Started ───────────────────────── */}
      <section className="doc-section">
        <h2 className="section-title">Getting Started</h2>
        <p className="doc-text">
          These steps assume a freshly imaged Raspberry Pi OS SD card with network connectivity. Open a
          terminal with <kbd className="kbd">Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;T</kbd> or connect via SSH.
        </p>
        <ol className="doc-list">
          <li>
            <strong>Update the system</strong>
            <CodeBlock>{`sudo apt update && sudo apt full-upgrade -y`}</CodeBlock>
          </li>
          <li>
            <strong>Install prerequisites</strong>
            <CodeBlock>{`sudo apt install -y git curl build-essential`}</CodeBlock>
          </li>
          <li>
            <strong>Clone and install MagicMirror</strong>
            <CodeBlock>{`git clone https://github.com/MichMich/MagicMirror.git
cd MagicMirror
npm install`}</CodeBlock>
          </li>
          <li>
            <strong>Start the mirror UI</strong>
            <CodeBlock>{`npm start`}</CodeBlock>
          </li>
        </ol>
      </section>

      {/* ───────────────────── Raspberry Pi File Structure ───────────────────── */}
      <section className="doc-section">
        <h2 className="section-title">Project File Structure (~/MagicMirror)</h2>
        <p className="doc-text">
          Below is an abbreviated tree showing folders you’ll interact with most. Lines prefixed with
          “→” are custom to this project.
        </p>
        <CodeBlock>{`MagicMirror
├── README.md
├── config
│   └── config.js                # Main configuration file (editable)
├── css
│   └── custom.css               # Mirror‑wide overrides
├── modules                      # All MagicMirror modules live here
│   ├── default                  # Core modules shipped with MagicMirror
│   ├── node_modules             # Third‑party npm deps
│   ├── MMM-Spotify              # → Controls Spotify playback & tokens
│   ├── MMM-SchoolBellCountdown  # → School bell schedule & timer
│   └── MMM-Weather24            # → 24‑hour detailed forecast
└── package.json`}</CodeBlock>
      </section>

      {/* ───────────────────── MagicMirror Configuration ───────────────────── */}
      <section className="doc-section">
        <h2 className="section-title">Editing <code>config/config.js</code></h2>
        <p className="doc-text">
          MagicMirror loads settings from <code>~/MagicMirror/config/config.js</code> at startup.
        </p>
        <CodeBlock>{`nano ~/MagicMirror/config/config.js`}</CodeBlock>
        <p className="doc-text">
          Each module is declared inside the <code>modules</code> array:
        </p>
        <CodeBlock>{`{
  module: "MMM-Spotify",
  position: "bottom_left",
  config: {
    clientID: "<YOUR_CLIENT_ID>",
    clientSecret: "<YOUR_CLIENT_SECRET>",
    deviceDisplayName: "MagicMirror"
  }
}`}</CodeBlock>
        <p className="doc-text">
          Refer to the official documentation for all global options:
          <a
            href="https://docs.magicmirror.builders/getting-started/configuration.html"
            target="_blank"
            rel="noreferrer"
          >
            MagicMirror Configuration Reference ↗
          </a>
        </p>
      </section>

      {/* ─────────────────────── Remote YouTube Playlist ─────────────────────── */}
      <section className="doc-section">
        <h2 className="section-title">MMM-RemoteYoutube Playlist</h2>
        <p className="doc-text">
          <code>MMM-RemoteYoutube</code> lets the mirror cycle through a curated YouTube playlist—
          nothing outside that playlist will ever be shown. Videos advance automatically (or resume
          where you left off after a restart), making it perfect for dashboards, ambience loops, or
          classroom slides.
        </p>

        <h3 className="sub-title">Installation</h3>
        <ol className="doc-list">
          <li>
            Clone the module into <code>~/MagicMirror/modules</code>:
            <CodeBlock>{`cd ~/MagicMirror/modules
git clone https://github.com/your-org/MMM-RemoteYoutube.git`}</CodeBlock>
          </li>
          <li>
            Install its dependencies:
            <CodeBlock>{`cd MMM-RemoteYoutube
npm install`}</CodeBlock>
          </li>
        </ol>

        <h3 className="sub-title">Configuration</h3>
        <p className="doc-text">
          Add the snippet below to the <code>modules</code> array in
          <code>config/config.js</code>. Only <code>playlistId</code> is required—the rest are
          sensible defaults you can tweak later.
        </p>
        <CodeBlock>{`{
  module: "MMM-RemoteYoutube",
  position: "fullscreen_above",   // or any region; "fullscreen_*" works best
  config: {
    playlistId: "PLMqued8J4TOWFVoQKRasSufO75jGnT7tU",
    shuffle: true,                // Play items in random order
    loop: true,                   // Restart when the last video finishes
    hideControls: true,           // Clean, distraction-free UI
    updateInterval: 10 * 60 * 1000 // Refresh playlist every 10 min
  }
}`}</CodeBlock>

        <h3 className="sub-title">Adding Videos to the Playlist</h3>
        <p className="doc-text">
          Anyone with the link below can expand the playlist. Open the URL in a browser while signed
          in to the desired YouTube account, then click
          <strong>&nbsp;“Save → Playlist → MM Remote YouTube”</strong> on any video you want to add.
        </p>
        <a
          href="https://www.youtube.com/playlist?list=PLMqued8J4TOWFVoQKRasSufO75jGnT7tU&jct=5CE54I0Tp_FdVYvz6ZRIPA"
          target="_blank"
          rel="noreferrer"
          className="doc-link"
        >
          Open the shared playlist ↗
        </a>

        <h3 className="sub-title">Quick Tips</h3>
        <ul className="doc-list">
          <li>
            To force a playlist refresh without waiting for <code>updateInterval</code>, restart
            MagicMirror (<code>Ctrl&nbsp;+&nbsp;Q</code> → <code>npm start</code>).
          </li>
          <li>
            <code>hideControls</code> can be set to <code>false</code> during setup/debugging so you
            can scrub or skip.
          </li>
          <li>
            If videos buffer slowly, try lowering the Raspberry Pi’s
            <code>gpu_mem</code> split in <code>/boot/config.txt</code> or switch to 720 p output.
          </li>
        </ul>
      </section>

      {/* ───────────────────────── Spotify Auth ───────────────────────── */}
      <section className="doc-section">
        <h2 className="section-title">Spotify Developer Authentication</h2>
        <p className="doc-text">
          The <code>MMM-Spotify</code> module uses Spotify’s OAuth 2.0 flow. Perform these steps once per
          install:
        </p>
        <ol className="doc-list">
          <li>Create an app in the Spotify Developer Dashboard.</li>
          <li>Add <code>http://localhost:8888/callback</code> to “Redirect URIs”.</li>
          <li>Copy your Client ID and Client Secret into the module config.</li>
          <li>Start MagicMirror, approve access in the browser tab that opens.</li>
        </ol>
      </section>

      {/* ─────────────────────── School Bell Schedule ─────────────────────── */}
      <section className="doc-section">
        <h2 className="section-title">MMM‑SchoolBellCountdown Schedule</h2>
        <p className="doc-text">
          The module reads the array below; times are in 24‑hour <code>HH:MM</code> format.
        </p>
        <CodeBlock>{`defaults: {
  schedule: [
    { period: "0", start: "07:50", end: "08:35" },
    { period: "1", start: "08:45", end: "09:30" },
    { period: "2", start: "09:35", end: "10:25" },
    { period: "3", start: "10:30", end: "11:15" },
    { period: "4", start: "11:20", end: "12:05" },
    { period: "5", start: "12:10", end: "12:55" },
    { period: "6", start: "13:00", end: "13:45" },
    { period: "7", start: "13:50", end: "14:35" },
    { period: "8", start: "14:40", end: "15:25" }
  ],
  updateInterval: 1000 // Refresh every second
}`}</CodeBlock>
        <ul className="doc-list">
          <li><strong>period</strong> – Label displayed.</li>
          <li><strong>start / end</strong> – Class begin and end times.</li>
          <li><strong>updateInterval</strong> – Countdown refresh rate (milliseconds).</li>
        </ul>
      </section>

      {/* ─────────────────────── Power Management ─────────────────────── */}
      <section className="doc-section">
        <h2 className="section-title">Exiting & Power Management</h2>
        <p className="doc-text">
          Exit the UI gracefully: <kbd className="kbd">Ctrl&nbsp;+&nbsp;Q</kbd>
        </p>
        <p className="doc-text">Shutdown the Pi:</p>
        <CodeBlock>{`sudo shutdown now`}</CodeBlock>
        <p className="doc-text">Reboot:</p>
        <CodeBlock>{`sudo reboot`}</CodeBlock>
      </section>

      {/* ─────────────────────── Troubleshooting ─────────────────────── */}
      <section className="doc-section">
        <h2 className="section-title">Troubleshooting & FAQ</h2>
        <ul className="doc-list">
          <li>
            <strong>Black screen?</strong> Run <code>npm start --log-level debug</code> and look for errors.
          </li>
          <li>
            <strong>Module missing?</strong> Check your <code>config.js</code> for trailing commas.
          </li>
          <li>
            <strong>Wi‑Fi drops?</strong> Disable power‑save with <code>iw dev wlan0 set power_save off</code>.
          </li>
        </ul>
      </section>
      {/* ─────────────────────── Updating MagicMirror ─────────────────────── */}
      <section className="doc-section">
        <h2 className="section-title">Updating MagicMirror</h2>
        <p className="doc-text">
          Always connect the Pi to a hotspot before updating. <strong>Do not use the D128 Guests Wi-Fi</strong> — it blocks GitHub and prevents updates.
        </p>
        <ol className="doc-list">
          <li>
            <strong>Stash any changes</strong> to avoid merge errors:
            <CodeBlock>{`cd ~/MagicMirror
      git stash`}</CodeBlock>
          </li>
          <li>
            <strong>Pull the latest code and reinstall dependencies:</strong>
            <CodeBlock>{`git pull
      npm install --verbose`}</CodeBlock>
          </li>
          <li>
            <strong>If you get a Node.js version error:</strong>
            <CodeBlock>{`sudo npm install -g n
      sudo n 22`}</CodeBlock>
            <p className="doc-text">Then retry:</p>
            <CodeBlock>{`npm install --verbose`}</CodeBlock>
          </li>
          <li>
            <strong>If install fails with ENOTEMPTY:</strong>
            <CodeBlock>{`rm -rf node_modules
      rm package-lock.json
      npm install --verbose`}</CodeBlock>
          </li>
        </ol>
      </section>

      <p className="doc-footer">Documentation updated May 08, 2025.</p>
    </div>
  );
}
