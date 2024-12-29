import { removeUselessSpaces } from './removeUselessSpaces';

describe('"removeUselessSpaces" util function', () => {
  it('should trim the string', () => {
    expect(removeUselessSpaces('   test   ')).toEqual('test');
  });

  it('should replace multiple consecutive spaces with one space', () => {
    expect(removeUselessSpaces('test   string           value')).toEqual('test string value');
  });
});
