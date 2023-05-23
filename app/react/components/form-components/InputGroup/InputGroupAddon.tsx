import { PropsWithChildren } from 'react';

import { useInputGroupContext } from './InputGroup';

type Props = {
  required?: boolean;
};

export function InputGroupAddon({
  children,
  required,
}: PropsWithChildren<Props>) {
  useInputGroupContext();

  return (
    <span className={`input-group-addon ${required ? 'required' : ''}`}>
      {children}
    </span>
  );
}
