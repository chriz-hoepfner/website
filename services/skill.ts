import { ISkill } from 'types/cv';

export const getSortedSkillsByCategory = (
  skills: ISkill[],
  category?: ISkill['category'],
) => {
  return skills
    .filter(skill => !category || skill.category === category)
    .sort((a, b) => {
      if ((a.rating || 0) > (b.rating || 0)) {
        return -1;
      }

      if ((a.rating || 0) < (b.rating || 0)) {
        return 1;
      }

      return a.label.localeCompare(b.label);
    });
};

export const getRankedSkills = (skills: ISkill[]) => {
  return skills
    .filter(skill => typeof skill.rank === 'number')
    .sort((a, b) => {
      if (a.rank! > b.rank!) {
        return -1;
      }

      if (a.rank! < b.rank!) {
        return 1;
      }

      return a.label.localeCompare(b.label);
    });
};
