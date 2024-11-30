# FullStackLearning
 
Exercises and course material in the course, Full stack from University of Helsinki

###  Create new vite project
```shell
npm create vite@latest <name> -- --template react
cd <name>
npm install
npm install axios
npm run dev
```

### Json-server as backend
```shell
npm install -g json-server (globally)
```


Install json-server as a development dependency (only used during development)
```shell
npm install json-server --save-dev
```

run server
```shell
npx json-server --port 3001 --watch db.json
```

or in package.json, "scripts"
"server": "json-server -p 3001 --watch db.json"
```shell
npm run server
```
