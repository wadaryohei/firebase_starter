import * as functions from 'firebase-functions'

export const onCreate = functions.firestore
  .document('/versions/{version}/users/{userID}')
  .onCreate(async (snapshot, context) => {
    // do anything
  })

export const onUpdate = functions.firestore
  .document('/versions/{version}/users/{userID}')
  .onUpdate(async (snapshot, context) => {
    // do anything
  })

export const onDelete = functions.firestore
  .document('/versions/{version}/users/{userID}')
  .onDelete(async (snapshot, context) => {
    // do anything
  })
