/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("ugc_videos");
  collection.listRule = "published = true || @request.auth.id != \"\"";
  collection.viewRule = "published = true || @request.auth.id != \"\"";
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("ugc_videos");
  collection.listRule = "@request.auth.id != \"\"";
  collection.viewRule = "@request.auth.id != \"\"";
  return app.save(collection);
})