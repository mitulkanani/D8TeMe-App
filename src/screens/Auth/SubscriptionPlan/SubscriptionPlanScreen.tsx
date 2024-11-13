import { CheckIcon, CloseCircleIcon, HStack, Icon, Pressable, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { fontFamily } from "../../../utils/constants/Constants";
import { useNavigation } from '@react-navigation/native';
import { Button } from "../../../components/Button";


const SubscriptionPlanScreen = () => {
    const navigation = useNavigation();

    const MonthlyPlan = [
        {
            price: 0,
            type: 'Free',
            description: "Lorem ipsum dolor sit amet consectetur. Est sed malesuada",
            keyPoints: [
                "All limited links",
                "Own analytics platform",
                "Chat support",
                "Optimize hashtags",
                "Unlimited users"
            ],
            mostPopular: false
        },
        {
            price: 100,
            type: 'Basic',
            description: "Lorem ipsum dolor sit amet consectetur. Est sed malesuada",
            keyPoints: [
                "All limited links",
                "Own analytics platform",
                "Chat support",
                "Optimize hashtags",
                "Unlimited users"
            ],
            mostPopular: true
        },
        {
            price: 200,
            type: 'Exclusive',
            description: "Lorem ipsum dolor sit amet consectetur. Est sed malesuada",
            keyPoints: [
                "All limited links",
                "Own analytics platform",
                "Chat support",
                "Optimize hashtags",
                "Unlimited users"
            ],
            mostPopular: false
        }
    ]
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: 'Monthly',
            isActive: true,
        },
        {
            id: 2,
            title: 'Yearly',
            isActive: false,
        },
    ]);
    const [activePlan, setActivePlan] = useState(-1)
    const onTabChange = (id: any) => {
        const result = tabs.map(item => {
            return id == item.id
                ? { ...item, isActive: true }
                : { ...item, isActive: false };
        });
        setTabs(result);
    };
    const renderPlanItems = (item: any) => {
        return (
            <VStack>

            </VStack>
        )
    }
    return (
        <VStack flex={1} bg="#000000EB" p={12}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack alignItems="flex-end" my={'$4'}>
                    <Pressable onPress={() => navigation.goBack()}><Icon as={CloseCircleIcon} color={'$white'} size="xl" /></Pressable>
                </VStack>
                <VStack justifyContent="center" alignItems="center" my={'$4'}>

                    <Text style={styles.titleTextStyle}>Simple, Transparent Pricing</Text>
                    <Text style={styles.subTitleTextStyle}>No contracts. No surprise fees.</Text>
                </VStack>
                <VStack
                    // backgroundColor="$white"
                    softShadow="1"
                    $dark-bgColor="$backgroundSecondaryDark"
                    mt={'$4'}
                >
                    <VStack
                        backgroundColor="$white"
                        $dark-bgColor="$appDarkBg"
                        justifyContent="space-between"
                        borderRadius={22}
                        flexDirection="row"
                        mb={'$3'}
                    >
                        {tabs.map((tab, i) => (
                            <Pressable
                                key={i}
                                p={'$3'}
                                w="50%"
                                borderRadius={22}
                                bgColor={tab?.isActive ? '$fontPrimaryColor' : 'transparent'}
                                $dark-bgColor={
                                    tab?.isActive ? '$fontPrimaryColor' : 'transparent'
                                }
                                onPress={() => onTabChange(tab.id)}>
                                <Text
                                    textAlign="center"
                                    textTransform="uppercase"
                                    color={tab?.isActive ? '$white' : '$appFontPrimary'}
                                    fontFamily={fontFamily.Poppins}
                                    $dark-color="$white">
                                    {tab?.title}
                                </Text>
                            </Pressable>
                        ))}

                    </VStack>
                    {tabs[0]?.isActive && (
                        <VStack>
                            {MonthlyPlan?.map((item, index) => {
                                return (
                                    <Pressable style={[styles.itemContainer, { backgroundColor: index == activePlan ? "#FF407D" : 'white' }]} onPress={() => setActivePlan(index)}>
                                        {item?.mostPopular && (
                                            <VStack width={'100%'} alignItems="flex-end">
                                                <VStack bg={index == activePlan ? "$white" : '#FF407D'} borderRadius={100} py={'$0.5'} px='$2.5' alignItems="flex-end" >
                                                    <Text style={[styles.itemDescriptionStyle, { color: index == activePlan ? "#FF407D" : 'white', }]} textTransform="uppercase">{"Most popular"}</Text>
                                                </VStack>
                                            </VStack>)}
                                        <Text style={[styles.titleTextStyle, { color: index == activePlan ? 'white' : 'black' }]}>${item.price}
                                            <Text style={[styles.itemsubTextStyle, { color: index == activePlan ? 'white' : '#848199', fontWeight: '600' }]}>/month</Text></Text>
                                        <Text style={[styles.titleTextStyle, { color: index == activePlan ? 'white' : 'black', fontWeight: '500', fontSize: 20 }]}>{item.type} </Text>
                                        <Text style={[styles.itemDescriptionStyle, { color: index == activePlan ? 'white' : '#848199', }]}>{item.description}</Text>
                                        <VStack mt='$3'>
                                            {item?.keyPoints?.map((subItem) => {
                                                return (
                                                    <HStack alignItems="center" mt='$2'>
                                                        <VStack borderRadius={100} backgroundColor={"#5243C21A"} p={'$1'} mr={'$2'}>
                                                            <Icon as={CheckIcon} color={index == activePlan ? '$white' : "#5243C2"} size="sm" />
                                                        </VStack>
                                                        <Text style={[styles.itemDescriptionStyle, { color: index == activePlan ? 'white' : '#848199' }]}>{subItem}</Text>
                                                    </HStack>
                                                )
                                            }
                                            )}
                                        </VStack>
                                        <Button
                                            label={'Choose Plan'}
                                            w={'100%'}
                                            backgroundColor={index == activePlan ? '$white' : "rgba(244, 150, 209, 0.1)"}
                                            borderColor={index == activePlan ? '$white' : "rgba(244, 150, 209, 0.1)"}
                                            color={index == activePlan ? '#FF407D' : "#F496D1"}
                                            fontWeight="medium"
                                            fontSize="$md"
                                            mt={16}
                                            onPress={() => {setActivePlan(index),navigation.navigate("WelcomePageScreen")}}
                                        />
                                    </Pressable>
                                )
                            })}
                        </VStack>
                    )}
                    {tabs[1]?.isActive && (
                        <VStack>
                        </VStack>
                    )}

                </VStack>
            </ScrollView>
        </VStack>
    )
}
export const styles = StyleSheet.create({
    titleTextStyle: {
        fontSize: 22,
        fontFamily: fontFamily.Poppins,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 6,
        textAlign: 'center',
    },
    subTitleTextStyle: {
        fontSize: 18,
        fontFamily: fontFamily.Poppins,
        fontWeight: '400',
        color: 'white',
        paddingTop: 6,
        textAlign: 'center',
    },
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 26,
        alignItems: 'flex-start',
        padding: 18,
        marginTop: 10,
        elevation: 5, // Shadow for Android
    shadowColor: '#fff', // Shadow color for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:1,
    shadowRadius: 2,
    },
    itemsubTextStyle: {
        fontSize: 17,
        fontFamily: fontFamily.Poppins,
        fontWeight: '600',
        color: 'white',
        paddingTop: 6,
        textAlign: 'center',
    },
    itemDescriptionStyle: {
        fontSize: 15,
        fontFamily: fontFamily.Poppins,
        fontWeight: '400',
        color: 'white',
        textAlign: 'left',
        marginTop: 2
    }

})
export default SubscriptionPlanScreen