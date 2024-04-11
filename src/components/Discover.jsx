import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At InnovateX Technology Import, we collaborate closely with our clients to understand their <strong className="font-semibold text-neutral-950">needs</strong> and goals, immersing ourselves in their daily operations to gain insights into their business processes.
        </p>
        <p>
          Our approach involves comprehensive research and analysis, where our team conducts in-depth investigations and assessments. From shadowing company directors to analyzing data, we leave no stone unturned in understanding our clients' businesses.
        </p>
        <p>
          Once our thorough audit is complete, we provide our clients with a detailed <strong className="font-semibold text-neutral-950">plan</strong> of action, accompanied by a transparent budget outline.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this Phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth Questionnaires</TagListItem>
        <TagListItem>Feasibility Studies</TagListItem>
        <TagListItem>Data Analysis</TagListItem>
        <TagListItem>Employee Surveys</TagListItem>
        <TagListItem>Proofs-of-Concept</TagListItem>
        <TagListItem>Forensic Audit</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
