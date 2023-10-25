import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home() {
	function handleParticipandAdd() {
		console.log("Clicou");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>
			<Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor="#6B6B6B"
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={handleParticipandAdd}
				>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
