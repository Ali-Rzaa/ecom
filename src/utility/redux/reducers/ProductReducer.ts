const initialState = {
  productList: [],
};

export const ProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADDPRODUCT':
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    case 'DELETEPRODUCT':
      return {
        ...state,
        productList: state.productList.filter(
          (item: any) => item.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
