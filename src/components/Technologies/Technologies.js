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
      I have worked with a wide range of technologies, mostly for the 
      back-end, and I am currently getting familiar with front-end development.
      I have also gained experience in machine learning through projects in computer vision.
    </SectionText>
    <List>
      <ListItem>
        <RiReactjsFill size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Vue.js,&nbsp; Next.js,&nbsp; and&nbsp; React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <FaDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          SpringBoot, &nbsp;Flask, &nbsp;PostgreSQL,&nbsp; RESTful API, &nbsp;and&nbsp; UML/Umple
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BiNetworkChart size="3rem" />
        <ListContainer>
          <ListTitle>ML</ListTitle>
          <ListParagraph>
            Keras,&nbsp; scikit-learn,&nbsp; Mediapipe, &nbsp;and&nbsp; OpenCV&nbsp; 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaLanguage size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            <u>In order of proficiency:</u> <br />
            Python,&nbsp; Java,&nbsp; C,&nbsp; Bash,&nbsp; OCaml,&nbsp; ARM Assembly,&nbsp; and &nbsp;JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <RiToolsFill size="3rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Gherkin (Cucumber),&nbsp; JUnit,&nbsp; Mockito,&nbsp; and&nbsp; Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <RiComputerLine size="3rem" />
        <ListContainer>
          <ListTitle>Environments</ListTitle>
          <ListParagraph>
            Windows OS&nbsp; and&nbsp; Unix/Linux CLI
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
