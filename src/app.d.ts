declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    'use:markdown'?: (node: T, parameter: string) => {
      update?: (parameter: string) => void;
      destroy?: () => void;
    };
  }
}
