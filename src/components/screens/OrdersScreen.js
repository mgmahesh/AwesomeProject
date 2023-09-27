import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, Card, Flex, Spacer, IconButton, Icon, StatusBar } from "native-base";
import { OrderCard } from '../common/card';
import { View, Dimensions } from 'react-native';
import { Path, G } from "react-native-svg";


const Orders = () => {

    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;

    return (
        <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap' }}>
            <View>
                <Image size='lg' width={screenWidth} height={screenHeight / 2} resizeMode="cover" source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                }} alt={"Alternate Text "} />
                <View style={{ position: 'absolute', top: 0, left: -20 }}>

                    <HStack  py="10" justifyContent="space-around" alignItems="center" w="100%">
                        <HStack>
                            <Icon size="3xl" viewBox="0 0 20 20" >
                                <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                                    <Path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10" fill="#ABABAB" />
                                </G>
                            </Icon>
                        </HStack>
                        <HStack>
                            <Icon size="3xl" viewBox="0 0 20 20" >
                                <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                                    <Path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z" fill="#ABABAB" />
                                </G>
                            </Icon>
                            <Icon size="3xl" viewBox="0 0 20 20" >
                                <G fillRule="nonzero" stroke="none" strokeWidth={1} fill="none">
                                    <Path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61" fill="#ABABAB" />
                                </G>
                            </Icon>
                        </HStack>

                    </HStack>
                    <HStack py="1/2">
                  <Heading marginLeft={10} color="light.100" fontSize="3xl">La Vida Cousines</Heading> 
                    </HStack>
                </View>

            </View>

            <HStack justifyContent="space-between" mt='5'>
                <OrderCard></OrderCard>
                <OrderCard></OrderCard>
            </HStack>

        </View>
    )
}

export default Orders;