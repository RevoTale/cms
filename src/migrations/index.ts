import * as migration_20250929_225423 from './20250929_225423';
import * as migration_20251001_075702 from './20251001_075702';

export const migrations = [
  {
    up: migration_20250929_225423.up,
    down: migration_20250929_225423.down,
    name: '20250929_225423',
  },
  {
    up: migration_20251001_075702.up,
    down: migration_20251001_075702.down,
    name: '20251001_075702'
  },
];
