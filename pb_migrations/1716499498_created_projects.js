/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "irbtcp62n1gofwh",
    "created": "2024-05-23 21:24:58.981Z",
    "updated": "2024-05-23 21:24:58.981Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pvd5fr18",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qksrgt3d",
        "name": "description",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("irbtcp62n1gofwh");

  return dao.deleteCollection(collection);
})
