import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our Values"
        title="Striking the Balance between Reliability and Innovation"
      >
        <p>
          At InnovateX Technology Import, we are committed to remaining at the forefront of emerging trends and technologies, while also recognizing the value of reliability and stability. We adhere to our core values to guide our decisions and actions.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Our partnership begins with meticulous attention to detail, ensuring your branding seamlessly integrates with our templates and color schemes.
          </GridListItem>
          <GridListItem title="Efficient">
            We take pride in our efficiency, consistently meeting deadlines by leveraging existing solutions and frameworks developed over the years.
          </GridListItem>
          <GridListItem title="Adaptable">
            Recognizing the unique needs of each business, we excel in adapting our solutions to accommodate specific requirements, even if it means retrofitting existing structures.
          </GridListItem>
          <GridListItem title="Honest">
            Transparency is key to our process, although we understand that most clients may not delve into the details.
          </GridListItem>
          <GridListItem title="Loyal">
            We prioritize long-term relationships with our clients, ensuring ongoing support and invoicing for years to come.
          </GridListItem>
          <GridListItem title="Innovative">
            Embracing the evolving technological landscape, we continuously explore new opportunities and stay updated with open-source projects to innovate our solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
