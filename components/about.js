

export default function renderAbout(about, contact) {
    console.log("IMAGE URL", about.photo);
    return `
      <section id="about">
      <h2 id = "name">${about.name}</h2>
      <div class="row">
        <div class="col-6">
          <img 
            src=${about.photo}
            class="profile"
            alt="Photo of Brend"
            style="max-width: 80%"
          />
        </div>
        
        <div class="col-6" id="aboutme">
        <h4 style = "text-align: center;";> About Me: </h4>
          <p>
          ${about.longdesc}
            <a href=${about.dog}> dog. </a>
          </p>
        </div>
      </div>
  
      <div class="contact">
        <strong> ${about.title}</strong>
        <br />
        mengb@bc.edu
        <br />
        ${about.address}
  
        <ul id="links">
          <a href=${contact.Resume} target="_blank"><i class="fas fa-user-tie"></i> Resume</a>
  
          |
          <a href="${contact.Twitter} target="_blank"><i class="fab fa-twitter-square"></i></a>
          |
          <a href=${contact.Linkedin} target="_blank"
            > <i class="fab fa-linkedin"></i></a >
          |
          <a href=${contact.Github} target="_blank"> <i class="fab fa-github"></i> </a>
        </ul>
      </div>
    </section>
     
      `;
  }