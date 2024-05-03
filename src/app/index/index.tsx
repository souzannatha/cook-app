import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Escolha os produtos</Text>
      <Text>Descubra receitas baseadas nos produtos que você escolheu.</Text>
    </View>
  );
}
