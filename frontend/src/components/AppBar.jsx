import React from "react";
import { Box, Flex, Button, Image } from "@chakra-ui/react";
import Logo from "./../assets/icons/logo.svg";
import Avatar from "./../assets/icons/user-avatar.svg";

import { Link } from "react-router-dom";

const AppBar = ({ isLoggedIn, onLogout }) => {
  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      backgroundColor="#FFFEFB"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      zIndex="1000"
    >
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        padding="13px 49px 14px"
        maxW="1280px"
        margin="0 auto"
      >
        <Flex direction="row" align="center" gap="32px">
          <Box width="118px" height="35px">
            <Image src={Logo} alt="Logo" />
          </Box>

          <Link to="/map" fontSize="14px" fontWeight="400" color="#000359">
            Мапа
          </Link>
          <Link to="/contacts" fontSize="14px" fontWeight="400" color="#000000">
            Контакти
          </Link>
          <Link to="/about" fontSize="14px" fontWeight="400" color="#000000">
            Про нас
          </Link>
        </Flex>

        {isLoggedIn ? (
          <>
            <Flex direction="row" align="center" gap="32px">
              <Button
                onClick={onLogout}
                borderRadius="8px"
                padding="9px"
                background="#FFFFFF"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={Avatar} alt="Avatar" />
              </Button>
            </Flex>
          </>
        ) : (
          <>
            <Flex direction="row" align="center" gap="32px">
              <Button
                as={Link}
                to="/login"
                variant="outline"
                borderColor="#000359"
                color="#000359"
                borderRadius="8px"
                padding="10px 16px"
              >
                Вхід
              </Button>
              <Button
                as={Link}
                to="/register"
                backgroundColor="#000359"
                color="white"
                borderRadius="8px"
                padding="10px 16px"
              >
                Реєстрація
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default AppBar;
