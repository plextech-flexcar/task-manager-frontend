import React from 'react';
import { View } from "native-base";
import { TouchableOpacity, Text, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { styles } from './styles.js';
import { useAtom } from 'jotai';
import { atomFilterOptions, atomFilters } from '../../atoms';

const MakeCheckbox = (props: {
  changeFilter: React.Dispatch<React.SetStateAction<any>>;
  title: string;
}) => {
  const {changeFilter, title } = props;
  const [filterOptions] = useAtom(atomFilterOptions);
  const [filter, setFilter] = useAtom(atomFilters)
  const equals = (a: any , b: any) => JSON.stringify(a) === JSON.stringify(b);
  const checkCurrentState = (): 'indeterminate' | 'checked' | 'unchecked' => {
    const currentModels = filter['Make & Model'][title]
    const modelOptions = filterOptions['Make & Model'][title];
    if (currentModels.length === 0) {
      return 'unchecked';
    } else if (equals(currentModels, modelOptions)) {
      return 'checked';
    }
    return 'indeterminate';
  }
  const [checkType, setCheckType] = React.useState(checkCurrentState());
  const checkboxChangeState = () => {
    if (checkType === 'unchecked') {
      const updateFilter = filter;
      updateFilter['Make & Model'][title] = [...filterOptions['Make & Model'][title]];
      setFilter(updateFilter);
    } else {
      const updateFilter = filter;
      updateFilter['Make & Model'][title] = [];
      setFilter(updateFilter);
    }
    setCheckType(checkCurrentState());
  };
    return (
    <View style={styles.makesRow}>
        <Checkbox
          key={title}
          status={checkType}
          onPress={checkboxChangeState}
          color={'#2A00A5'}
          uncheckedColor={'#2A00A5'}
        />
          <TouchableOpacity
            key={title}
            onPress={() => changeFilter(title)}
            style={styles.makesRowPressable}
          >
              <Text style={styles.filterText}>{title}</Text>
              <Image
                source={require('../../assets/images/navigation/next-arrow.webp')}
                style={{ height: 15, width: 15 }}
              ></Image>
          </TouchableOpacity>
      </View>
    )
}

export default MakeCheckbox;