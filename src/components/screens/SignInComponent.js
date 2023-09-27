import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Checkbox, Spacer } from "native-base";

const SignIn = () => {
    return <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" >
            <Heading size="lg" fontWeight="600" mt="16" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Sign In
            </Heading>

            <VStack space={5} mt="16">
                <FormControl>
                    <FormControl.Label fontSize="md">Email Address</FormControl.Label>
                    <Input placeholder="Enter Value" />
                </FormControl>
                <FormControl>
                    <FormControl.Label fontSize="md">Password</FormControl.Label>
                    <Input type="password" placeholder="Enter Value"/>
                    <HStack mt="5" justifyContent="space-around" alignItems="baseline">
                        <Checkbox value="one" my={2}
                            _text={{
                                fontSize: "md",
                                fontWeight: "500",
                                color: "muted.400",
                            }}> Remember me</Checkbox>
                        <Link _text={{
                            fontSize: "md",
                            fontWeight: "500",
                            color: "muted.400",
                            paddingBottom: "2.5"
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link>
                    </HStack>
                </FormControl>
                <Button mt="2" colorScheme="orange">
                    Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="md" color="muted.400" _dark={{
                        color: "muted.300"
                    }}>
                        Don’t have an account? {" "}
                    </Text>
                    <Link _text={{
                        color: "muted.400",
                        fontWeight: "medium",
                        fontSize: "md"
                    }} href="#" >
                        Sign Up
                    </Link>
                </HStack>
            </VStack>
        </Box>
    </Center>;
};
export default SignIn;