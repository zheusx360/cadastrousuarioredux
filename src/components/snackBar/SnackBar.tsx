import Snackbar from "react-native-snackbar";

export const SnackBar = (message, type='') => {  
   Snackbar.show({
       text: message,
       duration: Snackbar.LENGTH_SHORT,
       fontFamily: 'Roboto-Bold',
       textColor: type === 'alert' ? '#000000' : '#fff',
       backgroundColor: type === 'alert' ? '#d3b50a' : type === 'error' ? '#f22' : '#1b1'
   })
}


