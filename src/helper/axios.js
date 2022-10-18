import * as coreAxios from "axios";
import { config } from "../config";
import { localStorageStore } from "../stores/localStorage";

// Apis of new server
export const axios = coreAxios.default.create({
    baseURL: config.apiUrl,
});

export const axiosInterceptor = (dispatch) => {
    axios.interceptors.request.use(async (request) => {
        const authToken = localStorageStore.getToken();
        const legacyAuthToken = localStorageStore.getLegacyToken();

        if (authToken) {
            request["headers"]["Authorization"] = `Bearer ${authToken}`;
        }

        if (legacyAuthToken) {
            request["headers"]["Authorization02"] = `${legacyAuthToken}`;
        }

        return request;
    });

    //response interceptors
    axios.interceptors.response.use(
        async (response) => {
            if (!response.data) {
                return response;
            }

            return response.data;
        },
        (error) => {
            const { response } = error;
            let toastMessage = `Something went wrong! Please contact support team`;

            if (response) {
                const { status, data } = response;
                if (status === 400) {
                    toastMessage = data.message;
                } else if (status === 401) {
                    toastMessage = data.message;
                  //  dispatch(customerActions.logout());
                }
            }

           // dispatch(commonActions.setToast({ message: toastMessage }));
            return Promise.reject(error);
        }
    );
};

// Apis of legacy server
export const axiosLegacy = coreAxios.default.create({
    baseURL: config.legacyApiUrl,
});

export const axiosLegacyInterceptor = (dispatch) => {
    axiosLegacy.interceptors.request.use(async (request) => {
        const authToken = localStorage.getItem("token");
       
        if (authToken) {
            request["headers"]["Authorization"] = `Bearer ${authToken}`;
        }

        return request;
    });

    //response interceptors
    axiosLegacy.interceptors.response.use(
        async (response) => {
            if (!response.data) {
                return response;
            }

            return response.data;
        },
        (error) => {
            console.log("Api Error", { error });
            // commonResponse(error.response);
            return Promise.reject(error);
        }
    );
};
