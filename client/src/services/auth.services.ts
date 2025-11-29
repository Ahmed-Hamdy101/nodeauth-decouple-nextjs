import api from '@/util/axios';
import { AuthResponse, AuthForms } from '../types/auth.types';

class AuthService {
  // login 
  login = async (AuthForms: AuthForms): Promise<AuthResponse> => {
    try {
      // Make request
      const response = await api.post<AuthResponse>('/login', AuthForms);
      console.log('Login response:', response.data);

      // Extract token
      const token = response.data.token;
      if (!token) throw new Error('No access token received from server');

      // Save token
      localStorage.setItem('token', token);

      // Optionally save user data
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }

      // Set default Bearer token for all requests
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return response.data;
    } catch (error: any) {
      console.error('Login failed:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };
}

export default AuthService;
