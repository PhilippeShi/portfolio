import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Philippe. <br/>
        Welcome to my Portfolio.
      </SectionTitle>
      <SectionText>
        I am a second-year Software Engineering student at McGill University. 
        plz give me job. thnks
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
      <Button onClick={() => window.location = ''}>Download My CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;