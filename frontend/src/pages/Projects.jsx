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
      <section className="timeline-section">
        <h2 className="section-title">Weekly Updates</h2>
        <div className="timeline">
          {updates.length > 0 ? (
            updates.map((update, index) => (
              <div key={index} className="timeline-item">
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
              
              {/* Text Break */}
              <hr className="section-divider" />

              {/* Post-MVP Enhancements */}
              <h3 className="post-mvp-title">Post-MVP finalization</h3>
              <p className="post-mvp-text">
                After pushing out the mvp, I will start the refining process and make sure that the entire
                project looks professional and presentable. I will acheive this by 3D printing cases and cable routes for behind the mirror, and a streamlined plug&play system to start using the mirror.
                After the 3D printed items are finished, i will put the mirror on and possibly add LED lights behind the overhang to add a cooler feel. 
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
