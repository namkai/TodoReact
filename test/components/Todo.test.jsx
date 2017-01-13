import {renderComponent, expect} from '../test_helper';
import Todo from '/components/Todo';


describe('Todo', () => {
    console.log(`i'm working`);
    let component;

    beforeEach(() => {
        component = renderComponent(Todo)
    })
    console.log(component);

    it('should exist', () => {
        expect(component.find('.todo')).to.exist;
    });
});
