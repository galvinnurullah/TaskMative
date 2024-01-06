import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'


const Login = (props) => {
  const [email, setEmail]= useState();
  const [password, setPassword]= useState();
  const [loading, setLoading]= useState({
    loadingLogin:false,
    loadingSignin:false
  })

  const AuthSign = async () => {
      const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAN_y82r8GrhnzFS29E1ewKKhATxw0pPus",{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          email:email,
          password:password,
          returnSecureToken:true
        })
      })
      const resData= await response.json()
      if(response.ok){
        props.navigation.navigate('Home')
      }else{
        Alert.alert('Email tidak terdaftar', resData.error.message,[{
          text:'Okay'
        }])
      }
  }

  const AuthLogin = async () => {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAN_y82r8GrhnzFS29E1ewKKhATxw0pPus',{
        method:"POST",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          email:email,
          password:password,
          returnSecureToken:true
        })
      })
      const resData= await response.json()
      if(response.ok){
        props.navigation.navigate('Home')
      }else{
        Alert.alert('Email atau passoword salah', resData.error.message,[{
          text:'Okay'
        }])
      }
  }
  return(
    <View style={styles.container}>
      <Text style={styles.logo}>
        Login
      </Text>
      <View style={styles.inputView}>
        <TextInput 
        style={styles.inputText} 
        placeholder="Masukan Email" 
        placeholderTextColor="#003f5c" 
        onChangeText={(text)=>{
          setEmail(text)
        }}/>
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry 
          style={styles.inputText} 
          placeholder="Masukan Password" 
          placeholderTextColor="#003f5c" 
          onChangeText={(text)=>{
            setPassword(text)
          }}/>
      </View>
      <TouchableOpacity onPress={()=>{
        console.log('Forget Password')
      }}>
        <Text style={styles.forget}>Forget your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.loginBtn}
      onPress={AuthLogin}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={AuthSign}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ffffff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    fontWeight: 'bold',
    fontSize:50,
    color:'#fb5b5a',
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#FFC0CB",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:'center',
    padding:10
  },
  inputText:{
    height:50,
    color:'black'
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
    marginBottom:20
  },
  loginText:{
    color:'black'
  },
  forget:{
    color:'black',
    fontSize:11
  }
});

export default Login;