cmpe226_assignment
==================

Create a web site by node.js, express and jade


The procedures to run the project:

Step 1: Create MongoDB ReplicaSet

   In terminal1:

     > mongod --port 27017 --oplogSize 100 --dbpath /Users/Chi/Desktop/cmpe226_assignment/data/data1 --replSet rs1/localhost:27018
     
   In terminal2:

     > mongod --port 27018 --oplogSize 100 --dbpath /Users/Chi/Desktop/cmpe226_assignment/data/data2 --replSet rs1/localhost:27017
     
     
   In terminal3:

    > mongo
    > config = {_id:'rs1',members:[{_id:0, host:'localhost:27017'},{_id:1,host:'localhost:27018'}]}
    > rs.initiate(config)

Step 2: Run elasticsearch
    
    1. under project folder, there is a folder called "elasticsearch-1.1.1". You need to go to "bin" folder under "elasticsearch-1.1.1"

    2.
    > ./elasticsearch  -Des.default.config=../config/elasticsearch.yml
    
Step 3: Run the project
    
    // go to project directory
    > cd cmpe226_assignment
    
    // run it
    > npm start

Step 4: insert data
    
    
    Since I can't upload my data on github, you have to browse the page http://localhost:3000/insert

 Finally, the data can be seen under http://localhost:3000/


    
    
