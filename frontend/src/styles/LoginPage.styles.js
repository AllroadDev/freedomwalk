// LoginPage.styles.js
export const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "16px",
  gap: "16px",
  width: { base: "100%", md: "576px" },
  maxWidth: "100%",
  bg: "white",
  boxShadow: "md",
  borderRadius: "md",
  marginTop: { base: "90px", md: "80px" },
};

export const inputStyles = {
  boxSizing: "border-box",
  padding: "16px",
  width: "336px",
  height: "49px",
  borderRadius: "8px",
  fontFamily: "'Montserrat', sans-serif",
  fontStyle: "italic",
  fontWeight: "300",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#B9B9B9",
};

export const buttonStyles = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  gap: "10px",
  width: "336px",
  height: "49px",
  background: "#000359",
  border: "1.5px solid #000359",
  borderRadius: "8px",
  fontFamily: "'Montserrat', sans-serif",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#FFFEFB",
  _hover: {
    background: "#000359CC",
    border: "1.5px solid #000359CC",
  },
};

export const checkboxStyles = {
  "& .chakra-checkbox__control": {
    background: "#FFFEFB",
    border: "1.5px solid #000359",
    borderRadius: "8px",
  },
  "& .chakra-checkbox__control:hover": {
    background: "#000359CC",
    borderColor: "#000359CC",
  },
  "& .chakra-checkbox__control[data-checked]": {
    background: "#000359",
    borderColor: "#000359",
  },
};

export const dividerStyles = {
  width: "100%",
  height: "0px",
  border: "1.5px solid #000000",
};

export const orTextStyles = {
  fontFamily: "'Montserrat', sans-serif",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "20px",
  color: "#000000",
  textAlign: "center",
  padding: "10px 0",
};

export const googleButtonStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "13px 16px",
  gap: "8px",
  width: "336px",
  height: "49px",
  background: "#000359",
  borderRadius: "8px",
  color: "#FFFEFB",
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "17px",
  position: "relative",
  "&:hover": {
    background: "#000359CC",
  },
};

export const rectangleStyles = {
  position: "absolute",
  width: "100vw",
  minHeight: "100vh",
  left: "0px",
  top: "0px",
  background: "rgba(0, 3, 89, 0.8)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowY: "auto",
};

export const headingStyles = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "29px",
  textAlign: "center",
  color: "#000359",
  width: "308px",
  height: "28px",
};

export const textStyles = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  textAlign: "center",
  color: "#000359",
  width: "308px",
  height: "16px",
};
