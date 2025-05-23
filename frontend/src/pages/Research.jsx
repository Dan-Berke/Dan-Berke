import './Research.css';

function Research() {
  return (
    <div className="research-page">
      <h1 className="research-title">Smart Mirror Research</h1>

      <div className="research-section">
        <h2>Software Setup & Understanding the MagicMirror² Framework</h2>
        <p>
          The first step in building our smart mirror is setting up the Raspberry Pi, which serves as the brain of the project. 
          This involves installing the appropriate operating system—typically Raspberry Pi OS—and ensuring it runs smoothly. 
          Once the OS is installed, we will download and configure the MagicMirror² framework, an open-source modular platform 
          designed specifically for smart mirrors. This framework will provide the foundation for our display, allowing us to 
          integrate and customize various modules to show relevant information like time, weather, and news updates.
        </p>
      </div>

      <div className="research-section">
        <h2>Existing Smart Mirror Implementations</h2>
        <p>
          There are many tutorials available online that guide people through building a basic smart mirror, 
          but what makes our project unique is how we plan to enhance it by incorporating multiple advanced features. 
          Rather than following a single tutorial from start to finish, we are drawing inspiration from different projects, 
          each of which contributes something valuable to our final design.
        </p>
      </div>

      <div className="research-section">
        <h2>Key Features and Customization</h2>
        <p>
          Some smart mirror projects focus on voice activation, allowing users to control the display hands-free. 
          Others experiment with touch functionality, enabling users to interact with the mirror like a tablet. 
          Additional features like customizable app selection, real-time weather updates, and music projection have been implemented 
          in different variations of smart mirrors, but few projects have successfully combined all of these features into a 
          single, seamless experience.
        </p>
      </div>

      <div className="research-section">
        <h2>Project Goals</h2>
        <p>
          Our goal is to take the best aspects of these different implementations and merge them into a single, 
          highly interactive and functional smart mirror. This means our first two weeks will not only focus on 
          setting up the MagicMirror² framework but also on exploring its customization potential.
        </p>
      </div>

      <div className="research-section">
        <h2>Technical Preparation</h2>
        <p>
          We will familiarize ourselves with JavaScript, as this is the primary language used to modify and create 
          modules within the framework. Basic modifications will include adjusting the layout, modifying colors and 
          fonts for better visibility, and enabling or disabling default modules to suit our needs.
        </p>
      </div>

      <div className="research-section">
        <h2>Benefits of Having Smart Mirrors</h2>
        <p>
          As we refine the software setup, we will begin researching the additional features we want to implement. 
          This includes looking into voice recognition libraries, touchscreen overlays for the display, and ways to 
          integrate external APIs for music playback and weather forecasting. By the end of these two weeks, we should 
          have a working foundation for our smart mirror, a clear understanding of how the framework operates, and a 
          roadmap for how we will integrate the advanced features in the coming weeks.
        </p>
      </div>
    </div>
  );
}

export default Research;
