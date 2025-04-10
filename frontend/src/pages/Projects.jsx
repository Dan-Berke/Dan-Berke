import { useEffect, useState } from "react";
import timelineData from "../data/timeline.json";
import "./Projects.css";

function Projects() {
  const [timeline, setTimeline] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [mvp, setMvp] = useState([]);

  // Load timeline, updates, and MVP from JSON
  useEffect(() => {
    setTimeline(timelineData.timeline);
    setUpdates(timelineData.weeklyUpdates);
    setMvp(timelineData.MVP);
  }, []);

  return (
    <div className="projects-page">
      <h1 className="projects-title">Smart Mirror Project</h1>

      {/* Project Timeline */}
      <section className="timeline-section">
        <h2 className="section-title">Project Timeline</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <h3>{item.week}: {item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Updates Section */}
      <section className="updates-section">
        <h2 className="section-title">Weekly Updates</h2>
        <div className="updates-container">
          {updates.length > 0 ? (
            updates.map((update, index) => (
              <div key={index} className="update-item">
                <p className="update-date">{update.date}</p>
                <h3>{update.week}: {update.title}</h3>
                <p className="update-text">{update.description}</p>
              </div>
            ))
          ) : (
            <p className="no-updates">No updates available. Add updates to `timeline.json`.</p>
          )}
        </div>
      </section>

      {/* MVP Section with Video */}
      <section className="timeline-section">
        <h2 className="section-title">Minimum Viable Product (MVP)</h2>
        <div className="timeline">
          {mvp.map((item, index) => (
            <div key={index} className="timeline-item">
              <h3>{item.week}: {item.title}</h3>
              <p>{item.description}</p>
              {item.video && (
                <video className="mvp-video" controls>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
