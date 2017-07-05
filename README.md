# flux-container-create
Workaround for https://github.com/facebook/flux/issues/351 based on comment by [lazy8](https://github.com/facebook/flux/issues/351#issuecomment-243175376)


## Install
```npm add flux-container-create``` or ```yarn add flux-container-create```

## Usage


### Previously:
```
import {Container} from 'flux/utils';

class AwesomeComponent extends Component {
  ...
}
const container = Container.create(AwesomeComponent)
```

### Now:
```
import FluxContainerCreate from 'flux-container-create';
class AwesomeComponent extends Component {
  ...
}
const container = FluxContainerCreate(AwesomeComponent)
```
