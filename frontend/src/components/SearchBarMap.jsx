import React, { useState } from "react";
import { Button, Flex, Input, Image } from "@chakra-ui/react";
import SearchIcon from "./../assets/icons/search.svg";
import RouteIcon from "./../assets/icons/route.svg";
import YellowArrowIcon from "./../assets/icons/yellow-arrow.svg";

const SearchBar = () => {
  const [isRouteInputVisible, setIsRouteInputVisible] = useState(false);

  const toggleRouteInputs = () => {
    setIsRouteInputVisible(!isRouteInputVisible);
  };

  return (
    <Flex
      display="flex"
      flexDirection="row"
      alignItems="center"
      padding="0px"
      position="absolute"
      width="auto"
      height="fit-content"
      left="48px"
      top="80px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))"
      zIndex="1000"
    >
      <Input
        placeholder="Пошук..."
        size="md"
        borderRadius="8px 0 0 8px"
        variant="filled"
        backgroundColor="#FFFFFF"
        _placeholder={{
          color: "#B9B9B9",
          fontWeight: "300",
          fontStyle: "italic",
        }}
        border="1.5px solid #000359"
        focusBorderColor="#000359"
        boxShadow="none"
        height="37px"
        width="193px"
        _focus={{
          backgroundColor: "#FFFFFF",
          borderColor: "#000359",
          boxShadow: "none",
        }}
      />

      <Button
        borderRadius="0 8px 8px 0"
        padding="0 12px"
        backgroundColor="#000359"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="37px"
        marginRight="8px"
        _hover={{
          backgroundColor: "#000359CC",
        }}
      >
        <Image src={SearchIcon} alt="Search Icon" boxSize="20px" />
      </Button>

      <Button
        borderRadius={isRouteInputVisible ? "8px 0 0 8px" : "8px"}
        padding="0 12px"
        backgroundColor="#000359"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="37px"
        marginRight={isRouteInputVisible ? "0" : "8px"}
        _hover={{
          backgroundColor: "#000359CC",
        }}
        onClick={toggleRouteInputs}
      >
        <Image src={RouteIcon} alt="Route Icon" boxSize="20px" />
      </Button>

      {isRouteInputVisible && (
        <Flex
          alignItems="center"
          backgroundColor="#FFFEFB"
          border="1.5px solid #000359"
          borderRadius="0 8px 8px 0"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
          height="37px"
        >
          <Input
            placeholder="Початкова точка"
            size="md"
            border="none"
            backgroundColor="#FFFEFB"
            _focus={{
              boxShadow: "none",
            }}
            height="100%"
            width="156px"
          />

          <Image src={YellowArrowIcon} alt="Arrow Icon" boxSize="20px" />

          <Input
            placeholder="Кінцева точка"
            size="md"
            border="none"
            backgroundColor="#FFFEFB"
            _focus={{
              boxShadow: "none",
            }}
            height="100%"
            width="156px"
          />
        </Flex>
      )}
    </Flex>
  );
};

export default SearchBar;
