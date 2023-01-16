import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import { BiNetworkChart,BiCloud } from 'react-icons/bi'
import { RiComputerLine, RiToolsFill, RiReactjsFill } from 'react-icons/ri'
import { FaLanguage, FaDatabase } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
// https://react-icons.github.io/react-icons

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a wide range of technologies and tools that span throughout the full life cycle of software development.
      I also became familiar with machine learning through experiences gained in research labs, hackathons, and personal projects.
    </SectionText>
    <List>
      <ListItem>
        <RiReactjsFill size="3rem" />
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
          Vue.js,&nbsp; Next.js,&nbsp; and&nbsp; React
          SpringBoot, &nbsp;Flask,&nbsp; REST API &nbsp;and&nbsp; UML/Umple
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BiNetworkChart size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Scikit Learn,&nbsp; XGBoost,&nbsp; Keras &nbsp;and&nbsp; Colab&nbsp; 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaLanguage size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Python,&nbsp; Java,&nbsp; C,&nbsp; JavaScript, &nbsp; Bash,&nbsp; OCaml &nbsp;and&nbsp; ARM Assembly&nbsp; 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <RiToolsFill size="3rem" />
        <ListContainer>
          <ListTitle>Test Automation</ListTitle>
          <ListParagraph>
            BDD (Gherkin Scenarios),&nbsp; Unit Testing &nbsp;and&nbsp; API Testing (Postman)
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BiCloud size="3rem" />
        <ListContainer>
          <ListTitle>Cloud Services</ListTitle>
          <ListParagraph>
            AWS (EC2, RDS, S3 Amplify, IAM, Route53, ACM) &nbsp;and&nbsp; 
            Heroku&nbsp;

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
