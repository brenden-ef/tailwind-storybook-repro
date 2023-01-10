import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Repro } from './repro';

const Story: ComponentMeta<typeof Repro> = {
  component: Repro,
  title: 'Repro',
};
export default Story;

const Template: ComponentStory<typeof Repro> = (args) => <Repro {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
