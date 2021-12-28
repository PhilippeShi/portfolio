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
        I am a second-year Software Engineering student at McGill University with a strong background in full-stack development. 
        I am also a tech enthousiast that is always driven to learn new concepts and technologies to keep my tech stack up-to-date with the industry.
        
      </SectionText>
      {/* <Button onClick={() => window.location.href = 'https://google.com'}>Source Code</Button> */}
      
    </LeftSection>
  </Section>
);

export default Hero;