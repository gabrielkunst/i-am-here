import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#131016",
		padding: 24,
	},
	eventName: {
		color: "#FFF",
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 48,
	},
	eventDate: {
		color: "#6B6B6B",
		fontSize: 16,
	},
	input: {
		height: 56,
		backgroundColor: "#1F1E25",
		borderRadius: 5,
		color: "#FFF",
		padding: 16,
		fontSize: 16,
		flex: 1,
	},
	buttonText: {
		color: "#FFF",
		fontSize: 23,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31CF67",
		alignItems: "center",
		justifyContent: "center",
	},
	form: {
		marginTop: 36,
		marginBottom: 24,
		flexDirection: "row",
		gap: 12,
	},
	participants: {
		rowGap: 12,
		gap: 12,
	},
	emptyListText: {
		textAlign: "center",
		color: "#FFF",
		fontSize: 16,
	},
});
