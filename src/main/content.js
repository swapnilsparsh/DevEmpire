import React from "react";
import "../css/App.css";
import Footer from "../Footer/footer";
import Landingpage from "./landingpage";

const Content = () => (
  <div>
    {/* <img className="background" src="../img/Developer-Society-bg.png" alt="" /> */}
    <Landingpage></Landingpage>
    <div className="container">
      <div class="card">
        <div class="content">
          <a
            href="https://developer.amazon.com/en-IN/alexa/alexa-student-influencer#"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Alexa Student Influencer Program</h3>
            <img className="image-cover" src="../img/Alexa.png" alt=""></img>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://auth0.com/ambassador-program"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Auth0 Ambassador Program</h3>
            <img src="../img/auth0ambassador.png" alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://app.smartsheet.com/b/form/a92f74ca555f44e4aa638a4f00a77213"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Cisco Campus Ambassador Program</h3>
            <img src="../img/Cisco.png" alt="" />
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a href="https://www.cncf.io/people/ambassadors/">
            <h3>Cloud Native Ambassador</h3>
            <img src="../img/CNCF.png" alt=""></img>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://community.codecademy.com/chapters/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Codecademy Chapter Leader</h3>
            <img src="../img/Codeacademy.png" alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://www.codechef.com/college-chapter/about"
            target="_blank"
            rel="noreferrer"
          >
            <h3>CodeChef College Chapter</h3>
            <img src="../img/Codechef.png" alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://developers.facebook.com/developercircles/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Developer Circles from Facebook</h3>
            <img className="image" src="../img/Facebook.png" alt="" />
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a
            href="https://developers.google.com/community/gdg/organizers"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Google Developer Groups Organizer</h3>
            <img src="../img/GDG.png" alt=""></img>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://developers.google.com/community/dsc"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Google Developer Student Clubs</h3>
            <img src={"../img/GDSC.png"} alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://www.geeksforgeeks.org/campus-ambassador-program-by-geeksforgeeks/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>GeeksforGeeks Campus Ambassador</h3>
            <img className="image-fill" src="../img/GeeksForGeeks.png" alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://education.github.com/experts"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="heading">Github Campus Expert</h3>
            <img src="../img/Github.png" alt="" />
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a
            href="https://www.gitkraken.com/ambassador"
            target="_blank"
            rel="noreferrer"
          >
            <h3>GitKraken Ambassador Program</h3>
            <img className="image-fill" src="../img/GitKraken.jpg" alt=""></img>
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a
            href="https://about.gitlab.com/community/heroes/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="heading">GitLab Hero</h3>
            <img className="image" src="../img/Gitlab.png" alt=""></img>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://www.hackerearth.com/university/intro/"
            rel="noreferrer"
          >
            <h3>HackerEarth Campus Ambassador</h3>
            <img src="../img/Hackerearth.jpg" alt="" />
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a href="https://zambassador.com/" target="_blank" rel="noreferrer">
            <h3 className="heading">IBM ZAMBASSADOR</h3>
            <img className="image" src="../img/IBM.jpg" alt=""></img>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://software.intel.com/content/www/us/en/develop/community/ambassadors.html"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Intel Student Ambassador</h3>
            <img src="../img/Intel.jpeg" alt="" />
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <div class="tag - group">
            <span>Group</span>
          </div>
          <a
            href="https://kotlinlang.org/user-groups/user-group-list.html"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="heading">Kotlin User Group</h3>
            <img src="../img/Kotlin.png" alt=""></img>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://studentambassadors.microsoft.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Microsoft Learn Student Ambassador</h3>
            <img src="../img/mlsa.png" alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a href="https://fellowship.mlh.io/" target="_blank" rel="noreferrer">
            <h3 className="heading">MLH Fellowship</h3>
            <img className="image" src="../img/MLHFellowship.jpg" alt="" />
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a
            href="https://mlh.io/event-membership"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="heading">MLH Event Membership</h3>
            <img src="../img/MLH.png" alt=""></img>
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a
            href="https://live.mongodb.com/start-a-group/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>MongoDB Community Leader</h3>
            <img src="../img/MongoDB.png" alt=""></img>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://campus.mozilla.community/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="heading"> Mozilla Campus Club</h3>
            <img src="../img/Mozilla.png" alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://www.oneplus.in/campus"
            target="_blank"
            rel="noreferrer"
          >
            <h3>OnePlus Student Ambassador Program</h3>
            <img src="../img/OnePlus.jpg" alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://www.postman.com/company/student-program/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Postman Student Expert Program</h3>
            <img src="../img/Postman.png" alt="" />
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a
            href="https://www.prisma.io/ambassador"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Prisma Ambassador Program </h3>
            <img
              className="image-fill"
              src="../img/PrismaProgram.png"
              alt=""
            ></img>
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a
            href="https://www.ted.com/participate/ted-fellows-program"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="heading">TED Fellows Program</h3>
            <img
              className="image-cover"
              src="../img/TedFellow.jpg"
              alt=""
            ></img>
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <div class="tag - group">
            <span>Group</span>
          </div>
          <a
            href="https://www.tensorflow.org/community/groups"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="heading">TensorFlow User Group</h3>
            <img
              className="image-cover"
              src="../img/TensorFlow.png"
              alt=""
            ></img>
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <a
            href="https://community.uipath.com/uipath-student-developers-program/"
            target="_blank"
            rel="noreferrer"
          >
            <h3>UiPath Student Developer Program</h3>
            <img className="image" src="../img/UiPath.png" alt=""></img>
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <a
            href="https://unity.com/learn/student-ambassadors"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Unity Student Ambassador Program</h3>
            <img src="../img/Unity.png" alt="" />
          </a>
        </div>
      </div>

      <div class="card">
        <div class="content">
          <div class="tag - women">
            <span>Women</span>
          </div>
          <a
            href="https://www.womentechmakers.com/ambassadors"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Women Techmakers Ambassador</h3>
            <img src="../img/WTM.jpg" alt=""></img>
          </a>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
);

export default Content;
