# festival-grocery-app

A mobile app (Expo + React Native) to build **festival-wise grocery item lists** based on the number of invited people.

## Features
- Choose a festival (Diwali, Eid, Christmas, Pongal)
- Enter number of invited persons
- Automatically calculates required quantity for each grocery item
- Reusable calculation utility with unit tests

## Prerequisites
- Node.js 18+
- npm 9+
- Expo CLI (via `npx expo`)
- For device testing:
  - Android phone with **Expo Go** app, or Android Emulator
  - iPhone with **Expo Go** app, or iOS Simulator (macOS only)

## Install dependencies
```bash
npm install
```

## Run the app (proper demo flow)

### Version 1: Run on a physical phone (Expo Go)
1. Start development server:
   ```bash
   npm run start
   ```
2. Keep laptop and phone on the same Wi‑Fi.
3. Open Expo Go on your phone and scan the QR code shown in terminal/browser.

### Version 2: Run on emulator/simulator
1. Start development server:
   ```bash
   npm run start
   ```
2. Open in target platform:
   - Android emulator:
     ```bash
     npm run android
     ```
   - iOS simulator (macOS):
     ```bash
     npm run ios
     ```

### Optional: Run web preview
```bash
npm run web
```

## Run tests
```bash
npm test
```

## Troubleshooting
- If install fails with registry/permission errors, verify npm registry access and proxy settings.
- If QR scan does not connect, switch Expo connection mode to **Tunnel** from the Expo developer tools.
