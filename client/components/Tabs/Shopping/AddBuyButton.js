import React from 'react';
import {Pressable, View, Text} from 'react-native';
import { useDispatch } from 'react-redux';
import tailwind from 'tailwind-rn';
import { addBuyQty } from "../../../store/actions/shoppingActions";

//Decrements required stock QTY
export default function AddBuyButton({id}){
     const dispatch = useDispatch();
  return (<View>
    <Pressable
          id="add-btn"
          style={tailwind(
            'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
          )}
          onPress={() => dispatch(addBuyQty(id))}
          >
           <Text>+</Text>
          </Pressable>
  </View>);
};


