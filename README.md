#How to Mongo Tutorial

### Install packages


At first we install homebrew
```
  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```

Followed by node

```
  $ brew install node
```

If you have already installed node, check version

```
  $ node -v
```

Install the following packages with
```
 $ npm i --save-dev mocha nodemon mongoose
```
## MongoDB
---
```
 $ mongod
```

If you run for the first time
take ownership of the mongoDB

```
 $ whoami
 $ sudo chown -Rv username /data/db
```

-Rv prints out the list of dir changed

#### to run mongo server in background

careful mongoDB is run everytime your computer runs

```
  $ brew services start mongo
```


##Robomongo
---
Super cool tool that gives as a graphical overview over all
data in our mongodb collections.

Just download Robomongo from
