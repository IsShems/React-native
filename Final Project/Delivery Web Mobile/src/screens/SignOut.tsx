import { View } from "react-native";
import CustomButton from "../components/Unknown/CustomButton";
import { BaseText } from "../components/Unknown/DesignSystem";
import { useAuth } from "../context/AuthContext";


interface SignOutProps {
    route?: any;
    navigation?: any;
}



export default function SignOut({ route, navigation }: SignOutProps) {
    
    const authContext = useAuth()

    const handleSignOut = async () =>
    {
        await authContext.signOut()
    }
    
    return (
        <View>
             <BaseText
                    marginTop={250}
                    text="Are you sure, you want to sign out?"
                    fontSize={18}
                    alignSelf="center"
                    numberOfLines={1}
                    marginHorizontal={30}
                    color="black"
                    weight="normal" />
            <CustomButton
            onPress={handleSignOut}
                marginTop={15}
                width={250}
                height={50}
                alignSelf="center"
                borderRadius={16}
                backgroundColor="#0BCE83">  
                <BaseText
                weight="semiBold"
                color="#FFFFFF"
                fontSize={18}
                text="Sign Out"/>
            </CustomButton>
        </View>
    )
}