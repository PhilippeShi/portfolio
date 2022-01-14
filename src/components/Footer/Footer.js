import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact"> <br /><br /><br />
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:philippe.shi@mail.mcgill.ca">philippe.shi@mail.mcgill.ca</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>linkedin</LinkTitle>
          <LinkItem href="https://www.linkedin.com/in/philippeshi/" target="_blank">linkedin.com/in/philippeshi</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Text / Call</LinkTitle>
          <LinkItem href="sms://+15145828869">514-582-8869</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>My slogan</Slogan> */}
        </CompanyContainer>
        {/* <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/PhilippeShi">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.linkedin.com/in/philippe-shi-a7a51920b/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.instagram.com/philippe.shi/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer> */}
      </SocialIconsContainer> <br /><br /><br />
      <a
      style={{ color:'rgba(255, 255, 255, 0.75)', display:'grid', textAlign: 'center' }}
      target="_blank" href="https://github.com/PhilippeShi/portfolio/">
      Website Source Code
      </a>
    </FooterWrapper>
  );
};

export default Footer;
