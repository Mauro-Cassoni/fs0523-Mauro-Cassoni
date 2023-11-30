import { UpperCaseTextPipe } from './upper-case-text.pipe';

describe('UpperCaseTextPipe', () => {
  it('create an instance', () => {
    const pipe = new UpperCaseTextPipe();
    expect(pipe).toBeTruthy();
  });
});
