import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

export const getProduct = createAsyncThunk(
    "product/fetch",
    async (category, {rejectWithValue}) => {
        try {
            const res = await apiClient.get(`/products/category/${category}`)
            return res.data.products
        } catch (error) {
            return rejectWithValue(error.message || "error not found")
        }
    }
)