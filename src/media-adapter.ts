import {s3Adapter} from "@payloadcms/plugin-cloud-storage/s3";

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: '1046afebd37b8aa746e458dc0185440b',
      secretAccessKey: '73b6d85195a3dd40a330028fa00db41212c841438cb054bd2c8320658538e038',
    },
  },
  bucket: 'https://42cdad4e380d90fdb0aa08b44ae5f4d7.r2.cloudflarestorage.com/revotale',
})
export default adapter
