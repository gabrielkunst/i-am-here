import { styles } from "./styles";
import { Text, View } from "react-native";

export function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>
			<Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
		</View>
	);
}
