// components/Tag.tsx

import { cn } from "@/lib/utils";


interface TagProps {
  text: string;
  className?: string;
  bgColor?: string;    // 背景色 Tailwind 类
  textColor?: string;  // 文字色 Tailwind 类
  hoverTextColor?: string;  // 文字色 Tailwind 类
  hoverBgColor?: string;  // 文字色 Tailwind 类
  size?: 'xs' | 'sm' | 'md' | 'lg';
  rounded?: 'full' | 'md';
  onClick?: () => void;
}

export default function Tag({
  text,
  className,
  bgColor = 'bg-blue-100',
  textColor = 'text-blue-800',
  size = 'md',
  rounded = 'full',
  hoverTextColor = 'text-[rgb(78,82,86)]',
  hoverBgColor = '',
  onClick
}: TagProps) {
  // 动态生成悬停颜色类
//   const hoverBgColor = bgColor.replace(/(\d+)$/, (match) => 
//     `${Math.min(Number(match) + 200, 900)}`
//   );

  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center font-medium transition-colors',
        'duration-200 ease-in-out hover:scale-[1.02]',
        {
          'text-xs px-1.5 py-0.5': size === 'xs',  // 新增超小尺寸
          'text-sm px-2 py-1': size === 'sm',
          'text-base px-3 py-1.5': size === 'md',
          'text-lg px-4 py-2': size === 'lg',
          'rounded-full': rounded === 'full',
          'rounded-md': rounded === 'md',
          'cursor-pointer': !!onClick
        },
        bgColor,
        hoverBgColor,
        textColor,
        hoverTextColor,
        className
      )}
    >
      {text}
    </span>
  );
}