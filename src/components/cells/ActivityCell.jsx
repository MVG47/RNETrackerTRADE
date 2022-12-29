import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Avatar,
  IconButton,
  Spacer,
  Text,
  Badge,
  Box,
  Heading,
  HStack,
  VStack,
} from "native-base";
import React from "react";

let size = "lg";


const ActivityCell = () => {
  
  const navigation = useNavigation()

  
  return (
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
          <HStack p="5px" space={[2, 3]} justifyContent="space-between">
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
              <IconButton onPress={()=>navigation.navigate("Play")}
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
  );
};

export default ActivityCell;
