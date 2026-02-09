# Changelog

## [0.4.0](https://github.com/RevoTale/cms/compare/v0.3.0...v0.4.0) (2026-02-09)


### Features

* finally, working prod build with the static prerendering ([68d069b](https://github.com/RevoTale/cms/commit/68d069bca9c2671af8ac1583c7cabf4e35c95e33))
* replace the eslint with biome and fix the regarding isues ([36cb7b8](https://github.com/RevoTale/cms/commit/36cb7b817c4b5dc2670c10cfe3dd0b1c6c25aa7c))
* unify public web and cms in one next runtime ([f7653c1](https://github.com/RevoTale/cms/commit/f7653c1681897b4800237a35be5aec1c8d8edda4))


### Bug Fixes

* build time force-static cause dfails ([0d67367](https://github.com/RevoTale/cms/commit/0d67367a3a6ae105e333d23665d3eaf1bb3406cc))
* failing CI due to missing typegen ([8dbdf1c](https://github.com/RevoTale/cms/commit/8dbdf1c845cc0b66d0876d673d8e225ea69d87fe))
* fix biome after codegen ([5796ef8](https://github.com/RevoTale/cms/commit/5796ef8014d09a534d271e4688350f2093769b8e))

## [0.3.0](https://github.com/RevoTale/cms/compare/v0.2.1...v0.3.0) (2026-02-07)


### Features

* import the UI and bug fixes for the sshort post admin editors ([97e046e](https://github.com/RevoTale/cms/commit/97e046e8d06bb41e568af8229581d725ac24046b))


### Bug Fixes

* codegen ([4513fbe](https://github.com/RevoTale/cms/commit/4513fbea8fd11ca53a2637bba7387bdf27b4670a))
* type error ([eada24a](https://github.com/RevoTale/cms/commit/eada24af4470965a8461fa1f5dff28b83502dcf7))

## [0.2.1](https://github.com/RevoTale/cms/compare/v0.2.0...v0.2.1) (2026-02-07)


### Bug Fixes

* increate gql complexity because queries fail ([839afe1](https://github.com/RevoTale/cms/commit/839afe192a27c836aa2b934a4f9552420a63080a))

## [0.2.0](https://github.com/RevoTale/cms/compare/v0.1.4...v0.2.0) (2026-02-07)


### Features

* add a strict testing CI before releae ([40de330](https://github.com/RevoTale/cms/commit/40de330f4844bf502ff6381b54d3558332c56b17))
* add a unified infratructure for codegen/linting/testing via go-task ([b65b905](https://github.com/RevoTale/cms/commit/b65b90514d414055e645ebc91db56f093f7021fc))
* custom endpoint for the available tags due to limitations ([7695bd2](https://github.com/RevoTale/cms/commit/7695bd2abfde19db9920f85cdbfd41f107b93a13))
* inverse join for tags ([926127e](https://github.com/RevoTale/cms/commit/926127e6c4d5caab55e3865d17d2ee842399bd4b))
* make the tweet-like blog posts support ([6cef7e2](https://github.com/RevoTale/cms/commit/6cef7e23858033b7bdfea133c79a01bcc8c49df3))
* prevent APi abuse, diable introspection and limit depth ([c00bcc4](https://github.com/RevoTale/cms/commit/c00bcc4cea2f83960c38cb72b086fb573893d0a2))
* show files on CI with codegen fail ([e2b3188](https://github.com/RevoTale/cms/commit/e2b3188a64e1f914cc62b2ec0b9762cf7c9ce07a))


### Bug Fixes

* code quality ([056c2c0](https://github.com/RevoTale/cms/commit/056c2c0f8e5546c209086febe217ad2e552d3101))
* die to lockfile from. pnpm dependabot ddos my CI ([2d31dbe](https://github.com/RevoTale/cms/commit/2d31dbeb53562a386e0d3fd91db1c9a477e2126f))
* disable pretier that caused eslint failing with bun. ([6ba5a48](https://github.com/RevoTale/cms/commit/6ba5a48c6cd6b2342338ae3b8ebbe35ca4ceccf6))
* disable pretier that caused eslint failing with bun. ([654f850](https://github.com/RevoTale/cms/commit/654f8506257f7cbbf7f38cabde5c491449841dc8))
* eslint errors. Trying make CI pass ([91607d5](https://github.com/RevoTale/cms/commit/91607d5e8c92cd85ac8b4e51990e0b2f2f2b6925))
* failing CI due to wrong config ([739fc3d](https://github.com/RevoTale/cms/commit/739fc3dc1eccc1d61788f1528f805ffb14426fa2))
* failing code egnerating with the bun runtime ([cd21dcb](https://github.com/RevoTale/cms/commit/cd21dcbf9b9a63e5e6517a0ecf572f473c80a0c8))
* fsiling CI due to misisng test ([bc8f541](https://github.com/RevoTale/cms/commit/bc8f5418128e7efb61f29a8212aa2ce9cad22707))
* polishing CI ([6c3963e](https://github.com/RevoTale/cms/commit/6c3963eb2e1b4610e030094c16d93a3d89f5208d))
* remove useless token ([da03c52](https://github.com/RevoTale/cms/commit/da03c526e84e32d9d307de3adf346f674c562e9d))
* trying to fix failing CI by upgrading packages ([08d1402](https://github.com/RevoTale/cms/commit/08d1402187715692a21619551a87abc6c7a762d1))

## [0.1.4](https://github.com/RevoTale/cms/compare/v0.1.3...v0.1.4) (2026-01-06)


### Bug Fixes

* refactor npm scripts to be simple and fix Bun fails to execute some scripts ([4c8cbb9](https://github.com/RevoTale/cms/commit/4c8cbb9b2fdffb7319d637fc21409b8cf2aa13bd))
* runtime error where `jose` module not found due to the bug in NextJs. According to the https://github.com/vercel/next.js/issues/86866#issuecomment-3716488197 ([02d2c36](https://github.com/RevoTale/cms/commit/02d2c362c856918c88c6bafdaebc31a58b74b901))

## [0.1.3](https://github.com/RevoTale/cms/compare/v0.1.2...v0.1.3) (2026-01-06)


### Bug Fixes

* add jose as deps to prevent runtime fail ([bb852d9](https://github.com/RevoTale/cms/commit/bb852d95575ba9c963940dff1e9120adaf5fa6a3))
* release with version included ([2f8ce1a](https://github.com/RevoTale/cms/commit/2f8ce1adef4a75dfa3838e2ca541cd2597778b03))

## [0.1.2](https://github.com/RevoTale/cms/compare/v0.1.1...v0.1.2) (2026-01-06)


### Bug Fixes

* Increase max content size to allow post my last blog ([e882709](https://github.com/RevoTale/cms/commit/e8827090ded09e078e30ab775a9e82ae71fe8fb1))
* latest packages ([7efe59a](https://github.com/RevoTale/cms/commit/7efe59a32b98bdd849675f0fe73a6ae7e6c0d270))
* Refactor secret env and host to make generrate scripts work without env provided ([7bcfa0e](https://github.com/RevoTale/cms/commit/7bcfa0e9014f9efbc713a1848121b6c2c865f88f))

## [0.1.1](https://github.com/RevoTale/cms/compare/v0.1.0...v0.1.1) (2026-01-05)


### Bug Fixes

* package mismathc version ([585c602](https://github.com/RevoTale/cms/commit/585c602d9d3d2946bd5f89663ba38a42fd3440c5))

## [0.1.0](https://github.com/RevoTale/cms/compare/0.0.72...v0.1.0) (2026-01-05)


### Features

* Replace nodejs and pnpm with bun completely. Add semver release process ([085f347](https://github.com/RevoTale/cms/commit/085f347ed579791a050b803e6dfea201f8d9657a))
* semver release implemented ([d3e84f7](https://github.com/RevoTale/cms/commit/d3e84f746db76539af1355b64c56ce3948c28994))
