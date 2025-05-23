import { Suspense } from "react";

import { FadeIn } from "@/components/custom/fade-in";
import { DirectorySearch } from "@/components/directory-search";
import { Hero } from "@/components/hero";

import {
  EmptyFeaturedGrid,
  FeaturedGrid,
  ResourceCardGrid,
} from "../components/directory-card-grid";
import { NavSidebar } from "../components/nav";

const dummyProducts = [
  {
    id: "1",
    created_at: "2024-01-01T00:00:00Z",
    full_name: "John Doe",
    email: "john@example.com",
    twitter_handle: "@johndoe",
    product_website: "https://example-app.com",
    codename: "Example App",
    punchline: "The best example app ever built",
    description:
      "This is a comprehensive example application that demonstrates modern web development practices and user interface design patterns.",
    logo_src: "/logo1.png",
    user_id: "user1",
    tags: ["productivity", "web"],
    view_count: 150,
    approved: true,
    labels: ["featured"],
    categories: "productivity",
  },
  {
    id: "2",
    created_at: "2024-01-02T00:00:00Z",
    full_name: "Jane Smith",
    email: "jane@example.com",
    twitter_handle: "@janesmith",
    product_website: "https://design-tool.com",
    codename: "Design Tool Pro",
    punchline: "Professional design made simple",
    description:
      "A powerful design tool that helps creators build beautiful interfaces with ease and precision.",
    logo_src: "/logo2.png",
    user_id: "user2",
    tags: ["design", "graphics"],
    view_count: 89,
    approved: true,
    labels: ["new"],
    categories: "design",
  },
  {
    id: "3",
    created_at: "2024-01-03T00:00:00Z",
    full_name: "Bob Wilson",
    email: "bob@example.com",
    twitter_handle: "@bobwilson",
    product_website: "https://dev-utils.com",
    codename: "Dev Utils",
    punchline: "Essential tools for developers",
    description:
      "A collection of essential utilities and tools that every developer needs in their daily workflow.",
    logo_src: "/logo3.png",
    user_id: "user3",
    tags: ["development", "tools"],
    view_count: 234,
    approved: true,
    labels: ["popular"],
    categories: "development",
  },
];

const dummyFilters = {
  categories: ["productivity", "design", "development", "business", "social"],
  labels: ["featured", "new", "popular", "trending", "hot"],
  tags: [
    "productivity",
    "web",
    "design",
    "graphics",
    "development",
    "tools",
    "analytics",
    "business",
    "social",
    "community",
  ],
};

const FEATURED_IDS = ["1", "3", "5"];

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const params = await searchParams;

  let data = dummyProducts;
  if (params.search) {
    const searchTerm = params.search.toLowerCase();
    data = dummyProducts.filter(
      (product) =>
        product.codename.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  }

  let filters = dummyFilters;
  const filteredFeaturedData = data.filter((d: any) =>
    FEATURED_IDS.includes(d.id)
  );

  return (
    <>
      <NavSidebar
        categories={filters.categories}
        labels={filters.labels}
        tags={filters.tags}
      />

      <div className="max-w-full px-2 md:pl-4 md:pr-0 pt-2">
        <FadeIn>
          <ResourceCardGrid
            sortedData={data}
            filteredFeaturedData={filteredFeaturedData}
          >
            <div className="grid grid-cols-1  xl:grid-cols-6 lg:gap-16 pb-8 pt-8 relative">
              <div className="col-span-1 md:col-span-2 z-10">
                <Hero>
                  <DirectorySearch />
                </Hero>
              </div>

              <div className="col-span-1 md:col-span-4 mt-6 md:mt-0">
                {filteredFeaturedData.length >= 1 ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    <div className=" relative">
                      <FeaturedGrid featuredData={filteredFeaturedData} />
                    </div>
                  </Suspense>
                ) : (
                  <div className="relative">
                    <EmptyFeaturedGrid />
                  </div>
                )}
              </div>
            </div>
          </ResourceCardGrid>
        </FadeIn>
      </div>
    </>
  );
}

export default Page;
