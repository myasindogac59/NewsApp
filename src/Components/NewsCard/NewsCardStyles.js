import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white"
  },
  image: {
    height: Dimensions.get('window').height / 4,
    margin:10,
    borderRadius:12
  },
  title: {
    fontSize: 20,
    textAlign:"center",
    marginVertical:13,
    fontWeight:'500',
    margin:10,
  },
  description: {
    fontSize:17,
    textAlign:"center",
    fontWeight:'300',
    marginVertical:5
  },
  author: {
    fontStyle:"italic",
    fontSize:16,
    textAlign:"right",
    marginRight:13,
    marginBottom:10
  },
})