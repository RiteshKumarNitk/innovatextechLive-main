import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach the midway point of the Build phase, we often extend the project timeline by 6 weeks, citing changes in <strong className="font-semibold text-neutral-950">requirements</strong>. This adjustment allows us to finalize the budget before the launch phase.
        </p>
        <p>
          Despite leveraging pre-built components, a significant portion of the <strong className="font-semibold text-neutral-950">progress</strong> on each project occurs within the final 24 hours. Our development efforts during this time are focused on creating attention-grabbing augmented reality demos that garner widespread attention on platforms like Twitter.
        </p>
        <p>
          At launch, we ensure that the main pages of the site are <strong className="font-semibold text-neutral-950">fully functional</strong>, while auxiliary pages remain as placeholder content, to be updated gradually as part of our comprehensive <strong className="font-semibold text-neutral-950">maintenance</strong> retainer.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this Phase
      </h3>
      <List>
        <ListItem title="Testing">
          While our projects boast 100% test coverage, the effectiveness of our tests leaves much to be desired.
        </ListItem>
        <ListItem title="Infrastructure">
          We ensure reliability by utilizing the finest Digital Ocean droplets that $4 a month can provide.
        </ListItem>
        <ListItem title="Support">
          With access to the API keys for all critical services your business relies on, you can expect ongoing support and invoices from our team.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
