# Welcome to Travel Bucket List app 👋


## Get started
1. Clone reposiory 

   ```bash
   git clone https://github.com/amanyara21/bucketlistapp
   ```

2. Install dependencies

   ```bash
   npm install
   ```
3. Run App

   ```bash
   npm run android
   npm run ios
   npm run web
   ```


## 🛠️ Get Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/amanyara21/bucketlistapp
   cd bucketlistapp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run android   # For Android
   npm run ios       # For iOS (MacOS only)
   npm run web       # For Web
   ```

---

## 🧱 App Structure & Approach

```
├── app
│   └── index.js          # Main entry point. Contains all app logic: add, fetch, and delete location data using AsyncStorage.
│
├── components
│   ├── AddItem.jsx       # Contains input field and button for adding new travel destinations.
│   └── ListItems.jsx     # Renders each item (destination) with 'Visited' toggle and delete button.
```

### 🔁 Flow of the App

* User enters a location in `AddItem.jsx`.
* On clicking **Add**, the `index.js` adds it to **AsyncStorage**.
* The list is fetched and displayed using `FlatList` with

## 🎥 App Demo Video

<video src="/appvideo.mp4" width="180" height="400" autoplay muted loop playsinline></video>



---

## 🖼️ Screenshot

![Travel Bucket List Screenshot](/Appss.jpg)

