import {shallowMount} from '@vue/test-utils'
import TestComponent from '@/TestComponent.vue';

describe('TestComponent',() =>
{
    it('stubs transition template',() =>
    {
        const transitionWrapper = shallowMount(TestComponent, {
            global: {
                stubs: {
                    transition: {
                        name: 'transition',
                        template: '<p></p>'
                    }
                }
            }
        });

        expect(transitionWrapper.find('div').exists()).toBeFalsy();
        expect(transitionWrapper.find('p').exists()).toBeTruthy();
    });
});
