// import Landing from "@/components/Landing";
import dynamic from "next/dynamic";

const ComponentWithNoSSR = dynamic(() => import("@/components/Landing"), {
  ssr: false,
});

// export default () => <ComponentWithNoSSR />;

export default function LandingPage() {
  return <ComponentWithNoSSR />;
}
