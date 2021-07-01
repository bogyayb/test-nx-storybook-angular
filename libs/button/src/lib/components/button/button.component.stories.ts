import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ContiButtonComponent } from './button.component';

export default {
  title: 'components/ButtonComponent',
  component: ContiButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ContiButtonComponent>;

const Template: Story<ContiButtonComponent> = (args: ContiButtonComponent) => ({
  component: ContiButtonComponent,
  props: args,
});


export const Primary = Template.bind({});
  Primary.args = {
    text: "primary",
    bg: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  text: "secondary",
}