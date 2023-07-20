import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native'


const LeftContent = props => <Avatar.Icon {...props} icon={require('../assets/images/clock.png')} />

const MyComponent = () => (
  <ScrollView>
  <Card style={{elevation: 5, margin: 5}}>
    <Card.Title title="Abndoned Ship" subtitle="Abndoned Ship" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/800' }} style={{margin: 10}} />
    <Card.Content>
      <Text variant="titleLarge">Abndoned Ship</Text>
      <Text variant="bodyMedium">asdasdasdasdasdasdasdasdasdasdasdasdasddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddddddddddddddddd</Text>
    </Card.Content>
  </Card>
  <Card style={{elevation: 5, margin: 5}}>
    <Card.Title title="Abndoned Ship" subtitle="Abndoned Ship" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/800' }} style={{margin: 10}} />
    <Card.Content>
      <Text variant="titleLarge">Abndoned Ship</Text>
      <Text variant="bodyMedium">asdasdasdasdasdasdasdasdasdasdasdasdasddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddddddddddddddddd</Text>
    </Card.Content>
  </Card>
  <Card style={{elevation: 5, margin: 5}}>
    <Card.Title title="Abndoned Ship" subtitle="Abndoned Ship" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/800' }} style={{margin: 10}} />
    <Card.Content>
      <Text variant="titleLarge">Abndoned Ship</Text>
      <Text variant="bodyMedium">asdasdasdasdasdasdasdasdasdasdasdasdasddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddddddddddddddddd</Text>
    </Card.Content>
  </Card>
  <Card style={{elevation: 5, margin: 5}}>
    <Card.Title title="Abndoned Ship" subtitle="Abndoned Ship" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/800' }} style={{margin: 10}} />
    <Card.Content>
      <Text variant="titleLarge">Abndoned Ship</Text>
      <Text variant="bodyMedium">asdasdasdasdasdasdasdasdasdasdasdasdasddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddddddddddddddddd</Text>
    </Card.Content>
  </Card>
  <Card style={{elevation: 5, margin: 5}}>
    <Card.Title title="Abndoned Ship" subtitle="Abndoned Ship" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/800' }} style={{margin: 10}} />
    <Card.Content>
      <Text variant="titleLarge">Abndoned Ship</Text>
      <Text variant="bodyMedium">asdasdasdasdasdasdasdasdasdasdasdasdasddddddddddddddddddddddddddddddddddddd
      ddddddddddddddddddddddddddddddddddddddddddddddddddddd</Text>
    </Card.Content>
  </Card>
  </ScrollView>
);

export default MyComponent;

const styles = StyleSheet.create({})