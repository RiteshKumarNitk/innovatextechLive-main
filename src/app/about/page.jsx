import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Driving Innovation in Technology Import">
        <p>
          At InnovateX Technology Import, we are committed to driving innovation in technology importation, placing our clients at the forefront of our endeavors.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Our journey began with a vision to revolutionize the technology import sector. We realized the potential to offer superior services at competitive rates, setting us apart from traditional approaches.
          </p>
          <p>
            At InnovateX, we foster a culture of collaboration and excellence. We value our team members as integral parts of our family, striving to create an environment where everyone can thrive and contribute their best.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Dedicated Team Members" />
          <StatListItem value="52" label="Satisfied Clients" />
          <StatListItem value="$25M" label="Revenue Generated" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
