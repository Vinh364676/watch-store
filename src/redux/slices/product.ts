import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../../@types/product';
import productService from '../../services/product/product.service';

// ----------------------------------------------------------------------
export const getProduct = createAsyncThunk(
  "get/getProduct",
  async (params: any) => {
    const { data } = await productService.get(params);
    return data;
  }
);

export const getProductPage = createAsyncThunk(
  "get/getProductPage",
  async (params: any) => {
    const { data } = await productService.get(params);
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "delete/deleteProduct",
  async (id: number) => {
    await productService.delete(id);
    return id;
  }
);
export const createProduct = createAsyncThunk(
  "create/createProduct",
  async (productData: any) => {
    const { data } = await productService.post(productData);
    return data;
  }
);

export const getByIdProduct = createAsyncThunk(
  "get/getByIDProduct",
  async (id: any) => {
    const { data } = await productService.getById(id);
    return data;
  }
);

const initialState: ProductState = {
  productCount: 0,
  productList: [],
  productDetail: {
    id: 0,
    productName: '',
    price: '',
    quantity: '',
    brandId: 0,
    categoryId: 0,
    img: '',
    thumnail:'',
    size:'',
    color:'',
    description:'',
    gender:'',
    code:'',
    status:'',
    createdDT:''
  },

}
const slice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.productList = action.payload.result.items;
      state.productCount = action.payload.result.totalCount;
    });

    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.productList.push(action.payload);
    }); 
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.productList = state.productList.filter((product) => product.id !== action.payload);
    }); 

  },
});
export default slice.reducer;
