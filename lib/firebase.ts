import * as admin from "firebase-admin";

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: "service_account",
      project_id: "communitiescommunities",
      private_key_id: "4a212f1865d8d0c854351f6e332406f5d541d222",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQknJCiEgLMiBY\n1pc9Q22c28feiHX8JKM54C+84VXeckF+gMXliAnIYefqVa+CSip/S9MXMizajhjL\nit7wzM0J56bzJmD0YTz512SrjYJt6s/KXaQ+8q237bJqgJQ1zcYIU6rEOy53UpbF\nl3eCE9c1ssvsZCopXepyNSwscb1BhVE/Mj2+BDFM+Tf0dzgtNgLubI07N48GF3nL\nWdIpkzAADDQPXK00ijscU+/plfv2S3fdyvSRyEjbsOhjQFRbMUsombWuwOWln+u0\nXqLx3iTOLkWo/wNPiBLHNkYgUZ+UoXD2nJR5p8LZbqDnM+KPV/2cqofqPDxxmUGe\nhDgI5RTrAgMBAAECggEASL4avZucTNNRtso4+zPuIdwBTFqZk7QPfZrz61NHyIpe\nz0kIPDKC/vEummsCCFXnlngSii+Et0EB4tNvR9qV1FOHxZvoCrNzOcvmn3J+P+m6\nSOD57L5k2hY7uKtZhZ5b6AGOOFxPq2wRi551HtfeoirWtn6EueK4ZtamrmWI1TWR\nuPzURxiyrAaKd/8sgaBlrkct+zbUbebLsdsxfdkw2qmsKwMi5Z9nFTJeqkcF1+E4\n7In3Ym8FlonLgMs5ZhI/B9BL67VIRwu+SBakggohLexl/gRS7u2vRCtUKfFtwaOj\nq/GdaghKNG5FuQhAnwpURW1gfnAnJZg4GGmTmPYKUQKBgQDxMVKifTCB10zWcp74\n/PPgoQ9oA0+UT+EcabdQvHMtTA1Gzc6OXnpxq29NhmAggjjJ5rsOXv0RcTz8Wz0b\n063bxcxs8KpMSJrCdPMoh4aLeF4eARYcsXcpH/Vt1/lNX1A48UE0jxcNwMLz8QSn\n65VOFYkHJkmYlGk7WA0m3HytKQKBgQDdYHIFoeAyzlSq6Ayil2PAzym78cu8nEJg\nMk32qwrm2aUA2Tkc6ZdbF1ft7L1SG6isT2X2HtSrSRVhuerkYUIJaJxusxOKp2wH\ntJWpg+ehIT6lAJ86M2PB5+p0ecljooN1eBwRX8b90lFPzqjjWrEZGjmvUKLG7E24\nKK01Rsbf8wKBgAk4EmmFkXoVCanUvcDUolm+rkESh1Mq7nbQj6I1Yc2kb4l6Sl/k\nupdnrxxue3QiphsJh7LX7KJjCqq2rhJHOAkDeXnchRXfXJL8N2MgMwNXuXk6H2c/\nXUekIhRtwei0MPPMPOrOYVo0OP9sAfqNJarTZeZxDzUWzyLmjbIjkVxpAoGBAIZi\nzdTtd5Rf/LXjOAhbroqVN9iH6A4PLZwH7ZwYKP4KkUf6ldkfVGpPuWkNlcAKWlJ/\nwH2wKZnxO7GfkyAgil37yzrIKsy45bOnxFKraClAbS7tObuzBpPnnUQnykFZnkPp\nLeC+K6ZZzlKMOaoKnAeJDAuI/8eSG3v39W2qEYBRAoGAD6plr2KyVETb4D1mkFB0\nSL91H8KfUqzw0fruLbKoCcSE7pzBFRfHKhfPgy6w2uHf1nUzYOV9JMuluTtXT6rX\nBjxmwI+oFYl37QtdejO0putw+NgRQAYzEbURVpMaOiGnrertxlTTEfk0xiZaCl7C\neAZxvOUDMOsg1eOFygxUS5g=\n-----END PRIVATE KEY-----\n",
      client_email:
        "firebase-adminsdk-xr0n3@communitiescommunities.iam.gserviceaccount.com",
      client_id: "100001935174521128610",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url:
        "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xr0n3%40communitiescommunities.iam.gserviceaccount.com",
    } as admin.ServiceAccount),
  });
}

export const firestoreAdmin = admin.firestore();
export const authAdmin = admin.auth();
