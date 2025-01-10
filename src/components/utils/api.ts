import axios, { AxiosInstance } from "axios";

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

// Création d'une instance Axios
const api: AxiosInstance = axios.create({
  baseURL: "https://orga-backend-4k0u.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleApiCall = async (
  endpoint: string,
  method: "POST" | "GET" | "PUT" | "DELETE",
  body: object = {}
): Promise<ApiResponse> => {
  try {
    const response = await api({
      url: endpoint,
      method,
      data: body,
    });

    return {
      success: true,
      message: response.data.message || "Opération réussie.",
      data: response.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Une erreur est survenue.",
      data: error.response?.data,
    };
  }
};
