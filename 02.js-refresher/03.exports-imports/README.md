### JavaScript code can be split so called into modules where we can import and export as needed.

### Nothing but inside a JS file we can import content from other JS file so JS know themselves their dependencies.

### Default Exports:

#### `export default .....`
#### Imports default and ONLY export of the file. Name in the import is up to us.

### Named Exports:

#### `export const .....`
#### `export let .....`
#### Import need to maintain **exact** name from export because there is no default export.

### Examples:

#### Default Export

#### `export default Person`

#### `import Person from './person.js'`

#### Named Export

#### `export const Person`

#### `import { Prs } from './person.js'`
#### `import { Prs as Person } from './person.js'`
#### `import * as bundled from './person.js'`