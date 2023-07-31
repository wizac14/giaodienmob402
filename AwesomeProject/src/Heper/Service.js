const {default: AxiosInstance} = require('../Heper/AxiosHelper');



export const getLH = async () => {
   try {
    const response = await AxiosInstance().get('/lichhoc');
    // console.log(response.data);
    return response;
   }catch(error){
       console.log("error",error);
   }
}
export const getLT = async () => {
    try {
     const response = await AxiosInstance().get('/lichthi');
     // console.log(response.data);
     return response;
    }catch(error){
        console.log("error",error);
    }
 }
export const login = async (email, password) => {
    try {
        const body =
        {
            username: email,
            password: password
        }
        const res = await AxiosInstance().post('user/login', body)
        console.log('login response', res);
        return res;
    } catch (error) {
        console.log("login error", error);
        return error;
    }

}
export const getLTUser = async (id) => {
    try {
        const body =
        {
            id_user : id
        }

     const response = await AxiosInstance().get('lichthi/user',body);
     console.log(response.data);
     return response;
    }catch(error){
        console.log("error",error);
    }
 }
