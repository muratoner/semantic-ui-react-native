import RouteNames from './RouteNames';

// Türü type olduğu için index.ts içerisinden export edemedim. Bu kısım teknik borç olarak kalsın. Araştırma yapılarak sorun çözülmeye çalışılacak.
export type RouteParams = {
  [RouteNames.Button]: {};
  [RouteNames.LabeledButton]: {};
  [RouteNames.Icon]: {};
  [RouteNames.Divider]: {};
  [RouteNames.Title]: {};
  [RouteNames.ProgressBar]: {};
  [RouteNames.Avatar]: {};
  [RouteNames.Checkbox]: {};
  [RouteNames.SocialIcon]: {};
};
