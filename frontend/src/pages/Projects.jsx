import { useEffect, useState } from "react";
import timelineData from "../data/timeline.json";
import "./Projects.css";

function Projects() {
  const [timeline, setTimeline] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [mvp, setMvp] = useState([]);
  const [finalPres, setFinalPres] = useState(null);   // ← NEW

  /* ----- load JSON once on mount ----- */
  useEffect(() => {
    setTimeline(timelineData.timeline);
    setUpdates(timelineData.weeklyUpdates);
    setMvp(timelineData.MVP);
    setFinalPres(timelineData.finalPresentation);     // ← NEW
  }, []);

  return (
    <div className="projects-page">
      <h1 className="projects-title">Smart Mirror Project</h1>

      {/* ----------  Project Timeline ---------- */}
      <section className="timeline-section">
        <h2 className="section-title">Project Timeline</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <h3>
                {item.week}: {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------  Weekly Updates ---------- */}
      <section className="timeline-section">
        <h2 className="section-title">Weekly Updates</h2>
        <div className="timeline">
          {updates.length > 0 ? (
            updates.map((update, index) => (
              <div key={index} className="timeline-item">
                <p className="update-date">{update.date}</p>
                <h3>
                  {update.week}: {update.title}
                </h3>
                <p className="update-text">{update.description}</p>
              </div>
            ))
          ) : (
            <p className="no-updates">
              No updates available. Add updates to <code>timeline.json</code>.
            </p>
          )}
        </div>
      </section>

      {/* ----------  MVP ---------- */}
      <section className="timeline-section">
        <h2 className="section-title">Minimum Viable Product (MVP)</h2>
        <div className="timeline">
          {mvp.map((item, index) => (
            <div key={index} className="timeline-item">
              <h3>
                {item.week}: {item.title}
              </h3>
              <p>{item.description}</p>

              {item.video && (
                <video className="mvp-video" controls>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Post-MVP blurb */}
              <hr className="section-divider" />
              <h3 className="post-mvp-title">Post-MVP Finalization</h3>
              <p className="post-mvp-text">
                After pushing out the MVP, I’ll refine the build by 3-D-printing
                cases and cable routes, creating a streamlined plug-and-play
                system, adding the mirror glass, and installing LED back-lighting
                for extra ambience.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------  Final Product Presentation ---------- */}
      {finalPres && (
        <section className="timeline-section">
          <h2 className="section-title">Final Product Presentation</h2>
          <div className="timeline-item">
            <h3>{finalPres.title}</h3>
            <p>{finalPres.description}</p>

            {finalPres.video && (
              <video className="final-video" controls>
                <source src={finalPres.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default Projects;
