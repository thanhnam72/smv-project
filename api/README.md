# EContract.API-DS

Project EContract for BE

## Path API

```
http://<domain>:<port>/api/<controller>/<action>/:id

Ex:
GET: http://localhost:1338/api/user/get
```

## Setting config server

All configiguation about server into file config.json

```
port: set port for server listen
security: 
	tokenLife: time token timout
	EnableAuth: set use token authen
dbconfig: config info to connect database by sequlize
...
```

## Projects Using

* [Sequelizer](https://sequelize.readthedocs.io/en/latest/)
* [Document Sequelize] (http://docs.sequelizejs.com/manual/tutorial/instances.html)