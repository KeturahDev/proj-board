/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irbtcp62n1gofwh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sg7h6nu3",
    "name": "creator",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irbtcp62n1gofwh")

  // remove
  collection.schema.removeField("sg7h6nu3")

  return dao.saveCollection(collection)
})
