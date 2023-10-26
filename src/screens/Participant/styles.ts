import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	card: {
		height: 56,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 12,
	},

	cardContent: {
		backgroundColor: "#1F1E25",
		flex: 1,
		height: "100%",
		display: "flex",
		justifyContent: "center",
		padding: 16,
		borderRadius: 5,
	},
	cardText: {
		color: "#FFF",
		fontSize: 16,
	},

	buttonText: {
		color: "#FFF",
		fontSize: 23,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
	},
});
