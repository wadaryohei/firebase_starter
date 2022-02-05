import * as functions from 'firebase-functions'

export const onCreate = functions.firestore
  .document('/versions/{version}/product/{productID}')
  .onCreate(async (snapshot, context) => {
    // do anything
  })

export const onUpdate = functions.firestore
  .document('/versions/{version}/product/{productID}')
  .onUpdate(async (snapshot, context) => {
    // do anything
  })

export const onDelete = functions.firestore
  .document('/versions/{version}/product/{productID}')
  .onDelete(async (snapshot, context) => {
    // do anything
  })
