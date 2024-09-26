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
import ArrowIcon from "./../assets/icons/arrow.svg";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  containerStyles,
  inputStyles,
  buttonStyles,
  checkboxStyles,
  orTextStyles,
  googleButtonStyles,
  rectangleStyles,
} from "./../styles/LoginPage.styles";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });

      console.log("Login successful", response.data);
      onLogin();
      // Можна зберегти токен у localStorage або cookies, якщо потрібно
      // localStorage.setItem('token', response.data.token);
    } catch (err) {
      console.error("Login failed", err);
      setError("Неправильний email або пароль.");
    }
  };

  return (
    <Flex
      sx={rectangleStyles}
      minH="100vh"
      align="center"
      justify="center"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box>
        <Box {...containerStyles}>
          <Flex
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            padding="2px"
            gap="10px"
            width="100%"
          >
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
            Увійдіть на сайт
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
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email або номер телефону"
                      required
                      borderColor="#000359"
                      sx={inputStyles}
                    />
                  </FormControl>

                  <FormControl id="password">
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Пароль"
                      required
                      borderColor="#000359"
                      sx={inputStyles}
                    />
                  </FormControl>

                  <Flex
                    justify="space-between"
                    alignItems="center"
                    width="100%"
                  >
                    <Link
                      color="#000000"
                      to="/forgot-password"
                      fontFamily="'Montserrat', sans-serif"
                      fontWeight="400"
                      fontSize="14px"
                      sx={{ lineHeight: "17px" }}
                    >
                      Забули пароль?
                    </Link>
                  </Flex>

                  {error && (
                    <Text color="red.500" textAlign="center">
                      {error}
                    </Text>
                  )}

                  <Button {...buttonStyles} type="submit">
                    Увійти
                  </Button>

                  <Flex alignItems="center">
                    <Checkbox
                      isChecked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      size="lg"
                      colorScheme="blue"
                      sx={checkboxStyles}
                    >
                      <Text
                        fontFamily="'Montserrat', sans-serif"
                        fontStyle="normal"
                        fontWeight="400"
                        fontSize="14px"
                        sx={{ lineHeight: "17px" }}
                        color="#000000"
                      >
                        Запам’ятати мене
                      </Text>
                    </Checkbox>
                  </Flex>
                </Stack>
              </form>
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
                <Divider flex="1" borderColor="black" width="336px" />
                <Text mx={2} {...orTextStyles}>
                  або за допомогою
                </Text>
                <Divider flex="1" borderColor="black" width="336px" />
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
        <Box
          mt={6}
          mb={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="0"
          width="100%"
        >
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            maxWidth="unset"
            height="auto"
          >
            <Text
              fontFamily="'Montserrat', sans-serif"
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              sx={{ lineHeight: "20px" }}
              color="#FFFFFF"
              whiteSpace="nowrap"
            >
              Ще немає аккаунту?
            </Text>
            <Link to="/register" display="flex">
              <Text
                fontFamily="'Montserrat', sans-serif"
                fontStyle="normal"
                fontWeight="500"
                fontSize="16px"
                sx={{ lineHeight: "20px" }}
                color="#FFFFFF"
                whiteSpace="nowrap"
              >
                Зареєструватися
              </Text>
            </Link>
            <Image
              src={ArrowIcon}
              alt="Arrow Icon"
              width="7.67px"
              height="13.31px"
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
