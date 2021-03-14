
export type Mapper<T> = (css: String) => T;

export interface Variants {
  first?: boolean;
  last?: boolean;
  odd?: boolean;
  even?: boolean;
  visited?: boolean;
  checked?: boolean;
  focusWithin?: boolean;
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  active?: boolean;
  disabled?: boolean;
  motionSafe?: boolean;
  motionReduce?: boolean;
  responsive?: boolean;
}

export interface TransformOptions<T> extends Variants {
  mapper?: Mapper<T>;
}
