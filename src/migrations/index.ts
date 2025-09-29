import * as migration_20250929_225423 from './20250929_225423';

export const migrations = [
  {
    up: migration_20250929_225423.up,
    down: migration_20250929_225423.down,
    name: '20250929_225423'
  },
];
