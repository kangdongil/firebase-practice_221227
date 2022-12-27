## CRA로 React Project 준비하기
1. `Create-React-App` 설치하기
```shell
npx create-react-app .
```
2. `index.js`와 `App.js` 제외한 `src/` 정리하기
3. `src/component/`에 `App.js` 옮기기

## Firebase 설치하기
1. Firebase 사이트에서 프로젝트 만들기: [`Link`](https://console.firebase.google.com/)
2. 프로젝트 안에 Web App 시작하기
   - Analytics 설정해제
3. `Firebase SDK`를 `src/firebase.js`에 넣기
   ```javascript
   import { initializeApp } from "firebase/app";

   const firebaseConfig = {
   apiKey: "...",
   authDomain: "...",
   projectId: "...",
   storageBucket: "...",
   messagingSenderId: "...",
   appId: "...",
   };

   const app = initializeApp(firebaseConfig);
   export default app;
   ```
   - `.env`에 key값들을 넣어 `.gitignore`하기
     - CRA env변수는 `REACT_APP_`으로 시작하기
4. `firebase`를 `index.js`에 import하기
   ```javascript
   import firebase from "firebase/compat/app";
   ```

## React-Router-Dom 구축하기
- v6.0 기점 이전처럼 React-Router-Dom을 사용하고 싶다면 `BrowserRouter`를,   
  최신 방식으로 사용하고 싶다면 `createBrowserRouter`를 사용하기

### `BrowserRouter` 사용하기(`Classic Style`)
1. `Route Component` 만들기
   - `src/routes/` 만들기
   - `TitleCase`로 Route Component 만들기
2. `router.js` 만들기
3. BrowserRouter 구성요소를 Import하기
   - `BrowserRouter(as Router)`, `Routes`, `Route`
   ```javascript
      import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
   ```

## 