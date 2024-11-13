## parameters
key: string,
defaults: MaybeGetter<T>,
storage: StorageLike | undefined,
options: UseStorageOptions<T> = {}

## Options
| Name | Type | Default | Description |
----|----|----|----
| listenToStorageChanges | boolean | true | Listen to storage changes, useful for multiple tabs application |
| writeDefaults | boolean | true | Write the default value to the storage when it does not exist |
| mergeDefaults | ((storageValue: T, defaults: T) => T) | false | Merge the default value with the value read from the storage.<br>When setting it to true, it will perform a **shallow merge** for objects. You can pass a function to perform custom merge (e.g. deep merge), for example: |
| serializer | Serializer<T> | - | Custom data serialization |
| onError | (error: unknown) => void | - | On error callback<br>Default log error to `console.error` |
| shallow | boolean | false | Use shallow ref as reference |
| initOnMounted | boolean | false | Wait for the component to be mounted before reading the storage. |
