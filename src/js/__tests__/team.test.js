import Team from '../Team';

test('this character already exists', () => {
  const team = new Team();
  team.add('Bowman');
  expect(() => team.add('Bowman')).toThrow('Такой персонаж уже есть!!!');
});

test('adding a new character', () => {
  const team = new Team();
  team.add('Bowman');
  expect(team.members.has('Bowman')).toBe(true);
});

test('adding all characters', () => {
  const team = new Team();
  team.addAll('Bowman', 'Swordsman', 'Magician');
  expect(team.members.has('Bowman', 'Swordsman', 'Magician')).toBe(true);
  expect(team.members.size).toBe(3);
});

test('converting an object to an array', () => {
  const team = new Team();
  team.addAll('Bowman', 'Swordsman', 'Magician');
  expect(team.toArray()).toEqual(['Bowman', 'Swordsman', 'Magician']);
});
