import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ParticipantType } from "../../@types/ParticipantType";

interface ParticipantProps {
	participant: ParticipantType;
	handleParticipantRemove: (id: string) => void;
}

export function Participant({
	handleParticipantRemove,
	participant: { id, name },
}: ParticipantProps) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>
				<Text style={styles.cardText}>{name}</Text>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handleParticipantRemove(id)}
			>
				<Text style={styles.buttonText}>-</Text>
			</TouchableOpacity>
		</View>
	);
}
