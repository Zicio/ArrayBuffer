import ArrayBufferConverter from '../converter';
import getBuffer from '../getBuffer';

test('should return correct string', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
