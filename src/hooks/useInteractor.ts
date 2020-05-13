import { useMemo, useState } from "react"
/**
 * Accepts an interactor class and list of properties to watch and provides updates to a component. Optionally accepts a list of arguments for the interactor class.
 *
 * ```typescript
 * // Example usage for todo interactor and monitoring its todos property
 * const interactor = useInteractor(ToDoInteractor, ["todos"])
 * ```
 * @param interactor Class type for the interactor
 * @param properties Array of interactor properties to watch, as strings
 * @param args Optional array of arguments to use when instantiating the interactor
 */
export function useInteractor<T extends Record<string, any>>(
  interactor: new (...args: any[]) => T,
  properties: Array<string>,
  args: any[] = []
): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const instance = useMemo(() => new interactor(...args), [])
  const [, updateChangeId] = useState(0)
  return useMemo(() => {
    const descriptor = properties.reduce((acc: any, key) => {
      const internalKey = `@@__${key}__`
      acc[key] = {
        enumerable: true,
        configurable: true,
        get() {
          return instance[internalKey]
        },
        set(value: any) {
          if (instance[internalKey] !== value) {
            // @ts-ignore
            instance[internalKey] = value
            updateChangeId((id) => id + 1)
          }
        },
      }
      // Set instantiated class properties
      if (instance[key] && !instance[internalKey]) {
        // @ts-ignore
        instance[internalKey] = instance[key]
        updateChangeId((id) => id + 1)
      }
      return acc
    }, {})
    return Object.defineProperties(instance, descriptor)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instance, ...properties])
}
