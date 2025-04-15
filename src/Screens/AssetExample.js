import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const App = () => {
  const [selected, setSelected] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControlTab
        values={['Walking', 'Transit']}
        selectedIndex={selected}
        onTabPress={(index) => setSelected(index)}
        tabsContainerStyle={styles.segmentedContainer}
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        tabTextStyle={styles.tabTextStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  segmentedContainer: {
    width: 320, // Aumentado el ancho
  },
  tabStyle: {
    backgroundColor: 'lightgray',
    height: 70, // Aumentada la altura
    justifyContent: 'center',
  },
  activeTabStyle: {
    backgroundColor: '#0f9fff',
  },
  tabTextStyle: {
    color: 'black',
    fontSize: 20, // Aumentado el tamaño del texto
  },
});

export default App;
