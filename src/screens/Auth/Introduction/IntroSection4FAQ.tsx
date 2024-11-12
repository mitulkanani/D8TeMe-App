
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  AddIcon,
  RemoveIcon,
  Heading,
  VStack,
  ChevronUpIcon,
  HStack,
} from '@gluestack-ui/themed';
// import { FAQ } from '../../../helper/constants';
//  import { fontFamily } from '../../../helper/constants';
//  import { FAQData } from '../../../helper/interface';
import { Text } from '@gluestack-ui/themed';
import { Linking } from 'react-native';
import Config from 'react-native-config';
import { fontFamily } from '../../../utils/constants/Constants';
import { ArrowDownIcon } from '@gluestack-ui/themed';
import { ChevronDownIcon } from '@gluestack-ui/themed';

const FAQ = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  },

];

export const IntroSection4FAQ = () => {
  return (
    <VStack my={40} space={'md'} px={12}>
      <Heading
        fontSize={22}
        fontFamily={fontFamily.Poppins}
        letterSpacing={1.5}
        color="$black"
        $dark-color="$white"
        fontWeight={'$semibold'}
        textAlign={'center'}>
        Frequently Asked Questions
      </Heading>

      <Accordion
        w={'100%'}
        size="md"
        type="multiple"
        variant="unfilled"
        isCollapsible={true}
        borderWidth={1}
        borderColor="$coolGray200"
        borderRadius={7}
      >
        {FAQ.map((faqItem, index) => (
          <AccordionItem
            value={`value-${index}`}
            key={index}
            borderBottomWidth={1}
            p={0}
            sx={{
              borderColor: '$coolGray200',
            }}>
            <AccordionHeader>
              <AccordionTrigger>
                {({ isExpanded }) => {
                  return (
                    <>
                      <AccordionTitleText
                        style={{
                          //    textTransform: 'uppercase',
                          fontWeight: 'medium',
                          fontFamily: fontFamily.Poppins,
                        }}>
                        {faqItem.title}
                      </AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={ChevronUpIcon} ml="$3" />
                      ) : (
                        <AccordionIcon as={ChevronDownIcon} ml="$3" />
                      )}
                    </>
                  );
                }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent>
              <AccordionContentText style={{
                fontFamily: fontFamily.Poppins,
              }}>{faqItem.description}</AccordionContentText>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
};
