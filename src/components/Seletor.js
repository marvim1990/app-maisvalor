import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

 const StatusItem = ( ) => {
  const [isLoading, setLoading] = useState(true);
 

   useEffect(() => {
     async function loadStatus() {
   const res = await fetch('http://172.16.0.191:3000/propostas/status')
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      console.log(res)
    }
    loadStatus();
  }, []);

  return (
    <View>
      <Picker.Item label = '{}' />
    </View>
  );
};

export default StatusItem;