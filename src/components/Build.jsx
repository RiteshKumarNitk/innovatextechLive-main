import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Building upon the insights gained during the discovery phase, we meticulously craft a comprehensive roadmap for each product, outlining the journey towards successful delivery. Our roadmap entails intricate technical details aimed at ensuring project longevity.
        </p>
        <p>
          Each client is paired with a dedicated key account manager who serves as the primary point of contact, facilitating communication and shielding the development team from distractions. They adeptly manage client expectations and act as a bridge between client requirements and development efforts.
        </p>
        <p>
          Our account managers adhere to a strategic communication schedule, responding to client inquiries with deliberate timing to convey a sense of busyness and maintain project momentum. This approach minimizes unnecessary changes and fosters a sense of confidence in our clients.
        </p>
      </div>
      <Blockquote
        author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12"
      >
        InnovateX Technology Import consistently provided progress updates so promptly, we almost wondered if they were automated!
      </Blockquote>
    </Section>
  );
};

export default Build;
