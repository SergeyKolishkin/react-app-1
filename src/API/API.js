import * as Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "ab626cbb-a31d-4ced-b9fb-475e99a1b353"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
            return responce.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getUserId(userId) {
         return profileAPI.getProfile(userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', { email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete('auth/login');
    }
}

export const securityAPI = {
    captchaUrl() {
        return instance.get(`/security/get-captcha-url`);
    }
}

export const profileAPI = {
    getProfile(userId) {
         return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status})
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-type': 'multipart-form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
}