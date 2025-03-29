import { z } from 'zod';

// 发帖数据验证规则
export const postSchema = z.object({
  title: z.string()
    .min(5, '标题至少需要5个字符')
    .max(100, '标题最长100个字符'),
  content: z.string()
    .min(20, '内容至少需要20个字符'),
  tag: z.string()
    .min(2, '最小2个字符')
    .max(10, '最大20个字符')
});