import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BoxComponent } from './box.component';

export default {
  title: 'components/BoxComponent',
  component: BoxComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<BoxComponent>;

const Template: Story<BoxComponent> = (args: BoxComponent) => ({
  component: BoxComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}