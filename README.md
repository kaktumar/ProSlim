# ProSlim Protein based Slimming App


# TODO  

- Create App Mockup: DONE:

![Alt text](assets/development_resources/mockup.png?raw=true "Mockup")

- Create Redux Data Model:

ReduxStore: {  
  auth: {  
    loginToken: string // PERSIST LOCAL,  
    firstTimeLoading: boolean // PERSIST LOCAL,  

  },  

  settings: {  
    isMetric: boolean // PERSIST LOCAL,  
    //pass  
  },  

  loading: boolean,  

  error: string,  

  meals: {  
    fetchQueryObject: object,  
    fetchQuery: string,  
    fetchedRecipes: array  
  },  

  personal: {  
    name: string // PERSIST LOCAL,  
    initialWeight: string // PERSIST LOCAL,  
    targetWeight: string // PERSIST LOCAL,  
    logs: array // PERSIST LOCAL,  
    todayLog: object,  
    savedMeals: array // PERSIST LOCAL,  

  },  

  databaseBackup: {  
    logs: array // PERSIST ON FIREBASE,  
    savedMeals: array // PERSIST ON FIREBASE,  

  }  

  nav: object // React Native Navigation ,  

}  


- Refactor Node.js Mongo Backend for Recipes. Add images and recipe names.

- Write Google Cloud functions to fetch recipes from that API on backend

- Reconfigure React Navigation config for the new App

- Add styling and diet-friendly colors based on relational psychology

- Write Welcome Slides  

- Write Diet info screen

- Write allowed foods screen

- Write Recipe deck (fetched from cloud)

- Write Saved Recipes and create meal screens

- Write Logs and Logging screen

- Write Graph screen

- Write logic for recipe/proto veg day selection

- Write social share api/logic

- Find pictures of slim people (including myself hehe) as backgrounds?

- Explore payment options to pay for the backend costs

- Figure out and add tests (unit tests, integration tests, component tests)
