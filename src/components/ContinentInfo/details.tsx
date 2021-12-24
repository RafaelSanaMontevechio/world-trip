import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';

import { RiInformationLine } from 'react-icons/ri';

const details = [
  {
    id: 1,
    value: '50',
    description: 'países',
    popover: false,
    popoverContent: '',
  },
  {
    id: 2,
    value: '60',
    description: 'Línguas',
    popover: false,
    popoverContent: '',
  },
  {
    id: 3,
    value: '27',
    description: 'cidades +100',
    popover: true,
    popoverContent: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque euismod, ipsum eu porttitor consectetur, nisl
      nisi euismod nunc, eget porttitor nisl nisi euismod nunc.
    `,
  },
];

const Details = () => {
  return (
    <Flex align="center" justifyContent="space-between">
      {details.map((detail) => (
        <Flex
          key={detail.id}
          direction="column"
          justifyContent="center"
          align={['flex-start', 'flex-start', 'center']}
        >
          <Heading
            fontSize={['2xl', '5xl']}
            color="yellow.400"
            fontWeight="600"
          >
            {detail.value}
          </Heading>
          <Text fontSize={['md', 'xl']} color="gray.700" fontWeight="600">
            {detail.description}
            {detail.popover && (
              <Popover>
                <PopoverTrigger>
                  <span>
                    <Icon
                      cursor="pointer"
                      as={RiInformationLine}
                      ml="1"
                      color="gray.400"
                      w={['10px', '16px']}
                      h={['10px', '16px']}
                    />
                  </span>
                </PopoverTrigger>
                <PopoverContent zIndex={4} bg="gray.700" color="yellow.400">
                  <PopoverArrow bg="gray.700" />
                  <PopoverCloseButton />
                  <PopoverBody fontWeight="400" fontSize="lg">
                    {detail.popoverContent}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Details;
