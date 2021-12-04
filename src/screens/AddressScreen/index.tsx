import React, {useMemo, useState} from 'react';
import {Text, View} from 'react-native';

import Button from '../../components/Button';
import CustomTextInput from '../../components/CustomTextInput/index';
import {Picker} from '@react-native-picker/picker';
import countryList from 'react-select-country-list';
import styles from './styles';

const AddressScreen = () => {
  const countries = useMemo(() => countryList().getData(), []);
  const [selectedCountry, setSelectedCountry] = useState(countries[0].label);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  console.log(fullName);
  return (
    <View style={styles.root}>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={setSelectedCountry}>
        {countries.map(country => (
          <Picker.Item
            value={country.value}
            label={country.label}
            key={country.label}
          />
        ))}
      </Picker>
      <CustomTextInput
        header={'Full name(First and Last name)'}
        value={fullName}
        setValue={setFullName}
      />
      <CustomTextInput
        header={'Phone Number'}
        value={phone}
        setValue={setPhone}
      />
      <CustomTextInput
        header={'Address'}
        value={address}
        setValue={setAddress}
      />
      <CustomTextInput header={'City'} value={city} setValue={setCity} />
      <CustomTextInput
        header={'Zipcode'}
        value={zipcode}
        setValue={setZipcode}
      />
      <Button
        text={'Use this address'}
        onPress={() => console.warn('Used this address')}
        containerStyle={{borderColor: 'grey', backgroundColor: '#e6c353'}}
      />
    </View>
  );
};

export default AddressScreen;
