import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Empowering Your Business with Innovative Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At InnovateX Technology Import, we are dedicated to helping you identify, explore, and respond to new opportunities, leveraging innovative solutions to drive your business forward.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web Development">
              InnovateX specializes in creating visually stunning, high-quality websites tailored to your business needs, ensuring a captivating online presence.
            </ListItem>
            <ListItem title="Application Development">
              Our team of skilled developers excels in building cutting-edge applications using the latest frameworks, ensuring seamless user experiences and optimal performance.
            </ListItem>
            <ListItem title="E-commerce Solutions">
              Stay ahead in the digital marketplace with our modern e-commerce solutions, customized to enhance your brand and drive sales, utilizing advanced platforms and personalized design.
            </ListItem>
            <ListItem title="Custom Content Management">
              Enhance your operational efficiency with our robust and tailored content management systems, providing you with a flexible and scalable solution to manage your digital content effectively.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
