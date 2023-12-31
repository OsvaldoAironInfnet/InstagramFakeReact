import { Alert, Flex, Heading, Input, Row, ScrollView } from "native-base";
import { Divider } from 'native-base';
import { Text } from "native-base";
import { View, Link, Box, Center } from "native-base";
import { Image } from 'react-native';
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../design/ui/components/button";
import React, { useEffect, useState } from 'react';
import HomeHeader from "./components/header";
import HomeStories, { Storie } from "./components/stories";
import HomeViewModel from "./home_view_model";
import RecoveryStoriesUseCase from "../domain/recovery_stories_usecase";
import HomeRepository from "../data/home_repository";
import HomeService from "../data/api/home_service";
import HomeFeed from "./components/feed";
import RecoveryFeedsUseCase from "../domain/recovery_feeds_usecase";


export default function Home({ navigation }) {
  const [storiesState, setStories] = useState([])
  const [feedsState, setFeeds] = useState([])

  const repository = new HomeRepository(new HomeService());
  const recoveryStoriesUseCase = new RecoveryStoriesUseCase(repository);
  const recoveryFeedsUseCase = new RecoveryFeedsUseCase(repository);

  const homeViewModel = new HomeViewModel(recoveryStoriesUseCase, recoveryFeedsUseCase, navigation);

  useEffect(() => {
     
    (async function() {
      try {
          homeViewModel.recoveryAllStories((data) => {
            setStories(data);
          });


          homeViewModel.recoveryAllFeeds((data) => {
            setFeeds(data);
          })

      } catch (e) {
          console.error(e);
      }
  })();
     
  }, []);

  return (
    <View backgroundColor={'primary.200'} p={4} flex={1} alignItems="center">
      <SafeAreaView>
        <ScrollView>
          <HomeHeader title="InstagramFake" feedButton={true} likesButton={true} directButton={true} />
          <HomeStories
            stories={storiesState}
          />
          <HomeFeed feeds = {feedsState}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}