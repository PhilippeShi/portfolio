import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Philippe Shi. <br/>
        Welcome to my Portfolio.
      </SectionTitle>
      <SectionText>
        I am a second-year Software Engineering student at McGill University with a 
        background in full-stack development and machine learning. 
        I am also a tech enthousiast that is always driven to learn new concepts 
        and technologies in attempt to keep up with the trends from the industry.
        I can also fluently communicate in French.
      </SectionText>
      {/* <Button onClick={() => window.location.href = 'https://google.com'}>Source Code</Button> */}
      
    </LeftSection>
  </Section>
);

export default Hero;