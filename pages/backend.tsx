import { CloudData, AuthData, HostingData, APIData } from "@/data/backend";
import SectionSlot from "@/components/section-slot";
import { useEffect } from "react";

export default function Backend() {
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let filterLinks = document.querySelectorAll(".layout .filters a");
    console.log(filterLinks);

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          filterLinks.forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector(".layout .filters a[href*=" + id + "]")
              ?.classList.add("active");
          });
        }
      });
    };
  });

  return (
    <div className="layout">
      <div className="filters">
        <a className="filter-buttons" href="#cloud">
          Cloud
        </a>
        <a className="filter-buttons" href="#authentication">
          Authentication
        </a>
        <a className="filter-buttons" href="#hosting">
          Hosting
        </a>
        <a className="filter-buttons" href="#api">
          API
        </a>
      </div>
      <div className="ambassador-padding">
        <h1 className="ambassador-heading">Backend, API, Tools...</h1>
        <p className="ambassador-description">
          Looking for a backend, api, tools for your next project? We've got you
          covered with a list of the best ones out there!
        </p>
      </div>
      <section id="cloud">
        <SectionSlot subheading="Cloud Platforms" dataSource={CloudData} />
      </section>
      <div className="divider"></div>
      <section id="authentication">
        <SectionSlot subheading="Authentication" dataSource={AuthData} />
      </section>
      <div className="divider"></div>
      <section id="hosting">
        <SectionSlot subheading="Hosting" dataSource={HostingData} />
      </section>
      <div className="divider"></div>
      <section id="api">
        <SectionSlot subheading="API & API Testing" dataSource={APIData} />
      </section>
    </div>
  );
}
