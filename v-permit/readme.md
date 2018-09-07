# `v-permit` directive Vue (JSpermit)


# install

```bash
npm -i @0devco/Vpermit
# yarn
yarn add @0devco/Vpermit
```

# import > App.js

```js
import Vpermit from '@0devco/Vpermit';
Vue.use(Vpermit);
```

# use `v-permit` with `JSpermit`

```html
<template lang="html">
  <div class="">
    <div class="" v-permit="hasAllPermission([1,2,3,4])">
      <h1>done! all permission exist </h1>
    </div>
    <div v-permit="hasAnyPermission([1,2,3,4,8,9])">
      <h1>done! at least one permission exist </h1>
    </div>
  </div>
</template>

<script>
import {hasAllPermission,hasAnyPermission,hasAllRole,hasAnyRole} from '@0devco/JSpermit';
export default {
  data () {
    return {
      msg: 'Atom_Vue',
      hasAllPermission: hasAllPermission,
      hasAnyPermission: hasAnyPermission,
      hasAllRole: hasAllRole,
      hasAnyRole: hasAnyRole
    }
  }
}
</script>

<style lang="css" scoped >

</style>

```
