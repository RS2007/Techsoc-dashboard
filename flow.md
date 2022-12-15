- User logs in 
- Can create workspace
- Can create board in workspace
- Generate cards in workspace
- Move cards around

## Data storage
- Local storage
  - username
  - password
  - workspaces
  - boards
  - cards
```js
const data = [{
  username:String,
  password:String,
  workspaces:[
  {
    title:"Something",
    description:"Somthing",
    boards:[{
      title:"",
      description:"",
      cards:{
        status:enum,
        title:"",
        description:"",
        comments:[]
      }
    },{},{}]
  }
  ]
}]
```
