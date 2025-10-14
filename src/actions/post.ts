'use server'

import { createClientForServer } from '@/lib/supabase/server'
import { generatePreview, generateSlug } from '@/lib/utils/post-utils'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createPost = async (formData: FormData) => {
  const supabase = await createClientForServer()

  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser()

  if (authError || !user) {
    redirect('/login')
  }

  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const tagsString = formData.get('tags') as string

  //TODO tags를 string[]로 변환 (쉼표로 구분된 문자열 가정)
  const tags: string[] = tagsString
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0)

  const slug = generateSlug(title)

  const preview = generatePreview(content, 200)

  const date = new Date().toISOString()

  const meta_description = generatePreview(content, 150)

  // DB에 삽입
  const { error } = await supabase
    .from('posts')
    .insert({
      title,
      content,
      tags,
      slug,
      preview,
      date,
      meta_description
    })
    .select()
    .single()

  if (error) {
    console.error('Post creation error:', error)
    throw new Error('Failed to create post.')
  }

  revalidatePath(`/posts`, 'layout')
  redirect(`/posts/${slug}`)
}

export const updatePost = async () => {
  //TODO Auth Check
}

export const deletePost = async () => {
  //TODO Auth Check
}
