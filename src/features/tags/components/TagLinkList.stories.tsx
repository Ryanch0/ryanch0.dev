// TagLinkList.stories.tsx
// 'use client';

import type { Meta, StoryObj } from '@storybook/nextjs'

import TagLinkList from './TagLinkList'

const meta: Meta<typeof TagLinkList> = {
  title: 'TagLinkList', // App Router 구조에 맞게 경로명 작성 가능
  component: TagLinkList,
  parameters: {},
  args: {}
}

export default meta

type Story = StoryObj<typeof TagLinkList>

export const Default: Story = {
  args: {}
}
