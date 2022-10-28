import { Text, View } from "react-native";
import { colorScheme } from '../types/styleTypes'
type BannerProp = { style?: string, appearance: colorScheme, children: React.ReactNode, title: string, subtitle: string }

export default function Banner({ style, appearance, title, subtitle, children }: BannerProp) {

  const styles = {
    container: appearance === colorScheme.PRIMARY ? 'bg-primary' : 'bg-white',
    text: appearance === colorScheme.PRIMARY ? 'text-white' : 'text-black',
    iconContainer: appearance === colorScheme.PRIMARY ? 'bg-white' : 'bg-purple-100'
  };

  return (
    <View className={`${styles.container}  shadow-lg shadow-black p-4 rounded-lg flex-1 ` + " " + style}>
      <View className={`${styles.iconContainer} flex items-center justify-center h-12 w-12 rounded-full`}>

        {children}

      </View>
      <Text className={`${styles.text} mt-6 mb-2 text-sm `}>
        {title}
      </Text>
      <Text className="text-gray-300 text-xs">{subtitle}</Text>

    </View>
  )
}
