export const projects = [
    {
      title: "Device Movement Detection - UW ENGINE Capstone",
      year: "2023",
      date: "January 2023 - June 2023",
      description:
        <list>
          <li>Led algorithm development for a team of 7, creating and implementing an algorithm for tracking the
  rotational movement of a radar, given a point cloud of detections from radar. </li>
          <li>Used thresholding and nearest neighbor matching to track radar detection trajectories across time steps
  and implemented averaging for trajectories to estimate overall radar rotation. (Python, NumPy, SciPy)</li>
          <li>Presented algorithm in live testing environments achieving accuracy within 5 degrees for all tests.</li>
        </list>,
      getImageSrc: () => require("../images/dmd.png"),
      tags: ["School", "Python", "Embedded Systems", "Machine Learning", "Featured"],
    },
    {
      title: "Software Engineer Intern - Papaya IoT",
      year: "2021",
      date: "May 2021 - September 2021",
      description:
        "GPIB instrument (Agilent, Keysight, Keithley) driver development and API for users to control measurement equipment in R&D and test environment.",
      getImageSrc: () => require("../images/raspberryPi.png"),
      tags: ["Internship", "C#", "Featured"],
    },
    {
      title: "Image Quality Control - UW ENGINE Capstone",
      year: "2022",
      date: "January 2022 - June 2022",
      description:
        <list>
          <li>Developed a custom dataset and trained on YOLOv5, detecting unwanted elements in seller-uploaded
  images and storing the location and class of elements. (Python, YOLOv5)</li>
          <li>Developed web application, where a user uploads images and a resulting image displays all detection
  locations of logos, watermarks, etc. (Flask)</li>
        </list>,
      getImageSrc: () => require("../images/githubLogo.png"),
      tags: ["School", "Python", "Flask", "Machine Learning"],
    },
    {
      title: "Graduate Researcher - UW Applied Phsycics Lab",
      year: "2022",
      date: "June 2022 - December 2022",
      description:
      <list>
        <li>
        Given a video of moving objects, created a graph based on the spatial and temporal location of objects. Detected and tracked the movement of each detection.
        </li>
        <li>
        Created a bipartite graph based on position and time to track the movement of each detection.
        </li>
      </list>,
      getImageSrc: () => require("../images/githubLogo.png"),
      tags: ["Research", "Machine Learning", "Python"],
    },
    {
      title: "FPGA Pong Game",
      year: "2021",
      date: "January 2021 - Febuary 2021",
      description:
      <list>
        <li>Designed and implemented a Pong game on an FPGA using SystemVerilog.</li>
        <li>Game displayed on monitor with mouse and keyboard controls.</li>
        <li>Optional AI player option with adjustable difficulty.</li>
      </list>,
      getImageSrc: () => require("../images/githubLogo.png"),
      tags: ["School", "Embedded Systems", "SystemVerilog"],
    },
    {
      title: "FPGA Flappy Bird Game",
      year: "2020",
      date: "November 2020 - December 2020",
      description:
      <list>
        <li>Developed Flappy Bird game port using LED lightboard attached to FPGA.</li>
        <li>Random pipe obstacle generation with adjustable difficulty.</li>
        <li>Tracks high score with reset option displayed on FPGA.</li>
      </list>,
      getImageSrc: () => require("../images/githubLogo.png"),
      tags: ["School", "Embedded Systems", "SystemVerilog"],
    },
    {
      title: "Intern - Sound Sustainability",
      year: "2021",
      date: "May 2021 - August 2021",
      description:
      <list>
        <li>Developed json database of popular hearing aid brands.</li>
        <li>Implemented filtering system to compare products based on price and features.</li>
      </list>,
      getImageSrc: () => require("../images/githubLogo.png"),
      tags: ["Internship", "Javascript"],
    },
    {
      title: "Personal Website",
      year: "2024",
      date: "Febuary 2024 - Present",
      description:
      <list>
        <li>Coded personal website using React and Chakra UI.</li>
      </list>,
      getImageSrc: () => require("../images/githubLogo.png"),
      tags: ["Personal", "Javascript", "React", "Featured"],
    },
    {
      title: "Undergraduate Researcher - University of Washington",
      year: "2020",
      date: "November 2020 - December 2020",
      description:
      <list>
        <li>Co-authored “Stackelberg Policy Gradient: Evaluating the Performance of Leaders and Followers” accepted into Gamification and Multiagent Solutions. (ICLR 2022)</li>
        <li>Wrote Python scripts to compare game performance and create visualizations used in paper.</li>
      </list>,
      getImageSrc: () => require("../images/githubLogo.png"),
      tags: ["Research", "Machine Learning", "Python"],
    },
    {
      title: "Pipelined CPU",
      year: "2021",
      date: "October 2021- December 2021",
      description:
      <list>
        <li> Developed a 5-stage pipelined CPU with ALU and memory functions using forwarding and delay slots.</li>
      </list>,
      getImageSrc: () => require("../images/githubLogo.png"),
      tags: ["School", "SystemVerilog"],
    },
  ];