export const AddNewProduct = (data:any) => ({
    type: 'ADDPRODUCT',
    payload:data
})

export const DeleteProduct = (data:any) => ({
    type: 'DELETEPRODUCT',
    payload:data
})