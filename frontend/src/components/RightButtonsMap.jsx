import React from "react";
import { useMap } from "react-leaflet";
import { Button, Flex, Image, Box } from "@chakra-ui/react";
import CurrentLocation from "./../assets/icons/current-location.svg";
import ZoomInIcon from "./../assets/icons/zoom-in.svg";
import ZoomOutIcon from "./../assets/icons/zoom-out.svg";
import CommentIcon from "./../assets/icons/comment.svg";
import NorthIcon from "./../assets/icons/north.svg";

const ZoomButtons = ({ isLoggedIn }) => {
  const map = useMap();

  const zoomIn = () => {
    map.zoomIn();
  };

  const zoomOut = () => {
    map.zoomOut();
  };

  const locateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        map.setView([latitude, longitude], 17);
      });
    } else {
      console.error("Геолокація не підтримується вашим браузером.");
    }
  };

  return (
    <Flex
      direction="column"
      position="absolute"
      top="80px"
      right="30px"
      gap="8px"
      width="35px"
      height="116px"
      zIndex="1000"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))"
    >
      <Box>
        <Button
          onClick={zoomIn}
          width="35px"
          height="36px"
          borderRadius="8px 8px 0px 0px"
          padding="8px"
          background="#FFFFFF"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={ZoomInIcon} alt="Zoom In Icon" />
        </Button>

        <Button
          onClick={zoomOut}
          width="35px"
          height="36px"
          borderRadius="0px 0px 8px 8px"
          padding="8px"
          background="#FFFFFF"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={ZoomOutIcon} alt="Zoom Out Icon" />
        </Button>
      </Box>

      {isLoggedIn ? (
        <>
          <Button
            onClick={locateUser}
            width="35px"
            height="36px"
            borderRadius="8px"
            padding="9px"
            background="#FFFFFF"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={CurrentLocation} alt="Current Location Icon" />
          </Button>
          <Button
            width="35px"
            height="36px"
            borderRadius="8px"
            padding="9px"
            background="#FFD200"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{ background: "#FEE500" }}
          >
            <Image src={CommentIcon} alt="Comment Icon" />
          </Button>
        </>
      ) : (
        <>
          <Button
            width="35px"
            height="36px"
            borderRadius="8px"
            padding="9px"
            background="#FFFFFF"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={NorthIcon} alt="North Icon" />
          </Button>
        </>
      )}
    </Flex>
  );
};

export default ZoomButtons;
