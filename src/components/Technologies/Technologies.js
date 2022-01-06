import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import { BiNetworkChart } from 'react-icons/bi'
import { RiComputerLine, RiToolsFill, RiReactjsFill } from 'react-icons/ri'
import { FaLanguage, FaDatabase } from 'react-icons/fa'
// https://react-icons.github.io/react-icons

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a wide range of technologies, mostly from the 
      backend, and I am currently getting familiar with front-end development.
      I have also gained experience in machine learning through projects on computer vision and 
      a research paper I wrote on bias mitigation in ML algorithms.
    </SectionText>
    <List>
      <ListItem>
        <RiReactjsFill size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js, Vue.js, and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <FaDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            PostgreSQL, RESTful API, SpringBoot, and UML/Umple
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BiNetworkChart size="3rem" />
        <ListContainer>
          <ListTitle>ML</ListTitle>
          <ListParagraph>
            Keras and OpenCV
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaLanguage size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Java, Python, C, Bash, and JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <RiToolsFill size="3rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            JUnit, Mockito, and Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <RiComputerLine size="3rem" />
        <ListContainer>
          <ListTitle>Environments</ListTitle>
          <ListParagraph>
            Windows OS and Linux CLI
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
