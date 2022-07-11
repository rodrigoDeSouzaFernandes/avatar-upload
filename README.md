
# Avatar uploader

This project allows the user to upload an image and crop it, zoom and rotate it,
and then save it as their avatar.

![crop](/media/readme/crop.jpeg)

<br>

## Running the project

first clone the repository
```
    git clone git@github.com:rodrigoDeSouzaFernandes/avatar-upload.git avatar-uploader
```

enter the project folder
```
    cd avatar-uploader
```

install the dependencies
```
    npm install
```

Now we are ready to run the project
```
    npm run dev
```

<br>


## Running tests

#### be careful to run the project on port 3000, otherwise you can change the `baseUrl` in `cypress.config.ts` to match your current port.


```
    npm test
```
![test](/media/readme/test.jpeg)



```
    npm run test:open
```
in this case you must check if the `cypress/downloads` folder exists and delete any file it contains. with the `npm test` command it is automatically deleted.
![test:open](/media/readme/testopen.jpeg)