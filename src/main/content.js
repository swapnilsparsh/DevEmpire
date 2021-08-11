import React from "react";
import "../App.css";
import Footer from "../Footer/footer";

const Content = () => (
  <div>
    {/* <img className="background" src="../img/Developer-Society-bg.png" alt="" /> */}
    <div className="container">
      <div className="card">
        <div className="content">
          <h3>
            Google Developer Student Clubs
          </h3>
          <img src={"../img/dsc.png"} alt="" />
          <a href="https://developers.google.com/community/dsc" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3>Microsoft Learn Student Ambassador</h3>
          <img src="../img/mlsa.png" alt="" />
          <a href="https://studentambassadors.microsoft.com/" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3 className="heading">Github Campus Expert</h3>
          <img src="../img/Github.png" alt="" />
          <a href="https://education.github.com/experts" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3>Unity Student Ambassador Program</h3>
          <img src="../img/Unity.png" alt="" />
          <a href="https://unity.com/learn/student-ambassadors" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3>OnePlus Student Ambassador Program</h3>
          <img src="../img/OnePlus.jpg" alt="" />
          <a href="https://www.oneplus.in/campus" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3>HackerEarth Campus Ambassador</h3>
          <img src="../img/Hackerearth.jpg" alt="" />
          <a href="https://www.hackerearth.com/university/intro/" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3 className="heading"> Mozilla Campus Club</h3>
          <img src="../img/Mozilla.png" alt="" />
          <a href="https://campus.mozilla.community/" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3>Codecademy Chapter Leader</h3>
          <img src="../img/CodeAcademy.jpg" alt="" />
          <a href="https://community.codecademy.com/chapters/" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3 className="heading">Auth0 Ambassador</h3>
          <img src="../img/Auth0.jpg" alt="" />
          <a href="https://auth0.com/ambassador-program" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3 className="heading">Postman Student Expert</h3>
          <img src="../img/Postman.png" alt="" />
          <a href="https://www.postman.com/company/student-program/" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3>Developer Circles from Facebook</h3>
          <img className="image" src="../img/Facebook.png" alt="" />
          <a href="https://developers.facebook.com/developercircles/" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3>GeeksforGeeks Campus Ambassador</h3>
          <img className="image" src="../img/GeeksForGeeks.png" alt=""/>
            <a href="https://www.geeksforgeeks.org/campus-ambassador-program-by-geeksforgeeks/" target="_blank" rel="noreferrer">
              Read More
            </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3 className="heading">MLH Fellowship</h3>
          <img className="image" src="../img/MLH.jpg" alt="" />
          <a href="https://fellowship.mlh.io/" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3 className="heading">CodeChef College Chapter</h3>
          <img src="../img/Codechef.png" alt="" />
          <a href="https://www.codechef.com/college-chapter/about" target="_blank" rel="noreferrer">
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3 className="heading">Intel Student Ambassador</h3>
          <img src="../img/Intel.jpeg" alt="" />
          <a href="https://software.intel.com/content/www/us/en/develop/community/ambassadors.html" target="_blank" rel="noreferrer" >
            Read More
          </a>
        </div>
      </div>

      <div className="card">
        <div className="content">
          <h3>Cisco Campus Ambassador Program</h3>
          <img src="../img/Cisco.jpg" alt="" />
          <a href="https://app.smartsheet.com/b/form/a92f74ca555f44e4aa638a4f00a77213" target="_blank" rel="noreferrer" >
            Read More
          </a>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h3></h3>
          <a href="#">Read More</a>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h3></h3>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
);

export default Content;