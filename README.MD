REACT App
=================================
1. Install Node v6.*  ()
    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable
    node n

2. run: npm install
3. run tests:  mocha --compilers js:babel-register --recursive app/assets/test/


- to start server: nodemon server.js
- to start js compilation: gulp or gulp serve
   ============OR=============
  webpack-dev-server --progress --inline --hot   // Hotereplacement (in Vagrant not working) TODO: fix it

- run: nodemon server.js


=================================
To Minify js run: NODE_ENV=production gulp checkout-build
=================================
DEBUG Tests:
1. run in one terminal:  node-inspector
2. in another run: mocha [option] --debug-brk
   for example: mocha --compilers js:babel-register --recursive app/assets/test/ --debug-brk
=================================