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

      <p className="doc-footer">Documentation updated April 30, 2025.</p>
    </div>
  );
}
