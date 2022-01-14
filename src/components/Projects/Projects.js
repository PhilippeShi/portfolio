import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// The projects are in src/constants/constants.js
// The images are in public/images

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((projects) => (
        <BlogCard key={projects.id} id="3">
          <Img src={projects.image} />
          <TitleContent>
            <HeaderThree title>{projects.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{projects.description}</CardInfo>
          <div>
            <br />
            {/* <TitleContent>Stack</TitleContent> */}
            <TagList>
              {projects.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            { projects.visit && <ExternalLinks target="_blank" href={projects.visit}>View Project</ExternalLinks> }
            { projects.source && <ExternalLinks target="_blank" href={projects.source}>Code Repository</ExternalLinks> }
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;