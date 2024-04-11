import React from "react";
import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";

const ProcessPage = () => {
  return (  
    <>
      <PageIntro eyebrow="Our Process" title="Efficiency in Action">
        <p>
          At InnovateX Technology Import, we are dedicated to efficiency and maximizing resources to deliver unparalleled value to our clients. Our process is designed to leverage our expertise and experience, ensuring optimal outcomes for every project.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
