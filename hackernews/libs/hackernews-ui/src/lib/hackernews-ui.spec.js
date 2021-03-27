import React from 'react';
import { render } from '@testing-library/react';
import HackernewsUi from './hackernews-ui';
describe('HackernewsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HackernewsUi />);
    expect(baseElement).toBeTruthy();
  });
});
