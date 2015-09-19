# angular-decorators
This library provide simple decorators to code with Angular1 like Angular2.
Currently, this library has these decorators:
* @Inject

### Install
`jspm i https://github.com/hourliert/angular-decorators`
or
`npm i https://github.com/hourliert/angular-decorators`

## Getting started
### @Inject

```javascript
import {Inject} from "angular-decorators";

@Inject("$q")
class TestCtrl {
  constructor(q) {
    var defer = q.defer();
    console.log('It works', defer);
  }
}
```
