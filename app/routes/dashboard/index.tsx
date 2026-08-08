import Hero from "~/dashboard/Hero";
import Features from "~/dashboard/Features";
import Search from "~/dashboard/Search";

export default function DashboardIndex() {
  return (
    <div>
      <Hero />
      <Features />
      <Search />
    </div>
  );
}