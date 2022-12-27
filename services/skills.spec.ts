import { getRankedSkills, getSortedSkillsByCategory } from './skill';

describe('getSortedSkillsByCategory()', () => {
  test('sorts empty array', () => {
    expect(getSortedSkillsByCategory([])).toEqual([]);
  });

  test('sorts by rating and label', () => {
    expect(
      getSortedSkillsByCategory([
        { label: 'A', rating: 1 },
        { label: 'B', rating: 2 },
        { label: 'b', rating: 1 },
        { label: 'a', rating: 2 },
        { label: 'y' },
        { label: 'z' },
      ]),
    ).toEqual([
      { label: 'a', rating: 2 },
      { label: 'B', rating: 2 },
      { label: 'A', rating: 1 },
      { label: 'b', rating: 1 },
      { label: 'y' },
      { label: 'z' },
    ]);
  });

  test('filters by category', () => {
    expect(
      getSortedSkillsByCategory(
        [
          { label: 'A', category: 'Backend' },
          { label: 'B', category: 'Design' },
        ],
        'Backend',
      ),
    ).toEqual([{ label: 'A', category: 'Backend' }]);
  });
});

describe('getRankedSkills', () => {
  test('sorts empty array', () => {
    expect(getRankedSkills([])).toEqual([]);
  });

  test('sorts by rank', () => {
    expect(
      getRankedSkills([
        { label: 'A', rank: 1 },
        { label: 'B', rank: 2 },
        { label: 'b', rank: 1 },
        { label: 'a', rank: 2 },
        { label: 'z' },
        { label: 'y' },
      ]),
    ).toEqual([
      { label: 'a', rank: 2 },
      { label: 'B', rank: 2 },
      { label: 'A', rank: 1 },
      { label: 'b', rank: 1 },
    ]);
  });
});
