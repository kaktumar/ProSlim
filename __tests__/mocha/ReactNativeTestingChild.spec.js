import '../testutils/mocha';
import ReactNativeTestingChild, {
  __RewireAPI__ as ReactNativeTestingChildAPI
} from '../../src/ReactNativeTestingChild';

describe('ReactNativeTestingChild', function () {
  let component;
  let onClearStub;
  let capitalizeWordsStub;
  const capitalizedString = 'mock string value';

  beforeEach(function () {
    onClearStub = sinon.stub();
    capitalizeWordsStub = sinon.stub().returns(capitalizedString);
    ReactNativeTestingChildAPI.__Rewire__('capitalizeWords', capitalizeWordsStub);
  });

  describe('when props.text is empty', function () {
    const stringValue = '';
    beforeEach(function () {
      component = shallow(<ReactNativeTestingChild text={stringValue} onClear={onClearStub} />);
    });

    it('renders placeholder string', function () {
      const expectedString = 'You must input something!';
      expect(component.find('Text').nodes[1].props.children).to.eql(expectedString);
    });

    it('does not call capitalizeWords', function () {
      expect(capitalizeWordsStub).to.have.not.been.called;
    });

    describe('when clear text button is pressed', function () {
      it('should call onClear callback', function () {
        component.find('TouchableHighlight').simulate('press');
        expect(onClearStub).to.have.been.called;
      });
    });
  });

  describe('when props.text is not empty', function () {
    const stringValue = 'random value';
    beforeEach(function () {
      component = shallow(<ReactNativeTestingChild text={stringValue} onClear={onClearStub} />);
    });

    it('renders string with capitalizeWords', function () {
      expect(capitalizeWordsStub).to.have.been.calledWith(stringValue);
      expect(component.find('Text').nodes[1].props.children).to.eql(capitalizedString);
    });
  });
});