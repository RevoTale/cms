import * as migration_20250929_223906 from './20250929_223906';
import * as migration_20250929_224716 from './20250929_224716';

export const migrations = [
  {
    up: migration_20250929_223906.up,
    down: migration_20250929_223906.down,
    name: '20250929_223906',
  },
  {
    up: migration_20250929_224716.up,
    down: migration_20250929_224716.down,
    name: '20250929_224716'
  },
];
