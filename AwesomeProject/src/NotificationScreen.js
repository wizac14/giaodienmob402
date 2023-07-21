import * as React from 'react';
import { useRef } from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from 'react-native'

const images = new Array(6).fill(
  'https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/360065323_827582868965291_2179207238637473248_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q05RBvyqK0wAX8Hctbi&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTJroxbnOLTE7vI55HgdmBMleinr1ttHggbe94SYtEDwA&oe=64D47926',
);


const LeftContent = props => <Avatar.Image {...props} source={require('../assets/images/fpl.png')} />

const MyComponent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ], { useNativeDriver: false })}
            scrollEventThrottle={1}>
            {images.map((image, imageIndex) => {
              return (
                <View style={{ width: windowWidth, height: 250 }} key={imageIndex}>
                  <ImageBackground source={{ uri: image }} style={styles.card} />
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {images.map((image, imageIndex) => {
              const width = scrollX.interpolate({
                inputRange: [
                  windowWidth * (imageIndex - 1),
                  windowWidth * imageIndex,
                  windowWidth * (imageIndex + 1),
                ],
                outputRange: [8, 16, 8],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={imageIndex}
                  style={[styles.normalDot, { width }]}
                />
              );
            })}
          </View>
        </View>
        <Card style={{ elevation: 5, margin: 5 }}>
          <Card.Title style={{}} title="FPT Polytechnic" subtitle=" Thông báo" left={LeftContent} />
          <Card.Cover source={{ uri: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/360065323_827582868965291_2179207238637473248_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q05RBvyqK0wAX8Hctbi&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTJroxbnOLTE7vI55HgdmBMleinr1ttHggbe94SYtEDwA&oe=64D47926' }}
            style={{ margin: 10 }} />
          <Card.Content>
            <Text variant="titleLarge">FPT Polytechnic</Text>
            <Text variant="bodyMedium">Thông báo lịch học</Text>
          </Card.Content>
        </Card>

        <Card style={{ elevation: 5, margin: 5 }}>
          <Card.Title style={{}} title="FPT Polytechnic" subtitle=" Thông báo" left={LeftContent} />
          <Card.Cover source={{ uri: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/360065323_827582868965291_2179207238637473248_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q05RBvyqK0wAX8Hctbi&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTJroxbnOLTE7vI55HgdmBMleinr1ttHggbe94SYtEDwA&oe=64D47926' }}
            style={{ margin: 10 }} />
          <Card.Content>
            <Text variant="titleLarge">FPT Polytechnic</Text>
            <Text variant="bodyMedium">Thông báo lịch học</Text>
          </Card.Content>
        </Card>

        <Card style={{ elevation: 5, margin: 5 }}>
          <Card.Title style={{}} title="FPT Polytechnic" subtitle=" Thông báo" left={LeftContent} />
          <Card.Cover source={{ uri: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/360065323_827582868965291_2179207238637473248_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q05RBvyqK0wAX8Hctbi&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTJroxbnOLTE7vI55HgdmBMleinr1ttHggbe94SYtEDwA&oe=64D47926' }}
            style={{ margin: 10 }} />
          <Card.Content>
            <Text variant="titleLarge">FPT Polytechnic</Text>
            <Text variant="bodyMedium">Thông báo lịch học</Text>
          </Card.Content>
        </Card>

        <Card style={{ elevation: 5, margin: 5 }}>
          <Card.Title style={{}} title="FPT Polytechnic" subtitle=" Thông báo" left={LeftContent} />
          <Card.Cover source={{ uri: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/360065323_827582868965291_2179207238637473248_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q05RBvyqK0wAX8Hctbi&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTJroxbnOLTE7vI55HgdmBMleinr1ttHggbe94SYtEDwA&oe=64D47926' }}
            style={{ margin: 10 }} />
          <Card.Content>
            <Text variant="titleLarge">FPT Polytechnic</Text>
            <Text variant="bodyMedium">Thông báo lịch học</Text>
          </Card.Content>
        </Card>

        <Card style={{ elevation: 5, margin: 5 }}>
          <Card.Title style={{}} title="FPT Polytechnic" subtitle=" Thông báo" left={LeftContent} />
          <Card.Cover source={{ uri: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/360065323_827582868965291_2179207238637473248_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q05RBvyqK0wAX8Hctbi&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTJroxbnOLTE7vI55HgdmBMleinr1ttHggbe94SYtEDwA&oe=64D47926' }}
            style={{ margin: 10 }} />
          <Card.Content>
            <Text variant="titleLarge">FPT Polytechnic</Text>
            <Text variant="bodyMedium">Thông báo lịch học</Text>
          </Card.Content>
        </Card>

        <Card style={{ elevation: 5, margin: 5 }}>
          <Card.Title style={{}} title="FPT Polytechnic" subtitle=" Thông báo" left={LeftContent} />
          <Card.Cover source={{ uri: 'https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/360065323_827582868965291_2179207238637473248_n.png?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=q05RBvyqK0wAX8Hctbi&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTJroxbnOLTE7vI55HgdmBMleinr1ttHggbe94SYtEDwA&oe=64D47926' }}
            style={{ margin: 10 }} />
          <Card.Content>
            <Text variant="titleLarge">FPT Polytechnic</Text>
            <Text variant="bodyMedium">Thông báo lịch học</Text>
          </Card.Content>
        </Card>

      </ScrollView>
    </SafeAreaView>
  )
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  card: {
    flex: 1,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },

  normalDot: {
    height: 5,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})