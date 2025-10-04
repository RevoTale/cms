import * as migration_20250929_225423 from './20250929_225423';
import * as migration_20251001_075702 from './20251001_075702';
import * as migration_20251001_152209 from './20251001_152209';
import * as migration_20251001_153836 from './20251001_153836';
import * as migration_20251001_172400 from './20251001_172400';
import * as migration_20251002_072807 from './20251002_072807';
import * as migration_20251004_221628 from './20251004_221628';
import * as migration_20251004_224005 from './20251004_224005';

export const migrations = [
  {
    up: migration_20250929_225423.up,
    down: migration_20250929_225423.down,
    name: '20250929_225423',
  },
  {
    up: migration_20251001_075702.up,
    down: migration_20251001_075702.down,
    name: '20251001_075702',
  },
  {
    up: migration_20251001_152209.up,
    down: migration_20251001_152209.down,
    name: '20251001_152209',
  },
  {
    up: migration_20251001_153836.up,
    down: migration_20251001_153836.down,
    name: '20251001_153836',
  },
  {
    up: migration_20251001_172400.up,
    down: migration_20251001_172400.down,
    name: '20251001_172400',
  },
  {
    up: migration_20251002_072807.up,
    down: migration_20251002_072807.down,
    name: '20251002_072807',
  },
  {
    up: migration_20251004_221628.up,
    down: migration_20251004_221628.down,
    name: '20251004_221628',
  },
  {
    up: migration_20251004_224005.up,
    down: migration_20251004_224005.down,
    name: '20251004_224005'
  },
];
