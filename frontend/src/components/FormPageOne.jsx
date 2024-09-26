import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Stack,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import Cancel from "./../assets/icons/cancel.svg";
import LeftArrowIcon from "./../assets/icons/left-arrow.svg";
import { Link, useNavigate } from "react-router-dom";

import {
  containerStyles,
  buttonStyles,
  checkboxStyles,
  rectangleStyles,
  headingStyles,
  textStyles,
} from "../styles/LoginPage.styles";

const SurveyPage = ({ onLogin }) => {
  const questions = [
    "Яка ваша основна мета використання застосунку?",
    "Якщо ви користуєтесь допоміжними засобами пересування, вкажіть яким:",
    "Наскільки важливо для вас уникати шумних вулиць?",
    "Чи важливо для вас уникати підйомів під час пересування?",
    "Який рівень доступності маршруту вам підходить?",
    "Чи потрібно вам враховувати наявність орієнтирів на маршруті?",
  ];

  const options = [
    [
      "Вибір оптимальних маршрутів",
      "Уникнення перешкод",
      "Пошук безпечних шляхів",
    ],
    [
      "Крісло колісне",
      "Крісло колісне з електромотором",
      "Милиці",
      "Не користуюсь",
    ],
    ["Дуже важливо", "Важливо", "Не має значення"],
    ["Так", "Ні", "В залежності від ситуації"],
    [
      "Безбар’єрний (найменше перешкод, оптимальні умови для пересування)",
      "Стандартний (допустимі незначні перешкоди)",
      "Мінімальний (готовий до більш складних умов)",
    ],
    ["Так, важливо", "Ні, не потрібно"],
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill([])
  );

  const navigate = useNavigate();

  const handleOptionChange = (questionIndex, index) => {
    setSelectedOptions((prev) => {
      const updated = [...prev];
      const selectedForQuestion = updated[questionIndex] || [];

      if (selectedForQuestion.includes(index)) {
        updated[questionIndex] = selectedForQuestion.filter((i) => i !== index);
      } else {
        updated[questionIndex] = [...selectedForQuestion, index];
      }

      return updated;
    });
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 2) {
      setQuestionIndex((prev) => prev + 2);
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 2);
    }
  };

  const handleFinish = () => {
    const selectedTexts = selectedOptions.map((selected, index) =>
      selected.map((optIndex) => options[index][optIndex])
    );
    console.log("Обрані варіанти:", selectedTexts);

    navigate("/map");
    onLogin();
  };

  const progressPercentage = ((questionIndex + 2) / questions.length) * 100;

  return (
    <Flex sx={rectangleStyles} minH="100vh" align="center" justify="center">
      <Box>
        <Box {...containerStyles}>
          <Flex
            justifyContent={questionIndex > 0 ? "space-between" : "flex-end"}
            alignItems="center"
            padding="2px"
            gap="10px"
            width="100%"
            position="relative"
          >
            {questionIndex > 0 && (
              <Image
                src={LeftArrowIcon}
                alt="Left Arrow Icon"
                onClick={handlePrevious}
                cursor="pointer"
              />
            )}
            <Link to="/">
              <Image src={Cancel} alt="Cancel Icon" />
            </Link>
          </Flex>

          <Heading as="h1" sx={headingStyles}>
            Дякуємо за реєстрацію!
          </Heading>
          <Text sx={textStyles}>Допоможіть проєкту заповнивши форму</Text>

          <Box mt="32px">
            <Flex align="center" mb="16px">
              <Text
                fontFamily="'Montserrat', sans-serif"
                fontWeight="500"
                fontSize="16px"
                color="#000359"
                flex="1"
                textAlign="left"
              >
                {questions[questionIndex]}
              </Text>
            </Flex>

            <Stack mt="16px" spacing={4}>
              {options[questionIndex].map((option, index) => (
                <Checkbox
                  key={index}
                  isChecked={selectedOptions[questionIndex]?.includes(index)}
                  onChange={() => handleOptionChange(questionIndex, index)}
                  size="lg"
                  sx={checkboxStyles}
                >
                  <Text
                    fontFamily="'Montserrat', sans-serif"
                    fontWeight="400"
                    fontSize="14px"
                    color="#000000"
                  >
                    {option}
                  </Text>
                </Checkbox>
              ))}
            </Stack>

            {questions[questionIndex + 1] && (
              <>
                <Flex align="center" mb="16px" mt="24px">
                  <Text
                    fontFamily="'Montserrat', sans-serif"
                    fontWeight="500"
                    fontSize="16px"
                    color="#000359"
                    flex="1"
                    textAlign="left"
                  >
                    {questions[questionIndex + 1]}
                  </Text>
                </Flex>

                <Stack mt="16px" spacing={4}>
                  {options[questionIndex + 1]?.map((option, index) => (
                    <Checkbox
                      key={index}
                      isChecked={selectedOptions[questionIndex + 1]?.includes(
                        index
                      )}
                      onChange={() =>
                        handleOptionChange(questionIndex + 1, index)
                      }
                      size="lg"
                      sx={checkboxStyles}
                    >
                      <Text
                        fontFamily="'Montserrat', sans-serif"
                        fontWeight="400"
                        fontSize="14px"
                        color="#000000"
                      >
                        {option}
                      </Text>
                    </Checkbox>
                  ))}
                </Stack>
              </>
            )}

            <Flex justify="center" mt="24px">
              {questionIndex >= questions.length - 2 ? (
                <Button {...buttonStyles} onClick={handleFinish}>
                  Завершити
                </Button>
              ) : (
                <Button
                  {...buttonStyles}
                  onClick={handleNext}
                  isDisabled={
                    selectedOptions[questionIndex]?.length === 0 ||
                    selectedOptions[questionIndex + 1]?.length === 0
                  }
                >
                  Далі
                </Button>
              )}
            </Flex>
          </Box>
        </Box>

        <Flex justify="center" mt="16px" mb={8}>
          <Box
            position="relative"
            width="542px"
            height="10px"
            background="#B9B9B9"
            borderRadius="16px"
          >
            <Box
              position="absolute"
              width={`${(progressPercentage / 100) * 542}px`}
              height="10px"
              background="linear-gradient(90deg, #FFD200 0%, #A0E5F1 100%)"
              borderRadius="16px"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SurveyPage;
