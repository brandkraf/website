/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("admin_users");
  collection.indexes.push("CREATE UNIQUE INDEX idx_admin_users_username ON admin_users (username)");
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("admin_users");
  collection.indexes = collection.indexes.filter(idx => !idx.includes("idx_admin_users_username"));
  return app.save(collection);
})