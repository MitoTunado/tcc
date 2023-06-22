import { StyleSheet } from "react-native"

export const homeStyles = StyleSheet.create({
  background:{
    alignItems: 'center',
    height: '100%',
  }, 
  container: {
    marginTop: 70,
    width: '90%',
    //backgroundColor: '#FA3F30',
    height: '100%',
  },
   title: {
    marginBottom: 200,
  },
  titleText:{
    color: '#61B482', 
    fontSize: 26,
    fontWeight: 'bold',  
  },
  titleText2:{
    color: '#4C4E52',
    fontSize: 26,
    fontWeight: 'bold',  
  },
  titleDescription: {
    color: '#9BA0AA',
    fontSize: 11,
    marginBotton: 100,
  },
  btnSubmitAluno:{
    backgroundColor: '#61B482',
    width: '100%',
    height: 81,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5.35,
  },
  submitTextAluno:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  btnSubmitCantina:{
    backgroundColor: '#B4A761',
    width: '100%',
    height: 81,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5.35,
  },
  submitTextCantina:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  btnSubmitAdmin:{
    backgroundColor: '#94477F',
    width: '100%',
    height: 81,
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 5.35,
  },
  submitTextAdmin:{
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  box:{
    padding: 12,
    paddingEnd: 15,
    flex: 0.60,
    justifyContent: "space-between",
    marginTop: 40,
  },
  welcomeBack: {
    padding: 12,
    paddingEnd: 15,
    alignItems: "center"
   },

  welcome: { 
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  description: { 
    fontSize: 14,
    color: '#777',
    fontWeight: 'bold',
  },


})