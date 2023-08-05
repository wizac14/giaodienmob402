const { default: AxiosInstance } = require('../Heper/AxiosHelper');

export const getLHUser = async (id_user) => {
    const body = {
        id_user: id_user
    }
    try {
        const response = await AxiosInstance().post('/lichhoc/user', body);
        console.log("lịch học theo user serv", response);
        return response;
    } catch (error) {
        console.log("error", error);
    }
}

export const getLH = async () => {
    try {
        const response = await AxiosInstance().get('/lichhoc');
        // console.log(response.data);
        return response;
    } catch (error) {
        console.log("error", error);
    }
}
export const getLT = async () => {
    try {
        const response = await AxiosInstance().get('/lichthi');
        // console.log(response.data);
        return response;
    } catch (error) {
        console.log("error", error);
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
export const getLTUser = async (id_user) => {
    try {
        const body =
        {
            id_user: id_user
        }

        const response = await AxiosInstance().post('/lichthi/user', body);
        console.log("lấy lịch thi theo user ", response);
        return response;
    } catch (error) {
        console.log("error", error);
    }
}
export const getTinTucapi = async () => {
    try {
        const response = await AxiosInstance().get('/tin-tucap');
        console.log("lấy tin tức ", response);
        return response;
    } catch (error) {
        console.log("error", error);
    }
}
export const getNews = async () => {
    try {
        const response = await AxiosInstance().get('/tin-tuc');
        console.log("78 : >>>>>>>>>>", response.data);
        return response.data;
    } catch (error) {
        console.log("error", error);
    }
}
export const getLTDate = async (id_user, ngayThi) => {
    try {
        const body =
        {
            id_user: id_user,
            ngayThi: ngayThi

        }
        const response = await AxiosInstance().post('/lichthi/user/find', body);
        console.log("lấy lịch thi theo ngày ", response);
        return response;
    } catch (error) {
        console.log("error", error);
    }
}
export const getGame = async () => {
    try {
        const response = await AxiosInstance().get('/game');
        // console.log(response);
        return response;
    } catch (error) {
        console.log("error", error);
    }
}
export const getPlayed = async () => {
    try {
        const response = await AxiosInstance().get('/played');
        // console.log(response);
        return response;
    } catch (error) {
        console.log("error", error);
    }
}
export const LayDiem = async (id_user, game_id,diem) => {
    try {
        const body =
        {
            id_user: id_user,
            game_id: game_id,
            diem: diem

        }
        const response = await AxiosInstance().post('/played/lay-diem', body);
        console.log("lấy Điểm thành công ", response);
        return response;
    } catch (error) {
        console.log("error", error);
    }
    
}
export const getCard = async (id_user) => {
    try {
        const body =
        {
            id_user: id_user,
        }
        const response = await AxiosInstance().post('/card/user', body);
        console.log("lấy card theo user ", response);
        return response;
    } catch (error) {
        console.log("error", error);
    }
}
export const getLHDate = async (id_user, ngayHoc) => {
    try {
        const body =
        {
            id_user: id_user,
            ngayHoc: ngayHoc

        }

        const response = await AxiosInstance().post('/lichhoc/user/find', body);
        console.log("lấy lịch học theo ngày ", response);
        return response;
    } catch (error) {
        console.log("error", error);
    }
}