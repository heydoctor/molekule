import React, { forwardRef, useContext } from 'react';
import { Context } from './Formbot';

/**
 * useContext has some slight performance issues. Every update to context re-renders
 * each subscribed component and there's currently no way to bail out of renders if the
 * values we care about haven't changed. Below is a sufficient workaround below and redux maintainers are discussing here: https://github.com/facebook/react/issues/14110
 */
const PureInput = React.memo(({ Component, ...props }: any) => <Component {...props} />);

interface EasyInputProps {
  name?: string;
  Component?: any;
  shouldRenderError?: boolean;
}

function EasyInput<T>({ name, Component, shouldRenderError = true, ...props }: EasyInputProps & T) {
  const state: any = useContext(Context);

  if (!state) {
    return <PureInput name={name} Component={Component} {...props} />;
  }

  const value = name && state.values[name];
  const defaultValue =
    Component.defaultProps && Component.defaultProps.defaultValue !== undefined
      ? Component.defaultProps.defaultValue
      : '';

  return (
    <PureInput
      name={name}
      value={value !== undefined ? value : defaultValue}
      error={shouldRenderError && name ? state.errors[name] : undefined}
      onChange={state.onChange}
      onBlur={state.onBlur}
      onFocus={state.onFocus}
      Component={Component}
      {...props}
    />
  );
}

// const foo = function<T>(a: T): T {
//   return a;
// };

function createEasyInput<T>(Component: any) {
  return forwardRef((props, ref) => {
    // eslint-disable-next-line babel/new-cap
    return EasyInput<T>({ Component, forwardedRef: ref, ...props });
  });
}

export default EasyInput;
