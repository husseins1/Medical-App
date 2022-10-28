import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "../components/Banner";
import {colorScheme} from '../types/styleTypes'
import CrossIcon from '../components/CrossIcon'
import HomeIcon from '../components/HomeIcon'
export default function Home() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="">
      
        <View className="flex-row items-center justify-between  m-4 ">
          <Text className="font-bold text-xl">John Adams 👋🏻</Text>
          <Image
            source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGxan5mk7UK1ZfjubYs_nbsdheb5kdWhiyg&usqp=CAU",
            }}
            className="h-12 w-12  bg-gray-300 rounded-full"
          />
          
        </View>
        <View className="mx-4 grid flex-row ">
        <Banner title={"Clinc Visit"} subtitle={"Make an appointment"} appearance={colorScheme.PRIMARY} style="mr-2"  >
          <CrossIcon fill="#7266D7" />
          </Banner>
          <Banner title={"Home Visit"} subtitle={"Call the doctor home"} appearance={colorScheme.SECONDARY}   >
            <HomeIcon fill='#7266d7' />
          </Banner>
      

        </View>
   
    </SafeAreaView>
  );
}
