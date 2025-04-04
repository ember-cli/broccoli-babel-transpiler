# Changelog





## v8.0.2 (2025-04-01)

#### :bug: Bug Fix
* [#241](https://github.com/ember-cli/broccoli-babel-transpiler/pull/241) Separate async workpool from earlier sync ones ([@ef4](https://github.com/ef4))

#### Committers: 1
- Edward Faulkner ([@ef4](https://github.com/ef4))


## v8.0.1 (2025-03-19)

#### :bug: Bug Fix
* [#239](https://github.com/babel/broccoli-babel-transpiler/pull/239) Support async babel plugins ([@ef4](https://github.com/ef4))

#### Committers: 1
- Edward Faulkner ([@ef4](https://github.com/ef4))


## v8.0.0 (2023-08-17)

#### :boom: Breaking Change
* [#237](https://github.com/babel/broccoli-babel-transpiler/pull/237) Drop Node 14 support ([@kategengler](https://github.com/kategengler))
* [#225](https://github.com/babel/broccoli-babel-transpiler/pull/225) Drop support for Node v17 and add support for Node v18 ([@bertdeblock](https://github.com/bertdeblock))
* [#221](https://github.com/babel/broccoli-babel-transpiler/pull/221) Move `@babel/core` to `peerDependencies` to resolve peer dependency warnings and errors ([@bertdeblock](https://github.com/bertdeblock))
* [#210](https://github.com/babel/broccoli-babel-transpiler/pull/210) Drop Node 10, 12, and 13 support ([@rwjblue](https://github.com/rwjblue))
* [#193](https://github.com/babel/broccoli-babel-transpiler/pull/193) Separate Broccoli and Babel options ([@nlfurniss](https://github.com/nlfurniss))
* [#191](https://github.com/babel/broccoli-babel-transpiler/pull/191) Remove `browserPolyfill` option ([@nlfurniss](https://github.com/nlfurniss))

#### :rocket: Enhancement
* [#190](https://github.com/babel/broccoli-babel-transpiler/pull/190) Update `workerpool` to latest (avoiding deprecations) ([@nlfurniss](https://github.com/nlfurniss))

#### :bug: Bug Fix
* [#221](https://github.com/babel/broccoli-babel-transpiler/pull/221) Move `@babel/core` to `peerDependencies` to resolve peer dependency warnings and errors ([@bertdeblock](https://github.com/bertdeblock))
* [#209](https://github.com/babel/broccoli-babel-transpiler/pull/209) Ensure the worker processes do not crash when parsing invalid syntax ([@rwjblue](https://github.com/rwjblue))

#### :memo: Documentation
* [#192](https://github.com/babel/broccoli-babel-transpiler/pull/192) Tweak package description in README.md ([@gabrielcsapo](https://github.com/gabrielcsapo))
* [#230](https://github.com/babel/broccoli-babel-transpiler/pull/230) Fix typo in docs ([@bertdeblock](https://github.com/bertdeblock))

#### :house: Internal
* [#226](https://github.com/babel/broccoli-babel-transpiler/pull/226) Add release automation ([@rwjblue](https://github.com/rwjblue))
* [#214](https://github.com/babel/broccoli-babel-transpiler/pull/214) Migrate from yarn@1 to npm ([@rwjblue](https://github.com/rwjblue))
* [#215](https://github.com/babel/broccoli-babel-transpiler/pull/215) Update `@babel/*` dependencies/devDependencies ([@rwjblue](https://github.com/rwjblue))
* [#200](https://github.com/babel/broccoli-babel-transpiler/pull/200) Remove @babel/polyfill dependency ([@nlfurniss](https://github.com/nlfurniss))
* [#195](https://github.com/babel/broccoli-babel-transpiler/pull/195) Remove TravisCI and AppVeyor ([@rwjblue](https://github.com/rwjblue))
* [#183](https://github.com/babel/broccoli-babel-transpiler/pull/183) Add GitHub Actions CI setup. ([@rwjblue](https://github.com/rwjblue))

#### Committers: 4
- Bert De Block ([@bertdeblock](https://github.com/bertdeblock))
- Gabriel Csapo ([@gabrielcsapo](https://github.com/gabrielcsapo))
- Nathaniel Furniss ([@nlfurniss](https://github.com/nlfurniss))
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))
- Katie Gengler ([@kategengler](https://github.com/kategengler))


## v8.0.0-beta.1 (2022-10-07)

#### :boom: Breaking Change
* [#225](https://github.com/babel/broccoli-babel-transpiler/pull/225) Drop support for Node v17 and add support for Node v18 ([@bertdeblock](https://github.com/bertdeblock))
* [#221](https://github.com/babel/broccoli-babel-transpiler/pull/221) Move `@babel/core` to `peerDependencies` to resolve peer dependency warnings and errors ([@bertdeblock](https://github.com/bertdeblock))
* [#210](https://github.com/babel/broccoli-babel-transpiler/pull/210) Drop Node 10, 12, and 13 support ([@rwjblue](https://github.com/rwjblue))
* [#193](https://github.com/babel/broccoli-babel-transpiler/pull/193) Separate Broccoli and Babel options ([@nlfurniss](https://github.com/nlfurniss))
* [#191](https://github.com/babel/broccoli-babel-transpiler/pull/191) Remove `browserPolyfill` option ([@nlfurniss](https://github.com/nlfurniss))

#### :rocket: Enhancement
* [#190](https://github.com/babel/broccoli-babel-transpiler/pull/190) Update `workerpool` to latest (avoiding deprecations) ([@nlfurniss](https://github.com/nlfurniss))

#### :bug: Bug Fix
* [#221](https://github.com/babel/broccoli-babel-transpiler/pull/221) Move `@babel/core` to `peerDependencies` to resolve peer dependency warnings and errors ([@bertdeblock](https://github.com/bertdeblock))
* [#209](https://github.com/babel/broccoli-babel-transpiler/pull/209) Ensure the worker processes do not crash when parsing invalid syntax ([@rwjblue](https://github.com/rwjblue))

#### :memo: Documentation
* [#192](https://github.com/babel/broccoli-babel-transpiler/pull/192) Tweak package description in README.md ([@gabrielcsapo](https://github.com/gabrielcsapo))

#### :house: Internal
* [#226](https://github.com/babel/broccoli-babel-transpiler/pull/226) Add release automation ([@rwjblue](https://github.com/rwjblue))
* [#214](https://github.com/babel/broccoli-babel-transpiler/pull/214) Migrate from yarn@1 to npm ([@rwjblue](https://github.com/rwjblue))
* [#215](https://github.com/babel/broccoli-babel-transpiler/pull/215) Update `@babel/*` dependencies/devDependencies ([@rwjblue](https://github.com/rwjblue))
* [#200](https://github.com/babel/broccoli-babel-transpiler/pull/200) Remove @babel/polyfill dependency ([@nlfurniss](https://github.com/nlfurniss))
* [#195](https://github.com/babel/broccoli-babel-transpiler/pull/195) Remove TravisCI and AppVeyor ([@rwjblue](https://github.com/rwjblue))
* [#183](https://github.com/babel/broccoli-babel-transpiler/pull/183) Add GitHub Actions CI setup. ([@rwjblue](https://github.com/rwjblue))

#### Committers: 4
- Bert De Block ([@bertdeblock](https://github.com/bertdeblock))
- Gabriel Csapo ([@gabrielcsapo](https://github.com/gabrielcsapo))
- Nathaniel Furniss ([@nlfurniss](https://github.com/nlfurniss))
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))


## v7.7.0 (2020-07-30)

#### :rocket: Enhancement
* [#186](https://github.com/babel/broccoli-babel-transpiler/pull/186) Update minimum @babel/core version to 7.11.0. ([@rwjblue](https://github.com/rwjblue))

#### :memo: Documentation
* [#184](https://github.com/babel/broccoli-babel-transpiler/pull/184) Fix typo in README ([@kant](https://github.com/kant))

#### Committers: 2
- Darío Hereñú ([@kant](https://github.com/kant))
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))

##  v7.6.0 (2020-06-23)

#### :rocket: Enhancement
* [#181](https://github.com/babel/broccoli-babel-transpiler/pull/181) [feature] adds heimdall monitor for logging information helpful for debugging babel process ([@gabrielcsapo](https://github.com/gabrielcsapo))

#### Committers: 1
- Gabriel Csapo ([@gabrielcsapo](https://github.com/gabrielcsapo))

## v7.5.0 (2020-06-12)

#### :rocket: Enhancement
* [#182](https://github.com/babel/broccoli-babel-transpiler/pull/182) Update the minimum Babel dependencies to 7.10 ([@rwjblue](https://github.com/rwjblue))

#### :house: Internal
* [#178](https://github.com/babel/broccoli-babel-transpiler/pull/178) Add dependabot config file ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))

## v7.4.0 (2020-01-22)

#### :rocket: Enhancement
* [#179](https://github.com/babel/broccoli-babel-transpiler/pull/179) Update Babel dependencies to v7.8.3 ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v7.3.0 (2019-09-23)

#### :bug: Bug Fix
* [#173](https://github.com/babel/broccoli-babel-transpiler/pull/173) Fix options hash generation ([@stefanpenner](https://github.com/stefanpenner))

#### Committers: 1
- Stefan Penner ([@stefanpenner](https://github.com/stefanpenner))


## v7.2.0 (2019-02-25)

* If available use node workerThreads
* upgrade and cleanup dependencies


## v7.1.2 (2019-02-08)

#### :bug: Bug Fix
* [#163](https://github.com/babel/broccoli-babel-transpiler/pull/163) Prevent mismatch between worker and host process. ([@rwjblue](https://github.com/rwjblue))
* [#162](https://github.com/babel/broccoli-babel-transpiler/pull/162) Fix browser polyfill for Babel 7 ([@Elberet](https://github.com/Elberet))

#### :memo: Documentation
* [#160](https://github.com/babel/broccoli-babel-transpiler/pull/160) Add Changelog ([@Turbo87](https://github.com/Turbo87))

#### Committers: 3
- Jens Maier ([@Elberet](https://github.com/Elberet))
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v7.1.1 (2018-12-06)

#### :bug: Bug Fix
* [#159](https://github.com/babel/broccoli-babel-transpiler/pull/159) parallel-api: Fix "Cannot read property '_parallelBabel' of null" error ([@Turbo87](https://github.com/Turbo87))

#### :memo: Documentation
* [#151](https://github.com/babel/broccoli-babel-transpiler/pull/151) Update README.md ([@SparshithNR](https://github.com/SparshithNR))

#### :house: Internal
* [#157](https://github.com/babel/broccoli-babel-transpiler/pull/157) TravisCI: Remove deprecated `sudo: false` option ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- SparshithNRai ([@SparshithNR](https://github.com/SparshithNR))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v7.1.0 (2018-10-29)

#### :rocket: Enhancement
* [#154](https://github.com/babel/broccoli-babel-transpiler/pull/154) Pass cachekey to worker ([@arthirm](https://github.com/arthirm))

#### Committers: 1
- Arthi ([@arthirm](https://github.com/arthirm))


## v7.0.0 (2018-08-28)

#### :boom: Breaking Change
* [#150](https://github.com/babel/broccoli-babel-transpiler/pull/150) Babel 7 ([@rwjblue](https://github.com/rwjblue))

#### :bug: Bug Fix
* [#148](https://github.com/babel/broccoli-babel-transpiler/pull/148) Deserialize nested arrays in the parallel API correctly ([@dfreeman](https://github.com/dfreeman))

#### :house: Internal
* [#149](https://github.com/babel/broccoli-babel-transpiler/pull/149) Get tests passing with Babel 7? ([@dfreeman](https://github.com/dfreeman))
* [#131](https://github.com/babel/broccoli-babel-transpiler/pull/131) CI: Use `skip_cleanup` to not revert `auto-dist-tag` adjustment ([@Turbo87](https://github.com/Turbo87))

#### Committers: 3
- Dan Freeman ([@dfreeman](https://github.com/dfreeman))
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v6.5.1 (2018-12-06)

#### :bug: Bug Fix
* [#159](https://github.com/babel/broccoli-babel-transpiler/pull/159) parallel-api: Fix "Cannot read property '_parallelBabel' of null" error ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v6.5.0 (2018-07-24)

#### :rocket: Enhancement
* [#146](https://github.com/babel/broccoli-babel-transpiler/pull/146) Improve error ([@stefanpenner](https://github.com/stefanpenner))

#### Committers: 1
- Stefan Penner ([@stefanpenner](https://github.com/stefanpenner))


## v6.4.5 (2018-07-18)

#### :rocket: Enhancement
* [#145](https://github.com/babel/broccoli-babel-transpiler/pull/145) Enhance throwUnlessParallelizable ([@stefanpenner](https://github.com/stefanpenner))

#### :memo: Documentation
* [#143](https://github.com/babel/broccoli-babel-transpiler/pull/143) Remove 'JOBS=0' from disable parallelization section of README ([@charlespierce](https://github.com/charlespierce))

#### Committers: 2
- Charles Pierce ([@charlespierce](https://github.com/charlespierce))
- Stefan Penner ([@stefanpenner](https://github.com/stefanpenner))


## v6.4.3 (2018-05-30)

#### :bug: Bug Fix
* [#142](https://github.com/babel/broccoli-babel-transpiler/pull/142) remove debugger ([@xg-wang](https://github.com/xg-wang))

#### Committers: 1
- Thomas Wang ([@xg-wang](https://github.com/xg-wang))


## v6.4.2 (2018-05-22)

#### :house: Internal
* [#140](https://github.com/babel/broccoli-babel-transpiler/pull/140) refactor `throwUnlessParallelizable` option internals ([@stefanpenner](https://github.com/stefanpenner))

#### Committers: 1
- Stefan Penner ([@stefanpenner](https://github.com/stefanpenner))


## v6.4.0 (2018-05-21)

#### :rocket: Enhancement
* [#138](https://github.com/babel/broccoli-babel-transpiler/pull/138) Upgrade deps ([@stefanpenner](https://github.com/stefanpenner))
* [#137](https://github.com/babel/broccoli-babel-transpiler/pull/137) Add throwUnlessParallelizable (defaulting to false). ([@stefanpenner](https://github.com/stefanpenner))

#### Committers: 1
- Stefan Penner ([@stefanpenner](https://github.com/stefanpenner))


## v6.3.0 (2018-05-18)

#### :rocket: Enhancement
* [#136](https://github.com/babel/broccoli-babel-transpiler/pull/136) targetExtension improvements ([@stefanpenner](https://github.com/stefanpenner))

#### :memo: Documentation
* [#134](https://github.com/babel/broccoli-babel-transpiler/pull/134) Cleanup ([@stefanpenner](https://github.com/stefanpenner))

#### :house: Internal
* [#135](https://github.com/babel/broccoli-babel-transpiler/pull/135) be explicit about what we are importing from lib/parallel-api ([@stefanpenner](https://github.com/stefanpenner))
* [#134](https://github.com/babel/broccoli-babel-transpiler/pull/134) Cleanup ([@stefanpenner](https://github.com/stefanpenner))
* [#133](https://github.com/babel/broccoli-babel-transpiler/pull/133) Ensure logging filter for parallel stuff follows the existing convent… ([@stefanpenner](https://github.com/stefanpenner))

#### Committers: 1
- Stefan Penner ([@stefanpenner](https://github.com/stefanpenner))


## v6.2.0 (2018-05-16)

#### :rocket: Enhancement
* [#132](https://github.com/babel/broccoli-babel-transpiler/pull/132) Plugins specified as an array of serializable things can be parallelized ([@mikrostew](https://github.com/mikrostew))

#### Committers: 1
- Michael Stewart ([@mikrostew](https://github.com/mikrostew))


## v6.1.4 (2018-02-05)

#### :rocket: Enhancement
* [#126](https://github.com/babel/broccoli-babel-transpiler/pull/126) Limit to single worker pool per version of babel-core ([@mikrostew](https://github.com/mikrostew))

#### Committers: 1
- Michael Stewart ([@mikrostew](https://github.com/mikrostew))


## v6.1.3 (2018-01-31)

#### :rocket: Enhancement
* [#125](https://github.com/babel/broccoli-babel-transpiler/pull/125) Support disabling parallelism via JOBS=0 ([@stefanpenner](https://github.com/stefanpenner))

#### :bug: Bug Fix
* Module names "unknown" ([@rosshadden](https://github.com/rosshadden))

#### Committers: 2
- Ross Hadden ([@rosshadden](https://github.com/rosshadden))
- Stefan Penner ([@stefanpenner](https://github.com/stefanpenner))


## v6.1.2 (2017-08-01)

#### :rocket: Enhancement
* [#119](https://github.com/babel/broccoli-babel-transpiler/pull/119) CI: Publish tags automatically ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#118](https://github.com/babel/broccoli-babel-transpiler/pull/118) package.json: Remove distTag override ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Michael Stewart ([@mikrostew](https://github.com/mikrostew))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
