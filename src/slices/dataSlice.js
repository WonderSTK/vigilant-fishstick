import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (country) => {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockData[country];
  }
);

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

// Mock data for different countries
const mockData = {
  USA: {
    totalIncome: 33328.12,
    totalIncomeChange: 12.24,
    profit: 8583.09,
    profitChange: -2.63,
    totalViews: 52234.32,
    totalViewsChange: 1.46,
    conversionRate: 6.12,
    conversionRateChange: 8.75,
    salesOverview: {
      labels: ['Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024'],
      totalRevenue: [18000, 14000, 19000, 13000, 17000, 12000, 16000, 11000, 15780, 17500],
      totalTarget: [12000, 16000, 13000, 18000, 14000, 17000, 13500, 16500, 12000, 15000],
    },
    salesByRegion: {
      Asia: 2201,
      Europe: 2865,
      Pacific: 2475,
      Americas: 1762,
      'Middle East': 1749,
      Africa: 1591,
    },
    registeredUsers: {
      total: 3201,
      premium: 2804,
      basic: 397,
    },
    integrations: [
      { name: 'Stripe', type: 'Finance', rate: 33, profit: 10998.28 },
      { name: 'Zapier', type: 'CRM', rate: 27, profit: 8998.59 },
      { name: 'Shopify', type: 'Marketplace', rate: 40, profit: 13331.24 },
    ],
  },
  Canada: {
    totalIncome: 28765.43,
    totalIncomeChange: 8.76,
    profit: 7234.56,
    profitChange: 3.21,
    totalViews: 43210.98,
    totalViewsChange: 2.34,
    conversionRate: 5.87,
    conversionRateChange: 6.54,
    salesOverview: {
      labels: ['Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024'],
      totalRevenue: [17000, 13000, 18000, 12000, 16000, 11000, 15000, 10000, 14000, 16000],
      totalTarget: [11000, 15000, 12000, 17000, 13000, 16000, 12500, 15500, 11000, 14000],
    },
    salesByRegion: {
      Asia: 1876,
      Europe: 2543,
      Pacific: 2198,
      Americas: 2987,
      'Middle East': 1432,
      Africa: 1321,
    },
    registeredUsers: {
      total: 2876,
      premium: 2345,
      basic: 531,
    },
    integrations: [
      { name: 'PayPal', type: 'Finance', rate: 38, profit: 9876.54 },
      { name: 'HubSpot', type: 'CRM', rate: 31, profit: 7654.32 },
      { name: 'Amazon', type: 'Marketplace', rate: 35, profit: 11234.56 },
    ],
  },
  Germany: {
    totalIncome: 31542.87,
    totalIncomeChange: 10.32,
    profit: 7896.54,
    profitChange: 1.87,
    totalViews: 47654.32,
    totalViewsChange: 3.21,
    conversionRate: 6.43,
    conversionRateChange: 7.65,
    salesOverview: {
      labels: ['Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024'],
      totalRevenue: [19000, 15000, 20000, 14000, 18000, 13000, 17000, 12000, 16000, 18500],
      totalTarget: [13000, 17000, 14000, 19000, 15000, 18000, 14500, 17500, 13000, 16000],
    },
    salesByRegion: {
      Asia: 2109,
      Europe: 3456,
      Pacific: 2321,
      Americas: 1987,
      'Middle East': 1654,
      Africa: 1432,
    },
    registeredUsers: {
      total: 3098,
      premium: 2654,
      basic: 444,
    },
    integrations: [
      { name: 'Klarna', type: 'Finance', rate: 36, profit: 10987.65 },
      { name: 'SAP', type: 'CRM', rate: 29, profit: 8765.43 },
      { name: 'Otto', type: 'Marketplace', rate: 38, profit: 12345.67 },
    ],
  },
  India: {
    totalIncome: 25678.90,
    totalIncomeChange: 15.43,
    profit: 6543.21,
    profitChange: 5.67,
    totalViews: 58765.43,
    totalViewsChange: 4.32,
    conversionRate: 5.43,
    conversionRateChange: 9.87,
    salesOverview: {
      labels: ['Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024'],
      totalRevenue: [16000, 12000, 17000, 11000, 15000, 10000, 14000, 9000, 13000, 15000],
      totalTarget: [10000, 14000, 11000, 16000, 12000, 15000, 11500, 14500, 10000, 13000],
    },
    salesByRegion: {
      Asia: 3456,
      Europe: 1987,
      Pacific: 1765,
      Americas: 1543,
      'Middle East': 2109,
      Africa: 1876,
    },
    registeredUsers: {
      total: 3543,
      premium: 2987,
      basic: 556,
    },
    integrations: [
      { name: 'Paytm', type: 'Finance', rate: 41, profit: 9876.54 },
      { name: 'Zoho', type: 'CRM', rate: 33, profit: 7654.32 },
      { name: 'Flipkart', type: 'Marketplace', rate: 37, profit: 11234.56 },
    ],
  },
};

