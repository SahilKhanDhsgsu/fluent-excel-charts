import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExcelData {
  headers: string[];
  rows: Array<Record<string, any>>;
}

interface FileUpload {
  id: string;
  filename: string;
  size: number;
  uploadDate: string;
  data: ExcelData | null;
}

interface FileState {
  uploads: FileUpload[];
  currentFile: FileUpload | null;
  loading: boolean;
  error: string | null;
}

const initialState: FileState = {
  uploads: [],
  currentFile: null,
  loading: false,
  error: null,
};

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    uploadStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    uploadSuccess: (state, action: PayloadAction<FileUpload>) => {
      state.loading = false;
      state.uploads.push(action.payload);
      state.currentFile = action.payload;
      state.error = null;
    },
    uploadFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentFile: (state, action: PayloadAction<FileUpload>) => {
      state.currentFile = action.payload;
    },
    clearCurrentFile: (state) => {
      state.currentFile = null;
    },
  },
});

export const { uploadStart, uploadSuccess, uploadFailure, setCurrentFile, clearCurrentFile } = fileSlice.actions;
export default fileSlice.reducer;