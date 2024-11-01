import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'counterApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
