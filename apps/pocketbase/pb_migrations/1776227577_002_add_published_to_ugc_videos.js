/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("ugc_videos");

  const existing = collection.fields.getByName("published");
  if (existing) {
    if (existing.type === "bool") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("published"); // exists with wrong type, remove first
  }

  collection.fields.add(new BoolField({
    name: "published",
    required: false
  }));

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("ugc_videos");
  collection.fields.removeByName("published");
  return app.save(collection);
})