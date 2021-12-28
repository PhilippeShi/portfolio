import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import { DiFirebase, DiReact } from 'react-icons/di';
import { BiNetworkChart } from 'react-icons/bi'
import { RiComputerLine, RiToolsFill } from 'react-icons/ri'
import { FaLanguage } from 'react-icons/fa'
// List of icons here: https://react-icons.github.io/react-icons

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a wide range of technologies, mostly from the 
      backend, and I have currently getting familiar with front-end development.
      I also have some experience with machine learning through projects on computer vision and 
      a research paper I wrote on bias mitigation in ML algorithms. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Vue.js, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostgreSQL, RESTful API, SpringBoot, UML/Umple
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BiNetworkChart size="3rem" />
        <ListContainer>
          <ListTitle>ML</ListTitle>
          <ListParagraph>
            Experience with <br />
            Keras and OpenCV
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaLanguage size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, Python, C, Bash, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <RiToolsFill size="3rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            JUnit, Mockito, Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <RiComputerLine size="3rem" />
        <ListContainer>
          <ListTitle>Environments</ListTitle>
          <ListParagraph>
            Experience with <br />
            Windows OS and Linux CLI
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
