import React, { useRef, useState } from 'react';
import Logo from '../../../assets/icons/logo.svg'
import { Divider, Heading, HStack, KeyboardAvoidingView, Pressable, ScrollView, Text, VStack } from "@gluestack-ui/themed"
import { fontFamily } from '../../../utils/constants/Constants';
import StepIndicator from 'react-native-step-indicator';
import { styles } from './style';
import { TextInput } from '../../../components/TextInput';
import { Platform } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Formik } from 'formik';
import moment from 'moment';
import { Button } from '../../../components/Button';
const ContactDetails = ({ onSuccess }) => {
    const formikRef = useRef(null);
    const date = new Date();
    const [email, setEmail] = useState("")
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    interface StoreDetailsValues {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string | number;
        birthDate: string;
    }
    const initialValues: StoreDetailsValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        birthDate: '',
    };


    const onDatePickerHandler = (date: moment.MomentInput) => {
        const formatedDate = moment(date).format('MM/DD/YYYY');
        formikRef.current.setFieldValue('birthDate', formatedDate);
        setDatePickerVisible(false);
        // AgeCheck(formatedDate);
    };
    const handleSubmitForm = (values: any) => {
        console.log("Values:\n", values)
    }
    return (
        <Formik
            enableReinitialize
            innerRef={formikRef}
            initialValues={initialValues}
            // validationSchema={storeDetailsSchema}
            onSubmit={handleSubmitForm}>
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
                setFieldValue,
            }) => (
                <>
                    <DatePicker
                        modal
                        open={datePickerVisible}
                        date={date}
                        mode="date"
                        maximumDate={new Date()}
                        onConfirm={date => date && onDatePickerHandler(date)}
                        onCancel={() => setDatePickerVisible(false)}
                    />
                    <React.Fragment>
                        <VStack my='$8'>
                            <Text style={[styles.titleTextStyle, { fontWeight: '600' }]}>Contact details</Text>
                            <Text style={[styles.secondaryTextStyle, { fontSize: 14 }]}>Lorem ipsum dolor sit amet consectetur adipisc.</Text>
                            <VStack mt='$5'>
                                <Text fontFamily={fontFamily.Poppins} fontWeight={'$medium'} color='$labelColor' fontSize={'$md'} mb={'$2'}>First Name*</Text>
                                <TextInput
                                    placeholder="First Name"
                                    value={values.firstName}
                                    color="$black"
                                    onChangeText={e => {
                                        setFieldValue('firstName', e);
                                    }}
                                    error={
                                        errors.firstName &&
                                            touched.firstName ?
                                            (errors.firstName as string) : ""
                                    }
                                    onBlur={handleBlur('firstName')} />
                                <VStack height={20} />
                            </VStack>
                            <VStack >
                                <Text fontFamily={fontFamily.Poppins} fontWeight={'$medium'} color='$labelColor' fontSize={'$md'} mb={'$2'}>Last Name*</Text>
                                <TextInput
                                    placeholder="Last Name"
                                    value={values.lastName}
                                    color="$black"
                                    onChangeText={e => {
                                        setFieldValue('lastName', e);
                                    }}
                                    error={
                                        errors.lastName &&
                                            touched.lastName ?
                                            (errors.lastName as string) : ""
                                    }
                                    onBlur={handleBlur('lastName')} />
                                <VStack height={20} />
                            </VStack>
                            <VStack>
                                <Text fontFamily={fontFamily.Poppins} fontWeight={'$medium'} color='$labelColor' fontSize={'$md'} mb={'$2'}>Email Address*</Text>
                                <TextInput
                                    placeholder="Email"
                                    value={values.email}
                                    color="$black"
                                    onChangeText={e => {
                                        setFieldValue('email', e);
                                    }}
                                    keyboardType='email-address'
                                    error={
                                        errors.email &&
                                            touched.email ?
                                            (errors.email as string) : ""
                                    }
                                    onBlur={handleBlur('email')} />
                                <VStack height={20} />
                            </VStack>
                            <VStack>
                                <Text fontFamily={fontFamily.Poppins} fontWeight={'$medium'} color='$labelColor' fontSize={'$md'} mb={'$2'}>Birthday</Text>
                                <Pressable onBlur={handleBlur('birthDate')}
                                    onPress={() => {
                                        console.log("press before")
                                        setDatePickerVisible(!datePickerVisible);
                                        console.log("press")
                                    }}>
                                    <HStack justifyContent='space-between'>
                                        <TextInput
                                            placeholder="MM"
                                            value={email}
                                            color="$black"
                                            onChangeText={(text) => setEmail(text)}
                                            keyboardType='email-address'
                                            width={'30%'}
                                            editable={false}
                                            textAlign='center'
                                            onPressIn={() => {
                                                setDatePickerVisible(!datePickerVisible);
                                            }}
                                        />
                                        <TextInput
                                            placeholder="DD"
                                            value={email}
                                            editable={false}
                                            color="$black"
                                            onChangeText={(text) => setEmail(text)}
                                            keyboardType='email-address'
                                            width={'30%'}
                                            textAlign='center'
                                            onPressIn={() => {
                                                setDatePickerVisible(!datePickerVisible);
                                            }}
                                        />
                                        <TextInput
                                            placeholder="YYYY"
                                            value={email}
                                            color="$black"
                                            editable={false}
                                            onChangeText={(text) => setEmail(text)}
                                            keyboardType='email-address'
                                            width={'30%'}
                                            textAlign='center'
                                            onPressIn={() => {
                                                setDatePickerVisible(!datePickerVisible);
                                            }}
                                        />
                                    </HStack>
                                </Pressable>
                                <VStack height={20} />
                                <Button
                                    label={'Next step'}
                                    w={'100%'}
                                    backgroundColor="$fontSecondaryColor"
                                    borderColor="$fontSecondaryColor"
                                    color="white"
                                    fontWeight="medium"
                                    fontSize="$md"
                                    mt={'$6'}
                                    borderRadius={6}
                                    onPress={onSuccess}
                                />
                            </VStack>
                        </VStack>
                    </React.Fragment>
                </>
            )}
        </Formik>
    )
}
export default ContactDetails