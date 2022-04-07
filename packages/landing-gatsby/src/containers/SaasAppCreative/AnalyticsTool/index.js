import React from 'react';
import Fade from 'react-reveal/Fade';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Section, { Grid, FigureGroup, Content } from './analytics.style';
import rightArrow from 'common/assets/image/saasAppCreative/icons/right-arrow.svg';

const AnalyticsTool = () => {
  const data = useStaticQuery(graphql`
    query {
      graph1: file(relativePath: { eq: "image/saasAppCreative/graph1.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 552
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      graph2: file(relativePath: { eq: "image/saasAppCreative/graph2.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 360
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <Section id="features">
      <Container width="1360px">
        <Grid>
          <FigureGroup>
            <Fade up>
              <GatsbyImage
                src={
                  (data.graph1 !== null) | undefined
                    ? data.graph1.childImageSharp.gatsbyImageData
                    : {}
                }
                alt="graph1"
              />
            </Fade>
            <div className="graph-2">
              <Fade up delay={200}>
                <GatsbyImage
                  src={
                    (data.graph2 !== null) | undefined
                      ? data.graph2.childImageSharp.gatsbyImageData
                      : {}
                  }
                  alt="graph2"
                />
              </Fade>
            </div>
          </FigureGroup>
          <Content>
            <Text className="subtitle" content="Audience Monitoring" />
            <Heading content="Advanced analytics tools to keep you in control &amp; customizable" />
            <Text
              className="description"
              content="Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Create professional ads, branded content, and stunning stories in minutes."
            />
            <Link href="#" className="explore">
              Explore details
              <img src={rightArrow} alt="right arrow icon" />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default AnalyticsTool;
