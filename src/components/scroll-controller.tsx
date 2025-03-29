// app/ScrollController.tsx（高阶组件）
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const ScrollController = ({ children }: {children: any}) => { // todo 服务端组件可以潜逃客户端组件
  const pathname = usePathname()

  useEffect(() => {
    const resetScroll = () => {
      // 查找主滚动容器
      const container = 
        document.querySelector('[data-main-scroll]') || 
        document.documentElement

      // 双保险重置逻辑
      container.scrollTo({ top: 0, behavior: 'instant' })
      window.requestAnimationFrame(() => {
        container.scrollTop = 0
      })
    }

    resetScroll()
    
    // 处理移动端键盘导致的布局变化
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0')
    }

    return () => {
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
      }
    }
  }, [pathname])

  return children
}
