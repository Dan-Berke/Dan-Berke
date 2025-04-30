import "./Documentation.css";

function Documentation() {
  return (
    <div className="documentation-page">
      <h1 className="documentation-title">Smart Mirror Documentation</h1>

      <section className="doc-section">
        <h2 className="section-title">Getting Started</h2>
        <p className="doc-text">
          To launch the MagicMirror interface on your Raspberry Pi, follow these steps:
        </p>
        <pre className="code-block">
          <code>cd MagicMirror</code>
          <br />
          <code>npm start</code>
        </pre>
      </section>

      <section className="doc-section">
        <h2 className="section-title">Shutting Down</h2>
        <p className="doc-text">
          To close the MagicMirror interface safely, press:
        </p>
        <pre className="code-block">
          <code>Ctrl + Q</code>
        </pre>
        <p className="doc-text">
          This keyboard shortcut exits the Electron window gracefully.
        </p>
      </section>
    </div>
  );
}

export default Documentation;
