import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = (props) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={props.href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{props.label}</VisuallyHidden>
            {props.children}
        </chakra.button>
    );
};

export default function SmallWithSocial() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2022 kajiyai All RightsRreserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/_kajiyai'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'https://www.youtube.com/@kajiyai/featured'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'GitHub'} href={'https://github.com/kajiyai/manga-title-generator'}>
                        <FaGithub />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}