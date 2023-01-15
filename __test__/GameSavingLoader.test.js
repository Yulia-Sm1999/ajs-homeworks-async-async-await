import GameSavingLoader from '../src/GameSavingLoader';

test('should show object', async () => {
  const result = await GameSavingLoader.load('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}').then(((res) => res));
  expect(result).toEqual({ id: 9, created: 1546300800, userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 } });
});
