import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Inset, Stack} from 'react-native-spacing-system';
import {Button, LabeledButton} from 'semantic-ui-react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Inset all={10}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Button title="Save" style={{margin: 5}} />
            <Button title="Save" disabled style={{margin: 5}} />
            <Button title="Save" color="primary" style={{margin: 5}} />
            <Button title="Save" color="primary" disabled style={{margin: 5}} />
            <Button title="Save" color="secondary" style={{margin: 5}} />
            <Button
              title="Save"
              color="secondary"
              disabled
              style={{margin: 5}}
            />
            <Button title="Save" color="red" style={{margin: 5}} />
            <Button title="Save" color="red" disabled style={{margin: 5}} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button
              title="Add Favorite"
              color="secondary"
              iconName="heart"
              iconType="AntDesign"
              fluid
              circular
              style={{marginRight: 10}}
            />
            <Button
              title="Add Favorite"
              color="secondary"
              iconName="heart"
              iconType="AntDesign"
              disabled
            />
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Button
              outline
              title="Add Friend"
              color="secondary"
              iconName="user"
              iconType="FontAwesome"
              style={{marginRight: 10}}
            />
            <Button
              loading
              outline
              title="Add Friend"
              color="red"
              iconName="user"
              iconType="FontAwesome"
              fluid
              style={{marginRight: 10}}
            />
            <Button
              disabled
              loading
              outline
              title="Add Friend"
              color="red"
              iconName="user"
              iconType="FontAwesome"
            />
          </View>
          <Stack size={10} />
          <Button
            color="secondary"
            iconName="basket"
            iconType="MaterialCommunityIcons"
          />
          <Stack size={10} />
          <Button
            circular
            color="secondary"
            iconName="basket"
            iconType="MaterialCommunityIcons"
          />
          <Stack size={10} />
          <LabeledButton
            label="Like"
            labelIcon="heart"
            labelIconType="AntDesign"
            title="2,048"
          />
          <Stack size={10} />
          <LabeledButton
            loading
            label="Like"
            labelIcon="heart"
            labelIconType="AntDesign"
            title="2,048"
          />
          <Stack size={10} />
          <LabeledButton
            loading
            disabled
            label="Like"
            labelIcon="heart"
            labelIconType="AntDesign"
            title="2,048"
          />
          <Stack size={10} />
          <LabeledButton
            pointing
            label="Like"
            labelIcon="heart"
            labelIconType="AntDesign"
            title="2,048"
            labelRight
          />
          <Stack size={10} />
          <LabeledButton
            label="Like"
            labelIcon="heart"
            labelIconType="AntDesign"
            title="2,048"
            labelRight
          />
          <Stack size={10} />
          <LabeledButton
            labelIcon="heart"
            labelIconType="AntDesign"
            title="2,048"
            labelRight
          />
          <Stack size={10} />
          <LabeledButton
            pointing
            color="red"
            label="Like"
            labelIcon="heart"
            labelIconType="AntDesign"
            title="2,048"
          />
          <Stack size={10} />
          <LabeledButton
            outline
            pointing
            color="primary"
            label="Forks"
            labelIcon="fork"
            labelIconType="AntDesign"
            title="1,048"
          />
          <Stack size={10} />
          <LabeledButton
            circular
            outline
            pointing
            color="primary"
            label="Forks"
            labelIcon="fork"
            labelIconType="AntDesign"
            title="1,048"
          />
          <Stack size={10} />
          <LabeledButton
            labelIcon="pause"
            labelIconType="Fontisto"
            title="Pause"
          />
        </Inset>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: '100%',
  },
});

export default App;
