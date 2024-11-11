import { generateUtilityClasses, GlobalStateSlot } from '@mui/material';

export const utilityClasses = generateUtilityClasses<GlobalStateSlot>('', [
  'active',
  'checked',
  'completed',
  'disabled',
  'error',
  'expanded',
  'focused',
  'focusVisible',
  'required',
  'selected',
]);
