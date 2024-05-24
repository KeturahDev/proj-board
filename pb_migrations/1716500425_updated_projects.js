/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irbtcp62n1gofwh")

  collection.listRule = "creator = @request.auth.id"
  collection.viewRule = "creator = @request.auth.id"
  collection.createRule = "creator = @request.auth.id"
  collection.updateRule = "creator = @request.auth.id"
  collection.deleteRule = "creator = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irbtcp62n1gofwh")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
