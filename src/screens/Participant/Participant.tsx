import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ParticipantType } from "../../@types/ParticipantType";

interface ParticipantProps {
	participant: ParticipantType;
	onRemove: (id: string) => void;
}

export function Participant({
	onRemove,
	participant: { id, name },
}: ParticipantProps) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>
				<Text style={styles.cardText}>{name}</Text>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => onRemove(id)}
			>
				<Text style={styles.buttonText}>-</Text>
			</TouchableOpacity>
		</View>
	);
}
