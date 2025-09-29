import * as migration_20250929_223906 from './20250929_223906';

export const migrations = [
  {
    up: migration_20250929_223906.up,
    down: migration_20250929_223906.down,
    name: '20250929_223906'
  },
];
