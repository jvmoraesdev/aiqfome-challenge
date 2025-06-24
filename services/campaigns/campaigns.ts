import { ICampaignsApi } from '@/interfaces/api.interface';
import { IPromotionalBanner } from '@/interfaces/general.interface';

const campaignsApi: ICampaignsApi = () => {
  const { API_BASE_URL } = process.env;

  /* 
    Since the backend is being mocked using server.json, some data manipulation is
    being performed within this API layer. Ideally, such manipulation should not occur
    at this level and should instead be handled directly by the backend, with the
    endpoint returning a properly structured response
  */

  const getPromotionalBanner = async (): Promise<IPromotionalBanner> => {
    const response = await fetch(`${API_BASE_URL}/banner`);
    if (!response) {
      throw new Error('Failed to fetch restaurants');
    }
    const data = await response.json();

    return data;
  };

  return {
    getPromotionalBanner
  };
};

export default campaignsApi;
