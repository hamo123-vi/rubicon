# Instalation steps: 

## 1. Clone this repository on your local machine

    git clone https://github.com/hamo123-vi/rubicon.git

## 2. Install dependencies and set api key

###     a) Open root of cloned repository in terminal and paste command written below: 

    npm install axios dotenv eslint-plugin-react-hooks react-redux @reduxjs/toolkit react-router-dom redux-persist

###     b) Rename ".env.example" file into ".env" and paste your API KEY in the proper row

## 3. Run app on localhost with this command:

###     npm start


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


# Notices:

### 1. Component Card is stateful (as example) because of specification of task.

### 2. API is very large and it is very hard (beside good documentation) to find all data about videos.   To get video of movie/tv it is necessary to call separate route which gets you to array of videos. Videos can be saved on different sites and have different types. Regarding to all written in this notice, I have set that only ONE video with type "trailer" and site "YouTube" can be rendered.
