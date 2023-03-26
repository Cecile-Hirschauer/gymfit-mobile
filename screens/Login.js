import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";

// Formik
import {Formik} from 'formik';

// icons
import {Octicons, Ionicons} from "@expo/vector-icons";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    StyledInputLabel,
    StyledTextInput,
    Colors,
    Line,
    MsgBox
} from "../components/styles";
import {View} from "react-native";

const {brand, darkLight, primary} = Colors;
const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer style={"dark"}>
            <InnerContainer>
                <PageLogo resizeMode={"cover"} source={require('./../assets/img/flower_crib_shots.png')}/>
                <SubTitle>Se connecter</SubTitle>
                <Formik
                    initialValues={{email: "", password: ""}}
                    onSubmit={(values) => console.log(values)}>
                    {
                        ({handleBlur, handleChange, handleSubmit, values}) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Email"
                                    placeholder="Votre email"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                    icon="mail"
                                />
                                <MyTextInput
                                    label="Mot de Passe"
                                    placeholder="* * * * * * * *"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    icon="lock"
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>
                                        Connexion
                                    </ButtonText>
                                </StyledButton>
                                <Line />
                                
                            </StyledFormArea>
                        )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon
                    onPress={() => {
                        setHidePassword(!hidePassword);
                    }}
                >
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
};

export default Login;