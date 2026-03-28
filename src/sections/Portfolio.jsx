import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import { useGitHub } from "../hooks/useGitHub";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { data, loading } = useGitHub("nicoryy");

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionTitle>projects</SectionTitle>
        <PortfolioGrid
          data={data}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default Portfolio;
