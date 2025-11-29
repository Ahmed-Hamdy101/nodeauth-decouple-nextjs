import api from "@/util/axios";
import { DashboardData } from "@/types/dashboard.types";

class DashboardService {
    // Fetch dashboard data
    getDashboardData = async (): Promise<DashboardData> => {
        try {
            const response = await api.get<DashboardData>('/dashboard');
            return response.data;
        } catch (error: any) {
            console.error('Failed to fetch dashboard data:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Failed to fetch dashboard data');
        }
    };
}

export default DashboardService;    