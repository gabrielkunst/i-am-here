import { useState } from "react";
import { Participant } from "../Participant/Participant";
import { styles } from "./styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ParticipantType } from "../../@types/ParticipantType";

export function Home() {
	const [name, setName] = useState<string>("");
	const [participants, setParticipants] = useState<ParticipantType[]>([]);

	function handleParticipandAdd() {
		const nameWithoutSpaces = name.trim();
		if (!nameWithoutSpaces) {
			alert("Nome do participante não pode ser vazio");
			return;
		}

		const newParticipant = {
			id: String(new Date().getTime()),
			name: nameWithoutSpaces,
		};

		setParticipants((prevParticipants) => [
			...prevParticipants,
			newParticipant,
		]);
		setName("");
	}

	function handleParticipantRemove(id: string) {
		setParticipants((prevParticipants) =>
			prevParticipants.filter((participant) => participant.id !== id)
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>
			<Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
			<View style={styles.form}>
				<TextInput
					value={name}
					onChange={(e) => setName(e.nativeEvent.text)}
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
			<View style={styles.participants}>
				{participants.map((participant) => (
					<Participant
						key={participant.id}
						participant={participant}
						handleParticipantRemove={handleParticipantRemove}
					/>
				))}
			</View>
		</View>
	);
}
