import React from 'react';

const Projects = () => {
    return (
        <div className="Projects">
            <div className="container center-project">
            <br/><br/>
                <h2>Projects</h2>
                <br/><br/>
                <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Language</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abandoned Object Detection</td>
          <td>An algorithm to detect and classify the threat of abandoned objects using ML.</td>
          <td>Python</td>
          <td><a href="https://github.com/sspeedy99" target="_blank"> Github</a></td>
        </tr>
          <tr>
          <td>La Galerie</td>
          <td>The free and social web application for artists to share their work around the world.</td>
          <td>NodeJS</td>
          <td><a href="https://github.com/sspeedy99/La-Galerie" target="_blank"> Github</a></td>
        </tr>
        <tr>
          <td>Whatsapp-CLI</td>
          <td>A Command line interface to use Whatsapp through terminal.</td>
          <td>Python</td>
          <td><a href="https://github.com/sspeedy99/whatsapp-cli" target="_blank"> Github</a></td>
        </tr>
        <tr>
          <td>BookPlan</td>
          <td>An online book club where people joins the group and post what they are currently reading and what inspired them to read this book. .</td>
          <td>ReactJS</td>
          <td><a href="https://github.com/sspeedy99/BookPlan" target="_blank"> Github</a></td>
        </tr>
            <tr>
          <td>MyCal</td>
          <td>A responsive and progressive MEAN stack application offering a diary for tracking macronutrients and also tools for setting a daily goal and calculating macros.</td>
          <td>Angular</td>
          <td><a href="https://github.com/sspeedy99/MyCal" target="_blank"> Github</a></td>
        </tr>
      </tbody>
  </table>
    <br/><br/>
    <h4>Future Ventures (Teach myself in 2020) </h4> <br/>
     <ul>
  <li>Scalable distributed systems (infrastructure, networks, microservices)</li>
  <li>Deep Learning using Pytorch and FastAI</li>
  <li>Cyber-Security</li>
<li>File servers / personal datacenter / NAS</li>
  <li>Blockchain</li>
  <li>Embedded Systems (more IoT)</li>
    <li>Toasting bread instantly</li>
    </ul> 
    
    <br/>
    These are the few of the projects I have done. You can find more about my work on  my <a href="https://github.com/sspeedy99" target="_blank">  Github</a> page.

            </div>
            <br/><br/>
        </div>
    )
}


export default Projects;