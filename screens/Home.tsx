import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "../components/Banner";


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
          <Banner style="mr-2" />
          <Banner  />
      

        </View>
   
    </SafeAreaView>
  );
}
