import { css } from 'lit';
import { tailwind } from '@tailwind-wc/core';

const mapper = rule => css([rule.toString()]);

export const tw = tailwind(mapper);
