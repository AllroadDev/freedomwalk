import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";
import Cancel from "./../assets/icons/cancel.svg";
import GoogleIcon from "./../assets/icons/google.svg";
import LeftArrowIcon from "./../assets/icons/left-arrow.svg";
import { Link } from "react-router-dom";
import {
  containerStyles,
  inputStyles,
  buttonStyles,
  checkboxStyles,
  orTextStyles,
  googleButtonStyles,
  rectangleStyles,
} from "../styles/LoginPage.styles";

const ForgotPassPage = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request password reset for", { email, rememberMe });
  };

  return (
    <Flex sx={rectangleStyles} minH="100vh" align="center" justify="center">
      <Box>
        <Box {...containerStyles}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            padding="2px"
            gap="10px"
            width="100%"
            position="relative"
          >
            <Link to="/login">
              <Image src={LeftArrowIcon} alt="Left Arrow Icon" />
            </Link>

            <Link to="/">
              <Image src={Cancel} alt="Cancel Icon" />
            </Link>
          </Flex>

          <Heading
            as="h1"
            fontFamily="'Montserrat', sans-serif"
            fontWeight="500"
            fontSize="24px"
            color="#000359"
            textAlign="center"
            mt="4px"
          >
            Забули пароль?
          </Heading>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding="0"
              gap="32px"
              width="100%"
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={4} width="100%">
                  <FormControl id="email">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email або номер телефону"
                      required
                      borderColor="#000359"
                      sx={inputStyles}
                    />
                  </FormControl>

                  <Button {...buttonStyles} type="submit">
                    Відновити пароль
                  </Button>
                </Stack>
              </form>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding="0px"
                gap="8px"
                width="246px"
                height="67px"
              >
                <Text
                  fontFamily="'Montserrat', sans-serif"
                  fontStyle="normal"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="17px"
                  color="#000359"
                  width="219px"
                  height="17px"
                >
                  Не отримали повідомлення?
                </Text>

                <Text
                  fontFamily="'Montserrat', sans-serif"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="17px"
                  color="#B9B9B9"
                  width="246px"
                  height="17px"
                >
                  Отримати повторно через 60 сек.
                </Text>

                <Text
                  fontFamily="'Montserrat', sans-serif"
                  fontStyle="normal"
                  fontWeight="500"
                  fontSize="14px"
                  lineHeight="17px"
                  textDecoration="underline"
                  color="#000359"
                  width="187px"
                  height="17px"
                >
                  Змінити номер телефону
                </Text>
              </Box>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding="0"
              width="100%"
              maxWidth="336px"
              mt="16px"
              mb="16px"
            >
              <Flex alignItems="center" width="100%">
                <Divider flex="1" borderColor="black" />
                <Text mx={2} {...orTextStyles}>
                  або увійдіть за допомогою
                </Text>
                <Divider flex="1" borderColor="black" />
              </Flex>
              <Button
                sx={googleButtonStyles}
                variant="outline"
                colorScheme="blue"
                mt={4}
              >
                <Image src={GoogleIcon} alt="Google Icon" /> Google
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ForgotPassPage;
