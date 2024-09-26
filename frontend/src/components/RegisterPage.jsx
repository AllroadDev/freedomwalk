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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cancel from "./../assets/icons/cancel.svg";
import GoogleIcon from "./../assets/icons/google.svg";
import ArrowIcon from "./../assets/icons/arrow.svg";
import { Link } from "react-router-dom";

import {
  containerStyles,
  inputStyles,
  buttonStyles,
  checkboxStyles,
  orTextStyles,
  googleButtonStyles,
  rectangleStyles,
} from "./../styles/LoginPage.styles";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [error, setError] = useState("");
  const [checkboxError, setCheckboxError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setCheckboxError(false);

    if (password !== repeatPassword) {
      setError("Паролі не співпадають.");
      return;
    }

    if (!termsOfUse) {
      setCheckboxError(true);
      return;
    }

    try {
      const response = await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      console.log("Registration successful:", response.data);

      navigate("/account-confirmation");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );

      setError(
        error.response?.data?.message ||
          "Реєстрація не вдалася. Спробуйте ще раз."
      );
      navigate("/account-confirmation");
    }
  };

  return (
    <Flex sx={rectangleStyles} minH="100vh" align="center" justify="center">
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
            Реєстрація
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
                  <FormControl id="name">
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ім'я"
                      required
                      borderColor="#000359"
                      sx={inputStyles}
                    />
                  </FormControl>
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

                  <FormControl id="repeatPassword">
                    <Input
                      type="password"
                      value={repeatPassword}
                      onChange={(e) => {
                        setRepeatPassword(e.target.value);
                        setError("");
                      }}
                      placeholder="Повторіть пароль"
                      required
                      borderColor="#000359"
                      sx={inputStyles}
                    />
                  </FormControl>

                  {error && (
                    <Text color="red.500" textAlign="center">
                      {error}
                    </Text>
                  )}

                  {checkboxError && (
                    <Text color="red.500" textAlign="center">
                      Будь ласка, погодьтесь з умовами використання.
                    </Text>
                  )}

                  <Flex alignItems="center">
                    <Checkbox
                      isChecked={termsOfUse}
                      onChange={(e) => setTermsOfUse(e.target.checked)}
                      size="lg"
                      colorScheme="blue"
                      sx={checkboxStyles}
                      borderColor={checkboxError ? "red.500" : undefined}
                    >
                      <Text
                        fontFamily="'Montserrat', sans-serif"
                        fontStyle="normal"
                        fontWeight="400"
                        fontSize="14px"
                        sx={{ lineHeight: "17px" }}
                        color="#000000"
                      >
                        Я згоден з умовами використання
                      </Text>
                    </Checkbox>
                  </Flex>

                  <Button {...buttonStyles} type="submit">
                    Продовжити
                  </Button>
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
                  або увійдіть за допомогою
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
              Вже є аккаунт?
            </Text>
            <Link to="/login" display="flex">
              <Text
                fontFamily="'Montserrat', sans-serif"
                fontStyle="normal"
                fontWeight="500"
                fontSize="16px"
                sx={{ lineHeight: "20px" }}
                color="#FFFFFF"
                whiteSpace="nowrap"
              >
                Увійти
              </Text>
            </Link>
            <Image
              src={ArrowIcon}
              alt="Arrow Icon"
              width="12px"
              height="12px"
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default RegisterPage;
