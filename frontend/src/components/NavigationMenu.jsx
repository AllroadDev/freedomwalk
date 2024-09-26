import React, { useState } from "react";
import { Flex, Button, Image, Box, Text } from "@chakra-ui/react";
import WheelchairIcon from "./../assets/icons/wheelchair.svg";
import CrutchesIcon from "./../assets/icons/crutches.svg";
import StrollerIcon from "./../assets/icons/stroller.svg";
import HospitalIcon from "./../assets/icons/hospital.svg";
import RestaurantIcon from "./../assets/icons/restaurant.svg";
import PicnicIcon from "./../assets/icons/picnic-area.svg";
import TheaterIcon from "./../assets/icons/theater.svg";
import ShoppingCartIcon from "./../assets/icons/shopping-cart.svg";
import AtmIcon from "./../assets/icons/atm.svg";
import WcIcon from "./../assets/icons/wc.svg";

const NavigationMenu = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const iconStyle = (icon) => ({
    width: "28px",
    height: "28px",
    padding: "4px",
    borderRadius: "8px",
    background: selectedIcon === icon ? "#FFD200" : "transparent",
    cursor: "pointer",
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="16px"
      gap="16px"
      position="absolute"
      width="229px"
      height="auto"
      left="49px"
      top="125px"
      background="#FFFEFB"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      borderRadius="8px"
      zIndex="1000"
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        padding="0px"
        gap="8px"
        width="197px"
        height="auto"
      >
        <Text
          fontFamily="Montserrat"
          fontStyle="normal"
          fontWeight="300"
          fontSize="12px"
          lineHeight="15px"
          color="#B9B9B9"
          width="197px"
          height="15px"
        >
          Спосіб пересування
        </Text>

        <Flex
          flexDirection="row"
          alignItems="center"
          padding="0px"
          gap="24px"
          width="197px"
          height="28px"
        >
          <Box
            style={iconStyle("wheelchair")}
            onClick={() => handleIconClick("wheelchair")}
          >
            <Image
              src={WheelchairIcon}
              alt="Wheelchair Icon"
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            style={iconStyle("crutches")}
            onClick={() => handleIconClick("crutches")}
          >
            <Image
              src={CrutchesIcon}
              alt="Crutches Icon"
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            style={iconStyle("stroller")}
            onClick={() => handleIconClick("stroller")}
          >
            <Image
              src={StrollerIcon}
              alt="Stroller Icon"
              width="100%"
              height="100%"
            />
          </Box>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        padding="0px"
        gap="8px"
        width="197px"
        height="auto"
      >
        <Text
          fontFamily="Montserrat"
          fontStyle="normal"
          fontWeight="300"
          fontSize="12px"
          lineHeight="15px"
          color="#B9B9B9"
          width="197px"
          height="15px"
        >
          Локації
        </Text>
        <Flex
          flexDirection="row"
          alignItems="center"
          padding="0px"
          gap="10px"
          width="197px"
          height="auto"
          flexWrap="wrap"
        >
          <Box
            style={iconStyle("hospital")}
            onClick={() => handleIconClick("hospital")}
          >
            <Image
              src={HospitalIcon}
              alt="Hospital Icon"
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            style={iconStyle("restaurant")}
            onClick={() => handleIconClick("restaurant")}
          >
            <Image
              src={RestaurantIcon}
              alt="Restaurant Icon"
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            style={iconStyle("picnic")}
            onClick={() => handleIconClick("picnic")}
          >
            <Image
              src={PicnicIcon}
              alt="Picnic Area Icon"
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            style={iconStyle("theater")}
            onClick={() => handleIconClick("theater")}
          >
            <Image
              src={TheaterIcon}
              alt="Theater Icon"
              width="100%"
              height="100%"
            />
          </Box>

          <Box
            style={iconStyle("shoppingCart")}
            onClick={() => handleIconClick("shoppingCart")}
          >
            <Image
              src={ShoppingCartIcon}
              alt="Shopping Cart Icon"
              width="100%"
              height="100%"
            />
          </Box>

          <Box style={iconStyle("atm")} onClick={() => handleIconClick("atm")}>
            <Image src={AtmIcon} alt="ATM Icon" width="100%" height="100%" />
          </Box>
          <Box style={iconStyle("wc")} onClick={() => handleIconClick("wc")}>
            <Image src={WcIcon} alt="WC Icon" width="100%" height="100%" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavigationMenu;
