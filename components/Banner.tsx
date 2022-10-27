import { Text, View } from "react-native";
import CrossIcon from "./CrossIcon"

export default function Banner({style}:{style?:string}) {
    console.log(style)
  return (
    <View className={"bg-primary p-4 rounded-lg flex-1 "+" "+style}>
        <View className="bg-white flex items-center justify-center h-12 w-12 rounded-full">
              <CrossIcon fill="#7266D7" />

        </View>
        <Text className="text-white mt-8 mb-2 text-sm">
            Clinc Vist
        </Text>
        <Text className="text-gray-300 text-xs">Make an appointment</Text>
        
    </View>
  )
}
