import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  IconButton,
  Icon,
  Button,
  VStack,
  Text,
  Box,
  Center,
  Heading,
  Input,
  FormControl,
  Link,
  HStack,
  Spinner,
  Avatar,
  Badge,
  CheckIcon,
  AddIcon,
} from "native-base";
import ActivityCell from "../../components/cells/ActivityCell";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import LottieComponent from "../../components/lottie";
let size = "lg";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  },
];

export default function TrackerScreen() {
  const [history, setHistory] = useState();
  const [task, setTask] = useState();
  const navigation = useNavigation();

  return (
    <Box flex="1" bg="#fafaff">
      <SafeAreaView>
        <Center flex="1">
          <Box p={"2"} py="8" w="90%" maxW={"500"}>
            <VStack space={5}>
              <HStack alignItems="center" justifyContent={"space-between"}>
                <Text fontFamily="Manrope-ExtraBold" fontSize="4xl">
                  Task
                </Text>
                <IconButton
                  variant={"filled"}
                  size={size}
                  _icon={{
                    as: AntDesign,
                    color: "black",
                    name: "ellipsis1",
                  }}
                />
              </HStack>
              {task ? (
                <Box rounded={"lg"} p="5" h="100" w="100%" color="black">
                  <HStack
                    w="100%"
                    alignItems="center"
                    justifyContent={"space-between"}
                  >
                    <VStack space={3}>
                      <Text
                        color="white"
                        fontSize={"xl"}
                        fontFamily="Manrope-ExtraBold"
                      >
                        44:55:22
                      </Text>
                      <HStack alignItems="center" space={2}>
                        <Spinner color="white" />
                        <Text
                          color="white"
                          fontFamily="Manrope-Light"
                          fontSize={"sm"}
                        >
                          ranison project
                        </Text>
                      </HStack>
                    </VStack>
                    <Box>
                      <IconButton
                        variant={"filled"}
                        size={size}
                        _icon={{
                          color: "white",
                          as: Entypo,
                          name: "chevron-right",
                        }}
                      />
                    </Box>
                  </HStack>
                </Box>
              ) : (
                <Box
                  rounded={"lg"}
                  p="5"
                  justifyContent="center"
                  alignItems="center"
                  h="100"
                  w="100%"
                  color="white"
                >
                  <VStack space={2} alignItems="center">
                    <Text fontFamily="Manrope-ExtraBold">Uh Oh...</Text>
                    <Text sub fontFamily="Manrope-Bold" color="#999999">
                      You dont have any trackers running
                    </Text>
                    <AddIcon />
                  </VStack>
                </Box>
              )}
              <HStack
                w="100%"
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Text fontSize="4xl" fontFamily="Manrope-ExtraBold">
                  Today
                </Text>

                <Text fontSize="md" fontFamily="Manrope-Bold">
                  See all
                </Text>
              </HStack>
              {history ? (
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <Box
                      mb="5"
                      rounded="xl"
                      bg="white"
                      pl={["0", "4"]}
                      pr={["0", "5"]}
                      py="2"
                    >
                      <HStack
                        p="5px"
                        space={[2, 3]}
                        justifyContent="space-between"
                      >
                        <HStack space={5}>
                          <Avatar
                            size="48px"
                            source={{
                              uri: item.avatarUrl,
                            }}
                          />
                          <VStack space={3}>
                            <Text
                              _dark={{
                                color: "warmGray.50",
                              }}
                              color="coolGray.800"
                              bold
                            >
                              {item.fullName}
                            </Text>

                            <HStack space={2}>
                              <Badge colorScheme="danger">Work</Badge>
                              <Badge>Raison project</Badge>
                            </HStack>
                          </VStack>
                        </HStack>

                        <VStack>
                          <Text
                            fontSize="xs"
                            _dark={{
                              color: "warmGray.50",
                            }}
                            color="coolGray.800"
                            alignSelf="flex-start"
                          >
                            {item.timeStamp}
                          </Text>
                          <IconButton
                            variant={"filled"}
                            onPress={() =>
                              navigation.navigate("Play", {
                                tracker: item,
                              })
                            }
                            size={size}
                            _icon={{
                              as: FontAwesome,
                              name: "play",
                              color: "#999999",
                            }}
                          />
                        </VStack>
                      </HStack>
                    </Box>
                  )}
                  keyExtractor={(item) => item.id}
                />
              ) : (
                <VStack
                  justifyContent="center"
                  alignItems="center"
                  space={5}
                  flex="1"
                >
                  {/* <LottieComponent /> */}
                  <Text fontSize="2xl" fontFamily="Manrope-Light">
                    Bzzzzzzz...
                  </Text>
                  <Text fontFamily="Manrope-ExtraBold">No activity found</Text>
                  <Text underline sub color="#999999">
                    Chose another timeframe
                  </Text>
                </VStack>
              )}
            </VStack>
          </Box>
        </Center>
      </SafeAreaView>
      <Box
        alignItems="center"
        justifyContent="center"
        position="absolute"
        bottom="0px"
        borderTopRadius={"30px"}
        h="90"
        w="100%"
        bg="white"
      >
        <HStack w="100%" justifyContent={"space-evenly"}>
          <IconButton
            size={size}
            _icon={{
              as: AntDesign,
              color: "black",
              name: "clockcircle",
            }}
          />
          <IconButton
            size={size}
            _icon={{
              as: AntDesign,
              color: "#999999",
              name: "plus",
              size: "2xl",
            }}
          />
          <IconButton
            size={size}
            _icon={{
              as: Entypo,
              color: "#999999",
              name: "pie-chart",
            }}
          />
        </HStack>
      </Box>
    </Box>
  );
}
