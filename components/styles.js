/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import StyleSheet from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18dcff",
    flex: 1,
    flexDirection: "column"
  },
  infoContainer: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    padding: 20
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  logo: {
    width: 160,
    height: 160
  },
  tittle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.9
  },
  input: {
    height: 45,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 7,
    fontSize: 16
  },
  buttonMains: {
    marginBottom: 7
  },
  //Botão de login
  buttonContainer: {
    height: 45,
    backgroundColor: "#545454",
    borderRadius: 10,
    paddingVertical: 10
  },
  buttonText: {
    textAlign: "center",
    color: "#18dcff",
    fontWeight: "bold",
    fontSize: 18
  },
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  },
  TextInputStyleClass: {
    textAlign: "center",
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 5
  },
  TextComponentStyle: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginBottom: 15
  },
  MainContainerList: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    paddingTop: 20
  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  FlatListStyle: {
    height: 100
  }
});
