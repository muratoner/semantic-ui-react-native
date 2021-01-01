import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock(
	'../node_modules/react-native/Libraries/LayoutAnimation/LayoutAnimation.js'
);
configure({ adapter: new Adapter() });
