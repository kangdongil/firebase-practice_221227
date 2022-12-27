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
4. `firebase`를 `index.js`에 import하기
   ```javascript
   import firebase from "firebase/compat/app";
   ```