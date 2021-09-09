export default class Profile {
  constructor(
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[]
  ) {}
}

export const profiles = [
  new Profile('Chris', 'Athanas', 'Mr.', [
    'Android Developer 2020',
    'Thai Mat Bodyworker',
  ]),
  new Profile('Alan', 'Cox', 'Mr.', ['Developer 2020', 'Angular instructor']),
  new Profile('Dee', 'Meyers', 'Ms.', ['Student 2020', 'Devloper 2021']),
];
