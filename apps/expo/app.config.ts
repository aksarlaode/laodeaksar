import type { ExpoConfig } from "@expo/config";

const CLERK_PUBLISHABLE_KEY = "pk_test_Y2xlYW4tcGFyYWtlZXQtMS5jbGVyay5hY2NvdW50cy5kZXYk";

const defineConfig = (): ExpoConfig => ({
  name: "laodeaksar",
  slug: "laodeaksar",
  scheme: "laodeaksar",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
  },
  extra: {
    eas: {
      projectId: "a6cb2e86-6cd9-4dfa-ac61-517eacc76af8",
    },
    CLERK_PUBLISHABLE_KEY,
  },
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;
