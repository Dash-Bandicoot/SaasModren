import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Card from 'common/components/Card';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';

import InfoSectionWrapper from './info.style';
import ImageOne from 'common/assets/image/saasModern/dash-1.png';
import ImageTwo from 'common/assets/image/saasModern/dash-2.png';

const InfoSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  textAreaRow,
  infoSectionContent,
  howWorkContent
}) => {
  const imageSrc=`https:${infoSectionContent.image[0].fields.file.url}`
  const imageSrcTwo=`https:${infoSectionContent.image[1].fields.file.url}`

  return (
    <InfoSectionWrapper>
      <Container fullWidth noGutter className="info-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea} className="image_area">
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <NextImage src={imageSrc} alt="Info Image One"height={767} width={998}/>
              </Fade>
            </Card>
            <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade bottom>
                <NextImage src={imageSrcTwo} alt="Info Image Two" height={442} width={500}/>
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content={ infoSectionContent?.title||''}
            />
            <Text
              {...description}
              content={ infoSectionContent?.description||''}
            />
            <Box>
              <Link href="#">
                <a>
                  <Button {...button} title={howWorkContent?.title||''} />
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </InfoSectionWrapper>
  );
};

InfoSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
  textAreaRow: PropTypes.object,
};

InfoSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '50%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '50%', '50%', '55%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    mr: ['-250px', '-250px', '-200px', '-250px', '-400px'],
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  title: {
    fontSize: ['26px', '32px', '36px', '40px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '2',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
  },
};

export default InfoSection;
