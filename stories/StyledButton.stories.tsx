import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { StyledButton } from "../pages/StyledButton";
import { action } from "@storybook/addon-actions";

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    onClick: { action: 'クリックしたね' },
    variants: {
      controls: {type: 'radio'},
      options: ['priimary', 'success', 'transparent'],
    },
    children: {
      controls: {type: 'text'},
    }
  },
} as ComponentMeta<typeof StyledButton>

// テンプレートコンポーネントを実装
// Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

// bindを呼び出しStoryを作成
export const TemplateTest = Template.bind({})

// デフォルトのpropsを設定する
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}

