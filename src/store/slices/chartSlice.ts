import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ChartType = 'bar' | 'line' | 'pie' | 'scatter' | '3d-column';

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
  }>;
}

interface ChartConfig {
  id: string;
  type: ChartType;
  title: string;
  xAxis: string;
  yAxis: string;
  data: ChartData;
  created: string;
}

interface ChartState {
  configs: ChartConfig[];
  activeChart: ChartConfig | null;
  loading: boolean;
  error: string | null;
}

const initialState: ChartState = {
  configs: [],
  activeChart: null,
  loading: false,
  error: null,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    createChart: (state, action: PayloadAction<Omit<ChartConfig, 'id' | 'created'>>) => {
      const chart: ChartConfig = {
        ...action.payload,
        id: Date.now().toString(),
        created: new Date().toISOString(),
      };
      state.configs.push(chart);
      state.activeChart = chart;
    },
    setActiveChart: (state, action: PayloadAction<ChartConfig>) => {
      state.activeChart = action.payload;
    },
    updateChart: (state, action: PayloadAction<ChartConfig>) => {
      const index = state.configs.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.configs[index] = action.payload;
        if (state.activeChart?.id === action.payload.id) {
          state.activeChart = action.payload;
        }
      }
    },
    deleteChart: (state, action: PayloadAction<string>) => {
      state.configs = state.configs.filter(c => c.id !== action.payload);
      if (state.activeChart?.id === action.payload) {
        state.activeChart = null;
      }
    },
  },
});

export const { createChart, setActiveChart, updateChart, deleteChart } = chartSlice.actions;
export default chartSlice.reducer;