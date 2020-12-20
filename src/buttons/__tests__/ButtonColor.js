import ButtonColor from '../ButtonColor';

describe('Button Color Utility', () => {
  it('should get correct background color', () => {
    let primary = ButtonColor.getBgColor('primary');
    let blue = ButtonColor.getBgColor('blue');
    let secondary = ButtonColor.getBgColor('secondary');
    let red = ButtonColor.getBgColor('red');
    let orange = ButtonColor.getBgColor('orange');
    let yellow = ButtonColor.getBgColor('yellow');
    let olive = ButtonColor.getBgColor('olive');
    let green = ButtonColor.getBgColor('green');
    let teal = ButtonColor.getBgColor('teal');
    let violet = ButtonColor.getBgColor('violet');
    let purple = ButtonColor.getBgColor('purple');
    let pink = ButtonColor.getBgColor('pink');
    let brown = ButtonColor.getBgColor('brown');
    let grey = ButtonColor.getBgColor('grey');
    let black = ButtonColor.getBgColor('black');
    let _default = ButtonColor.getBgColor();

    expect(primary).toBe('#2185d0');
    expect(blue).toBe('#2185d0');
    expect(secondary).toBe('#1b1c1d');
    expect(red).toBe('#db2828');
    expect(orange).toBe('#f2711c');
    expect(orange).toBe('#f2711c');
    expect(yellow).toBe('#fbbd08');
    expect(olive).toBe('##b5cc18');
    expect(green).toBe('#21ba45');
    expect(teal).toBe('#00b5ad');
    expect(violet).toBe('#6435c9');
    expect(purple).toBe('#a333c8');
    expect(pink).toBe('#e03997');
    expect(brown).toBe('#a5673f');
    expect(grey).toBe('#767676');
    expect(black).toBe('#27292a');
    expect(_default).toBe('#e0e1e2');
  });

  it('should get correct text color', () => {
    let primary = ButtonColor.getTextColor('primary');
    let secondary = ButtonColor.getTextColor('secondary');
    let red = ButtonColor.getTextColor('red');
    let _default = ButtonColor.getTextColor();

    expect(primary).toBe('#fff');
    expect(secondary).toBe('#fff');
    expect(red).toBe('#fff');
    expect(_default).toBe('rgba(0,0,0,.6)');
  });
});
