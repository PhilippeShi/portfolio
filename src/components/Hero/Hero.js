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
        I am a third-year Software Engineering student at McGill University with a 
        background in full-stack development and machine learning. 
        I am passionate about building applications that can make a difference in people's lives.
      </SectionText>
      {/* <Button onClick={() => window.location.href = 'https://google.com'}>Source Code</Button> */}
      
    </LeftSection>
  </Section>
);

export default Hero;