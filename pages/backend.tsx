import { backend_data } from "@/data/dataSource/backend";
import { useEffect } from "react";
import Structure from "@/components/structure";
import Filters from "@/components/filters";

export default function Backend() {
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let filterLinks = document.querySelectorAll(".layout .filters a");
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
      <Filters filter_names={["Cloud", "Authentication", "Hosting", "API"]} />

      <Structure
        heading="Backend, API, Tools..."
        description="Looking for a backend, api, tools for your next project? We've got you
          covered with a list of the best ones out there!"
        layout={backend_data}
      />
    </div>
  );
}
