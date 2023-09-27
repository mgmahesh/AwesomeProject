import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

export const OrderCard = () => {
    return <Box alignItems="center">
        <Box maxW="80%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }}>
            <Box>
                {/* <AspectRatio w="60%" ratio={16 / 9} > */}
                    <Image height={89} width={200} source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" />
                {/* </AspectRatio> */}

            </Box>
            <Stack p="2" space={1}>
                <Stack space={1}>
                    <Heading size="sm" ml="-1">
                        Fried Chiness Rice
                    </Heading>
                    <Text fontSize="xs" _light={{
                        color: "muted.400"
                    }} _dark={{
                        color: "muted.400"
                    }} fontWeight="500" ml="-0.5" mt="-1">
                        Chiness Su’Cafe
                    </Text>
                </Stack>
                <Text fontWeight="400" bold fontSize={20}>$25
                </Text>


            </Stack>
        </Box>
    </Box>;
};
