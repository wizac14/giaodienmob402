import {
  StyleSheet, Text, View, TextInput, Button
  , TouchableOpacity, Image, Pressable
} from 'react-native'
import React, {useContext, useState} from 'react'
import { UserContext } from './UserContext'
import { login } from './Heper/Service'
const LoginScreen = () => {
    const {user, setUser} = useContext(UserContext)  ;
    const {id_user, setid_user} = useContext(UserContext)  ;
    const [email, setemail] = useState("mjurges1");
    const [password, setpassword] = useState("lL3S5W}&6z7Bo");
    const [token, settoken] = useState("");
    const testContext = async () => {
        try {
            const result = await login(email, password);
            console.log('login result', result);
            if (result.status === true) {
                console.log('login result', result.data.username);
                console.log('login result', result.data._id);

                setUser(result.data.username);
                setid_user(result.data._id);

              
                // console.log('id_user',id_user);
                // console.log('user',user);
                // console.log(result.data.username, result.data.password);
                //   await AsyncStorage.setItem('token', result.data.token);
               
            }
        } catch (error) {
            console.log('login error', error);
        }
        
    }

  return (
      <View style={styles.container}>
          <Text style={styles.txtMyFPL}>MyFPL</Text>
          <View style={styles.viewCon}>
              <Text style={styles.txtDangNhap}>Đăng nhập</Text>
              <Text style={styles.txtEmail}>Email</Text>
              <TextInput style={styles.txtInputEmail} placeholder="Nhập email" onChangeText={setemail} value= {email} />
              <Text style={styles.txtPassword}>Password</Text>
              <TextInput style={styles.txtInputEmail} placeholder="Nhập password" onChangeText={setpassword} value={password} />
              <Text style={styles.txtQuenMatKhau}>Quên mật khẩu?</Text>
              <TouchableOpacity style={styles.btnDangNhap} onPress={() => testContext()}>
                  <Text style={styles.txtLogin}>Login</Text>
              </TouchableOpacity>
              <View style={{width:'100%',height:64,justifyContent:'center',alignItems:'center'}} >
                  <Pressable style={styles.btnGG}>
                      <Image style={styles.imgGG} source={require('../assets/images/imgGG.png')} 
                      
                      />
                  </Pressable>
              </View>

          </View>
      </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  btnGG: {
      borderWidth: 1,
      borderRadius: 32,
      width: 64,
      height: 64,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
  },
  txtLogin: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: '700',

  },
  btnDangNhap: {
      width: '100%',
      height: 55,
      borderRadius: 10,
      backgroundColor: '#FF7A00',
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  txtQuenMatKhau: {
      marginTop: 10,
      fontSize: 12,
      color: '#677591',
      fontWeight: '500',
      textAlign: 'right',
  },
  txtPassword: {
      marginTop: 10,
      fontSize: 12,
      color: '#677591',
      fontWeight: '500',

  },
  txtInputEmail: {
      paddingLeft: 10,
      marginTop: 7,
      width: '100%',
      height: 55,
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 10,
  },
  txtEmail: {
      marginTop: 45,
      fontSize: 12,
      color: '#677591',
      fontWeight: '500',
  },
  txtDangNhap: {
      width: '100%',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 32,
      fontWeight: '700',
      marginTop: 26,
      color: '#011947',
  },
  viewCon: {
      padding: 20,
      borderTopLeftRadius: 50,
      marginTop: 75,
      width: '100%',
      height: 605,
      backgroundColor: 'white',
  },
  txtMyFPL: {
      marginTop: 63,
      width: '100%',
      fontSize: 30,
      color: 'white',
      flexDirection: 'row',
      // justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
  },
  container: {
      backgroundColor: '#FF7A00',
      width: '100%',
      height: '100%'
  },
})