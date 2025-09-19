# About

This is a NodeJS React application that integrates with Spring boot API to serve vending machine functionality. Its a two page app with a landing page being a list of all the the products and their prices. You can click on the product to purchase it, which takes you to the 2nd page.

For convience a search functionality has been added on the landing page to speedup finding the product of interest.

Known issues:
   1. Sometimes products fail to load the full list due to image sizes being used. (Just refresh/Restart until a fix is in)
   2. Still to implement admin page to maintain vending machine, like adding products and petty cash. Only back end API areimplemented for admin functionalities

# Build

To build the app GitHub actions is used, where few steps, like packaging and testing are ran. From this public GitHub repository : https://github.com/Sandile100/vending-machine-ui

# Docker Hub integration

Successful Build creates a docker image as part of CI/CD for the project and uploads it to public Docker Hub repository here : https://hub.docker.com/repository/docker/sandilembatha/vending-machine-ui

# Runing the project

To run the project including the backend api, a docker compose file has been added to the root folder of this project. This requires Docker to be install on the host machine. And the command below should be issued on the same directory as the docker-compose.yml file 

Command : docker compose -f .\docker-compose.yml up

Alternatively one can checkout the project and run 'npm run build', this will require npm to be install on the host machine.

The application will then be served on http:localhost:3000