import * as V1 from './v1'
import * as admin from 'firebase-admin';
admin.initializeApp();

export const v1 = { ...V1 };
