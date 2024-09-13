import React, {Fragment, useEffect, useState} from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteProduct} from '../../utility/redux/actions/ProductActions';

type productType = {
  id: any;
  name: string;
  price: string;
};

const ProductList = () => {
  const [productList, setProductList] = useState<productType[]>([]);

  const productData:productType[] = useSelector((state: any) => state.Product.productList);
  useEffect(() => {
    if(productData.length>0){
      const list: productType[] = [];
      console.log(JSON.stringify(productData))
      productData?.map((item: any) => {
          list.push(item);
      });
      setProductList(list); 
    } else if(productList.length>0){
      setProductList([]);
    }
  }, [productData]);

  const dispatch = useDispatch();
  const handleDeleteProduct = (id: any) => {
    dispatch(DeleteProduct(id));
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}>
      <View style={styles.list}>
        {productList?.map((item: productType) => (
          <Fragment key={item.id}>
            <ProductCard
              id={item.id}
              name={item.name}
              price={item.price}
              onPress={() => handleDeleteProduct(item.id)}
            />
          </Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

export default React.memo(ProductList);
