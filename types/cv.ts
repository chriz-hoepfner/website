export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface ITimeLineItem {
  important?: boolean;
  title: string;
  subtitle?: string;
  description?: string;
  from: string;
  to: string;
  tech?: string;
}
export interface ITimeLineItemGroup {
  important?: boolean;
  title: string;
  items: Omit<ITimeLineItem, 'title'>[];
}

export type TTimelineItem = ITimeLineItem | ITimeLineItemGroup;

export interface ISkill {
  label: string;
  rank?: 1 | 2 | 3 | 4 | 5;
  rating?: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  category?:
    | 'Languages'
    | 'Programming'
    | 'Frontend'
    | 'Backend'
    | 'OPS'
    | 'Testing'
    | 'Methodologies'
    | 'Design';
}
