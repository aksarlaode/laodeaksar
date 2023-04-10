import React from "react";
import { Button, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_discord" });

  const handleSignInWithDiscordPress = React.useCallback(async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { createdSessionId, setActive } = await startOAuthFlow();
      if (createdSessionId) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        setActive({ session: createdSessionId });
      } else {
        // Modify this code to use signIn or signUp to set this missing requirements you set in your dashboard.
        throw new Error(
          "There are unmet requirements, modifiy this else to handle them",
        );
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      console.log("error signing in", err);
    }
  }, [startOAuthFlow]);

  return (
    <View className="rounded-lg border-2 border-gray-500 p-4">
      <Button
        title="Sign in with Discord"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onPress={handleSignInWithDiscordPress}
      />
    </View>
  );
};

export default SignInWithOAuth;
