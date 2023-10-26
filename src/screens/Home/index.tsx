import { useState } from "react";
import { Participant } from "../Participant/Participant";
import { styles } from "./styles";
import {
	Alert,
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { ParticipantType } from "../../@types/ParticipantType";

export function Home() {
	const [name, setName] = useState<string>("");
	const [participants, setParticipants] = useState<ParticipantType[]>([]);

	function handleParticipandAdd() {
		const nameWithoutSpaces = name.trim();

		if (!nameWithoutSpaces) {
			Alert.alert(
				"Participante Já Adicionado",
				"Nome do participante não pode ser vazio"
			);
			return;
		}
		const participantAlreadyExists = participants.find(
			(participant) => participant.name === nameWithoutSpaces
		);
		if (participantAlreadyExists) {
			alert("Esse participante já foi adicionado");
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

	function handleParticipantRemove({ id, name }: ParticipantType) {
		Alert.alert(
			"Remover Participante",
			`Tem certeza que deseja remover o participante ${name}?`,
			[
				{
					text: "Sim",
					onPress: () =>
						setParticipants((prevParticipants) =>
							prevParticipants.filter(
								(participant) => participant.id !== id
							)
						),
				},
				{
					text: "Não",
					style: "cancel",
				},
			]
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
			<FlatList
				style={styles.participants}
				data={participants}
				showsVerticalScrollIndicator={false}
				keyExtractor={(participant) => participant.id}
				renderItem={({ item }) => (
					<Participant
						participant={item}
						onRemove={handleParticipantRemove}
					/>
				)}
				ListEmptyComponent={() => (
					<Text style={styles.emptyListText}>
						Ninguém chegou no evento ainda? Adicione participantes a
						sua lista de presença.
					</Text>
				)}
			/>
		</View>
	);
}
