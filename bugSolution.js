```javascript
//Correct usage of $inc operator for updating a field in MongoDB
db.collection.updateOne({fieldName: "value"}, {$inc: {fieldName: 1}}); //Increment by 1
db.collection.updateOne({fieldName: "value"}, {$inc: {fieldName: 5}}); //Increment by 5
```