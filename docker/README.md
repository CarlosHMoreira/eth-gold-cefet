# Angular-cli & Truffle Docker Image

This image was used to run a container wich has the necessary configuration to run this dapp, but don't worry, after install Docker you can run :

  `docker run -dit -v /your/path/to/dapp:/dapp/ -p 4200:4200 -u $(id -u):$(id -g) -w /dapp/ --name the-name-you-choose kmoreira620/angular-truffle`

And BOOM, your enviroment are build.

To run commands inside container, you can run:

  `docker exec -it the-name-you-choose COMMAND`

When you download the project for the first time, you have to compile the Solidity files, so run:

  `docker exec -it the-name-you-choose truffle compule`

And to start de server run:

`docker exec -it the-name-you-choose npm start`

Wait a little bit ..

Then go to you favorite browser at localhost:4200.
If everything run well you should see the dapp running nicely.

